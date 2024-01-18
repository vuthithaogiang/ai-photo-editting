import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';
import images from '~/assets/images';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function Reviews() {
      const items = [
            {
                  id: 1,
                  avatar: images.avatar1,
                  logo: icons.logoReview1,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
            {
                  id: 2,
                  avatar: images.avatar2,
                  logo: icons.logoReview2,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
            {
                  id: 3,
                  avatar: images.avatar3,
                  logo: icons.logoReview3,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
            {
                  id: 4,
                  avatar: images.avatar1,
                  logo: icons.logoReview1,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
            {
                  id: 5,
                  avatar: images.avatar2,
                  logo: icons.logoReview2,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
            {
                  id: 6,
                  avatar: images.avatar3,
                  logo: icons.logoReview3,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
            {
                  id: 7,
                  avatar: images.avatar1,
                  logo: icons.logoReview1,
                  name: 'Aliénor Behaghel',
                  position: 'Co Founder at webdesign.gdn',
                  content: '“With Popwork, I have access to all the important information of my team. With Popwork, I have access to all the important. With Popwork, I have access to all the important information of my team. With Popwork”',
            },
      ];
      const [slideIndex, setSlideIndex] = useState(2);
      const [width, setWidth] = useState(0);
      const [start, setStart] = useState(0);
      const [change, setChange] = useState(9);
      const slideRef = useRef();

      function plusSlides(n) {
            setSlideIndex((prev) => prev + n);

            slideShow(slideIndex + n);
      }

      function slideShow(n) {
            if (n > items.length) {
                  setSlideIndex(1);
            }
            if (n < 1) {
                  setSlideIndex(items.length);
            }
      }

      function dragStart(e) {
            setStart(e.clientX);
      }
      function dragEnd(e) {
            if (change > 0) {
                  slideRef.current.scrollLeft += width;
            } else {
                  slideRef.current.scrollLeft -= width;
            }
      }

      function dragOver(e) {
            let touch = e.clientX;
            setChange(start - touch);
      }

      useEffect(() => {
            if (!slideRef.current) {
                  return;
            }

            const scrollWidth = slideRef.current.scrollWidth;
            const childrenElementCount = slideRef.current.childElementCount;
            const width = scrollWidth / childrenElementCount;
            setWidth(width);
            // console.log(width);
      }, []);

      useEffect(() => {
            if (!slideRef.current || !width) return;

            if (document.body.clientWidth < 769) {
                  let numOfthumb = Math.round(slideRef.current.offsetWidth / width);
                  slideRef.current.scrollLeft = slideIndex > numOfthumb ? (slideIndex - 1) * width : 0;
            } else {
                  let numOfthumb = Math.round(slideRef.current.offsetWidth / width);
                  slideRef.current.scrollLeft = slideIndex > numOfthumb ? (slideIndex - 1) * width : 0;
            }
      }, [width, slideIndex]);

      useEffect(() => {
            if (document.body.clientWidth < 769) {
                  setSlideIndex(1);
            }
      }, []);
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('top')}>
                              <h3 className={cx('heading')}>
                                    <strong>People love</strong> PixelPro
                              </h3>

                              <div className={cx('group-btns')}>
                                    <button onClick={() => plusSlides(-1)}>
                                          <img className={cx('rotate')} alt="" src={icons.arrowRight} />
                                    </button>
                                    <button onClick={() => plusSlides(1)}>
                                          <img alt="" src={icons.arrowRight} />
                                    </button>
                              </div>
                        </div>
                  </div>

                  <div className={cx('slide-wrap')}>
                        <div
                              className={cx('slider-img')}
                              ref={slideRef}
                              draggable={true}
                              onDragStart={dragStart}
                              onDragOver={dragOver}
                              onDragEnd={dragEnd}
                        >
                              {items.map((item, index) => (
                                    <div
                                          className={
                                                index + 1 === slideIndex ? cx('slider-box-active') : cx('slider-box')
                                          }
                                          key={item.id}
                                    >
                                          <div className={cx('inner')}>
                                                <div className={cx('logo')}>
                                                      <img alt="" src={item.logo} />
                                                </div>
                                                <p className={cx('desc')}>{item.content}</p>
                                                <div className={cx('user-info')}>
                                                      <img alt="" src={item.avatar} />
                                                      <div>
                                                            <p className={cx('username')}>{item.name}</p>
                                                            <p className={cx('user-position')}>{item.position}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  <div className={cx('dots')}>
                        {items.map((item, index) => (
                              <span
                                    className={index + 1 === slideIndex ? cx('dot', 'active') : cx('dot')}
                                    key={index}
                                    onClick={() => setSlideIndex(index + 1)}
                              ></span>
                        ))}
                  </div>
            </div>
      );
}

export default Reviews;
