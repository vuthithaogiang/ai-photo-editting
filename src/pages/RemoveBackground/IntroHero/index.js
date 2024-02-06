import classNames from 'classnames/bind';
import styles from './IntroHero.module.scss';
import images from '~/assets/images';
import { useState } from 'react';

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

                        <div className={cx('tabs')}>
                              {tabs.map((tab) => (
                                    <>
                                          <div
                                                key={tab.title}
                                                className={
                                                      tab.title === tabActive.title
                                                            ? cx('nav-tab', 'active')
                                                            : cx('nav-tab')
                                                }
                                          >
                                                <button onClick={() => setTabActive(tab)}>{tab.title}</button>
                                          </div>
                                    </>
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
