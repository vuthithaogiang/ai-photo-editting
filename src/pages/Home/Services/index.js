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
                              {/* Service card 1 */}
                              <div className="service-card">
                                    <div className="service-card__inner">
                                          <div className="service-card__info">
                                                <h3 className="service-card__title">
                                                      <strong className="service-card__strong--blue">Erase any </strong>
                                                      background
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
                                                <img className="img-thumb" alt="" src={images.serviceThumb1} />
                                          </figure>
                                    </div>
                              </div>
                              {/* Service card 2 */}
                              <div className="service-card">
                                    <div className="service-card__inner row-not-reverse">
                                          <figure className="service-card__wrap-thumb">
                                                <img className="img-thumb" alt="" src={images.serviceThumb2} />
                                          </figure>
                                          <div className="service-card__info">
                                                <h3 className="service-card__title">
                                                      <strong className="service-card__strong--purple">
                                                            Remove objects
                                                      </strong>{' '}
                                                      with a swipe
                                                </h3>
                                                <p className="service-card__desc">
                                                      Instantly remove unwanted objects and defects. With just a swipe
                                                      of your fingertip, you can make sure your snapshots are flawless.
                                                </p>
                                                <div className="service-card__btn">
                                                      <button className="button primary">Try For Free</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              {/* Service card 3 */}
                              <div className="service-card">
                                    <div className="service-card__inner">
                                          <div className="service-card__info">
                                                <h3 className="service-card__title">
                                                      <strong className="service-card__strong--orrange">Relight</strong>{' '}
                                                      your photographs
                                                </h3>
                                                <p className="service-card__desc">
                                                      Relight your images with beautiful lights. Instantly light
                                                      unwanted objects. With just a swipe of your point, you can make
                                                      sure your snapshots are flawless.
                                                </p>
                                                <div className="service-card__btn">
                                                      <button className="button primary">Try For Free</button>
                                                </div>
                                          </div>

                                          <figure className="service-card__wrap-thumb">
                                                <img className="img-thumb" alt="" src={images.serviceThumb3} />
                                          </figure>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Services;
