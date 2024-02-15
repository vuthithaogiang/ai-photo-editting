import classNames from 'classnames/bind';
import styles from './IntroHero.module.scss';
import images from '~/assets/images';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function IntroHero() {
      const tabs = [
            {
                  title: 'People',
                  thumbnail: images.peopleRemoveBackgroundThumbnail,
            },
            {
                  title: 'Object',
                  thumbnail: images.objectRemoveBackgroundThumbnail,
            },
            {
                  title: 'Icons',
                  thumbnail: images.iconRemoveBackgroundThumbnail,
            },
            {
                  title: 'Products',
                  thumbnail: images.productRemoveBackgroundThumbnail,
            },
            {
                  title: 'Animals',
                  thumbnail: images.animalRemoveBackgroundThumbnail,
            },
      ];

      const [tabActive, setTabActive] = useState(tabs[0]);
      const [widthEllement, setWidthElement] = useState(0);
      const [slideIndex, setSlideIndex] = useState(0);
      const [start, setStart] = useState(0);
      const [change, setChange] = useState(7);

      const activeRef = useRef();
      function dragStart(e) {
            setStart(e.clientX);
      }
      function dragEnd(e) {
            if (change > 0) {
                  activeRef.current.scrollLeft += widthEllement;
            } else {
                  activeRef.current.scrollLeft -= widthEllement;
            }
      }

      function dragOver(e) {
            let touch = e.clientX;
            setChange(start - touch);
      }

      useEffect(() => {
            if (!activeRef.current) {
                  return;
            }

            const scrollWidth = activeRef.current.scrollWidth;
            const childrenElementCount = activeRef.current.childElementCount;
            const width = scrollWidth / childrenElementCount;

            //  console.log(activeRef.current.children[slideIndex].clientWidth);

            // setWidthElement(activeRef.current.children[slideIndex].clientWidth);
            //console.log(width);

            setWidthElement(width);
      }, [slideIndex]);

      useEffect(() => {
            if (!activeRef.current || !widthEllement) return;

            // slideRef.current.unmount();

            if (document.body.clientWidth < 769) {
                  const scrollWidth = activeRef.current.scrollWidth;
                  const childrenElementCount = activeRef.current.childElementCount;
                  const width = scrollWidth / childrenElementCount;
                  let numOfthumb = Math.round(activeRef.current.offsetWidth / width);
                  console.log(numOfthumb);
                  console.log(slideIndex);

                  // if (slideIndex + 1 >= numOfthumb) {
                  //       activeRef.current.scrollLeft = (slideIndex + 1) * widthEllement;
                  // } else {
                  //       activeRef.current.scrollLeft = -(slideIndex + 1) * widthEllement;
                  // }
                  activeRef.current.scrollLeft =
                        slideIndex >= numOfthumb ? (slideIndex - 2) * widthEllement : -widthEllement;

                  //activeRef.current.scrollLeft += widthEllement;
            } else {
            }
      }, [widthEllement, slideIndex]);

      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <h2 className={cx('heading')}>
                              Powerful <strong>AI Background </strong>Remover for Any Images
                        </h2>
                        <p className={cx('desc')}>
                              Instantly obtain transparent backgrounds to instantly remove backgrounds from any images.
                              Permit you to change the backdrop and adjust the spectacular banners, product images, and
                              profile to your own specifications.
                        </p>

                        <div
                              ref={activeRef}
                              draggable={true}
                              onDragStart={dragStart}
                              onDragOver={dragOver}
                              onDragEnd={dragEnd}
                              className={cx('tabs')}
                        >
                              {tabs.map((tab, index) => (
                                    <div
                                          key={index}
                                          className={
                                                tab.title === tabActive.title ? cx('nav-tab', 'active') : cx('nav-tab')
                                          }
                                    >
                                          <button
                                                onClick={() => {
                                                      setSlideIndex(index + 1);
                                                      setTabActive(tab);
                                                }}
                                          >
                                                {tab.title}
                                          </button>
                                    </div>
                              ))}
                        </div>

                        {tabActive && (
                              <>
                                    <div className={cx('content-tab')}>
                                          <img className={cx('thumbnail')} alt="" src={tabActive.thumbnail} />
                                    </div>
                              </>
                        )}
                        <div className={cx('btn')}>
                              <button>Try For Free</button>
                        </div>
                  </div>
            </div>
      );
}

export default IntroHero;
