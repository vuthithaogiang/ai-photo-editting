import classNames from 'classnames/bind';
import styles from './Services.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Services() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('services')}>
                              {/* Service card 1 */}
                              <div className="service-card">
                                    <div className="service-card__inner ">
                                          <div className="service-card__info">
                                                <h3 className="service-card__title">
                                                      <strong className="service-card__strong--blue">
                                                            Backgrounds Remove{' '}
                                                      </strong>
                                                      in a matter of seconds
                                                </h3>
                                                <p className="service-card__desc">
                                                      Our online background remover quickly spots the subject in any
                                                      photograph and produces a clean cutout for you.
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
                                                <img className="img-thumb" alt="" src={images.groupSystems} />
                                          </figure>
                                          <div className="service-card__info">
                                                <h3 className="service-card__title">
                                                      Speed up your workflow with our
                                                      <strong className="service-card__strong--purple">
                                                            {' '}
                                                            integrations
                                                      </strong>
                                                </h3>
                                                <p className="service-card__desc">
                                                      Our online background remover quickly spots the subject in any
                                                      photograph and produces a clean cutout for you.
                                                </p>
                                                <p className="service-card__desc">
                                                      To enhance your productivity and workflow, we've also integrated
                                                      plugins straight into the top design tools, software,
                                                      applications, and eCommerce platforms.
                                                </p>
                                                <div className="service-card__btn">
                                                      <button className="button primary">Try For Free</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Services;
