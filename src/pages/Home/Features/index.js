import classNames from 'classnames/bind';
import styles from './Features.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function Features() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('wrap-items')}>
                              <div className="row row-cols-2 row-cols-lg-1 g-3">
                                    <div className="column">
                                          <div className={cx('feature-item')}>
                                                <div className={cx('wrap-icon')}>
                                                      <img alt="" src={icons.featureIcon1} />
                                                </div>
                                                <div className={cx('feature-desc')}>
                                                      <p className={cx('title')}>
                                                            Eliminate acne, wrinkles on the Face
                                                      </p>
                                                      <p className={cx('text')}>
                                                            A picture when you have facial wrinkles, red pimples, or
                                                            other skin flaws.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="column">
                                          <div className={cx('feature-item')}>
                                                <div className={cx('wrap-icon')}>
                                                      <img alt="" src={icons.featureIcon2} />
                                                </div>
                                                <div className={cx('feature-desc')}>
                                                      <p className={cx('title')}>Fix old photos</p>
                                                      <p className={cx('text')}>
                                                            Simply choose the problematic areas on the photo to remove
                                                            blemishes, stains, and rips.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="column">
                                          <div className={cx('feature-item')}>
                                                <div className={cx('wrap-icon')}>
                                                      <img alt="" src={icons.featureIcon3} />
                                                </div>
                                                <div className={cx('feature-desc')}>
                                                      <p className={cx('title')}>
                                                            Eliminate acne, wrinkles on the Face
                                                      </p>
                                                      <p className={cx('text')}>
                                                            A totally free AI photo altering tool is called PixelPro.
                                                            Simple to use, quick photo editing. Be happy
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="column">
                                          <div className={cx('feature-item')}>
                                                <div className={cx('wrap-icon')}>
                                                      <img alt="" src={icons.featureIcon4} />
                                                </div>
                                                <div className={cx('feature-desc')}>
                                                      <p className={cx('title')}>
                                                            Eliminate acne, wrinkles on the Face
                                                      </p>
                                                      <p className={cx('text')}>
                                                            Use PixelPro on your smartphone or web browser to edit
                                                            images anywhere.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Features;
