import classNames from 'classnames/bind';
import styles from './BigSection.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BigSection() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('text')}>
                              <h2 className={cx('heading')}>
                                    Create stunning visuals <strong>in seconds</strong>
                              </h2>
                              <ul className={cx('features')}>
                                    <li className={cx('feature')}>
                                          <img alt="" src={icons.check} />
                                          <p>Free Background Remover</p>
                                    </li>
                                    <li className={cx('feature')}>
                                          <img alt="" src={icons.check} />
                                          <p>Remove Objects</p>
                                    </li>
                                    <li className={cx('feature')}>
                                          <img alt="" src={icons.check} />
                                          <p>Image Upscale</p>
                                    </li>
                              </ul>

                              <div className={cx('wrap-button')}>
                                    <button className="button  primary">Try For Free</button>
                              </div>
                        </div>
                  </div>
                  <div className={cx('intro-thumb')}>
                        <div className={cx('intro-thumb__inner')}>
                              <div className={cx('intro-thumb__top')}>
                                    <div className={cx('dots')}>
                                          <span className={cx('dot', 'red')}></span>
                                          <span className={cx('dot', 'yellow')}></span>
                                          <span className={cx('dot', 'green')}></span>
                                    </div>
                                    <div className={cx('intro-thumb__top-path')}>
                                          <img alt="" src={icons.lock} />
                                          <p>PixelPro</p>
                                    </div>
                              </div>
                              <div className={cx('intro-thumb__logo')}>
                                    <div className="logo">
                                          <img className="logo__img" alt="" src={icons.logo} />
                                          <h2 className="logo__title">PixelPro</h2>
                                    </div>
                              </div>
                              <div className={cx('intro-thumb__wrap-cards')}>
                                    <div className={cx('intro-thumb__cards')}>
                                          <div className={cx('intro-thumb__card')}>
                                                <img alt="" src={images.thumbIntroCard1} />
                                                <p>Upload your image</p>
                                          </div>
                                          <div className={cx('intro-thumb__card')}>
                                                <img alt="" src={images.thumbIntroCard2} />
                                                <p>Automatically remove background</p>
                                          </div>
                                          <div className={cx('intro-thumb__card')}>
                                                <img alt="" src={images.thumbIntroCard3} />
                                                <p>Select new or upload new background</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
export default BigSection;
