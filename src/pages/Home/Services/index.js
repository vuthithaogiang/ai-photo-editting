import classNames from 'classnames/bind';
import styles from './Services.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Services() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <h2 className={cx('heading')}>
                              Meet your new <strong>AI design assistant</strong>
                        </h2>
                        <p className={cx('description')}>
                              Save days of productivity by letting ClipDrop’s artificial intelligence do the boring and
                              time-consuming tasks.
                        </p>
                        <div className={cx('services')}>
                              <div className="service-card">
                                    <div className="service-card__inner">
                                          <div className="servive-card__info">
                                                <h3 className="service-card__title">
                                                      <strong>Erase any</strong> background
                                                </h3>
                                                <p className="service-card__desc">
                                                      Edit photos quickly and accurately without all the effort.
                                                      PhotoRoom makes it easy to keep the focus on the foreground, plus
                                                      it's 2x more accurate than other apps.
                                                </p>
                                                <div className="service-card__btn">
                                                      <button className="button primary">Try For Free</button>
                                                </div>
                                          </div>

                                          <figure className="service-card__wrap-thumb">
                                                <img alt="" src={images.serviceThumb1} />
                                          </figure>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Services;
