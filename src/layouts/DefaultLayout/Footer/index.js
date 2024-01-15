import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import icons from '~/assets/icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
      const navigate = useNavigate();

      return (
            <footer className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('row')}>
                              <div className={cx('column')}>
                                    <div className="logo" onClick={() => navigate('/')}>
                                          <img className="logo__img" src={icons.logo} alt="" />
                                          <h2 className="logo__title">PixelPro</h2>
                                    </div>
                                    <h4>
                                          PixelPro is a smart AI background removal and image editor tool that lets you
                                          edit single or bulk images with precision.
                                    </h4>
                                    <div className={cx('social-links')}>
                                          <span className={cx('social-link')}>
                                                <img alt="" src={icons.facebook} />
                                          </span>
                                          <span className={cx('social-link')}>
                                                <img alt="" src={icons.twitter} />
                                          </span>
                                          <span className={cx('social-link')}>
                                                <img alt="" src={icons.instagramFooter} />
                                          </span>
                                          <span className={cx('social-link')}>
                                                <img alt="" src={icons.youtube} />
                                          </span>
                                          <span className={cx('social-link')}>
                                                <img alt="" src={icons.linedin} />
                                          </span>
                                    </div>
                              </div>

                              <div className={cx('group-paths')}>
                                    <div className={cx('group')}>
                                          <div className={cx('inner-group')}>
                                                <div className={cx('item')}>
                                                      <h3 className={cx('path-title')}>Product</h3>
                                                      <div className={cx('path-link')}>Remove Background</div>
                                                      <div className={cx('path-link')}>Remove Objects</div>
                                                      <div className={cx('path-link')}>Upscale</div>
                                                      <div className={cx('path-link')}>Pricing</div>
                                                      <div className={cx('path-link')}>API Docs</div>
                                                </div>
                                                <div className={cx('item')}>
                                                      <h3 className={cx('path-title')}>Services</h3>
                                                      <div className={cx('path-link')}>PixelPro Production</div>
                                                      <div className={cx('path-link')}>Studio Hire</div>
                                                      <div className={cx('path-link')}>Affiliate Program</div>
                                                      <div className={cx('path-link')}>Request a Quote</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className={cx('group')}>
                                          <div className={cx('inner-group')}>
                                                <div className={cx('item')}>
                                                      <h3 className={cx('path-title')}>Recources</h3>
                                                      <div className={cx('path-link')}>How To BG Remove</div>
                                                      <div className={cx('path-link')}>Our Blog</div>
                                                      <div className={cx('path-link')}>Help Center</div>
                                                </div>
                                                <div className={cx('item')}>
                                                      <h3 className={cx('path-title')}>Company</h3>
                                                      <div className={cx('path-link')}>About</div>
                                                      <div className={cx('path-link')}>Contact</div>
                                                      <div className={cx('path-link')}>Privacy</div>
                                                      <div className={cx('path-link')}>Terms</div>
                                                      <div className={cx('path-link')}>Cookies</div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className={cx('footer-bottom')}>
                              <p>Copyright 2023 ©uihut.com</p>
                        </div>
                  </div>
            </footer>
      );
}

export default Footer;
