import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SignUp() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className="auth">
                              <div className="auth__content">
                                    <div className="auth__content-logo">
                                          <img alt="PixelPro" src={icons.authLogo} />
                                    </div>

                                    <div className="auth__content-switch-btns">
                                          <button>Sign Up</button>
                                          <button>Sign In</button>
                                    </div>
                                    <div className="auth__content-api">
                                          <div className="auth__content-api-card">
                                                <img alt="" src={icons.images} />
                                                <p className="auth__content-api-title">5 Free Image</p>
                                                <p className="auth__content-api-text">up to 25 megapixels</p>
                                          </div>
                                          <div className="auth__content-api-card">
                                                <img alt="" src={icons.code} />
                                                <p className="auth__content-api-title">50 Free API previews</p>
                                                <p className="auth__content-api-text">per month</p>
                                          </div>
                                    </div>
                                    <div className="auth__content-socials">
                                          <div className="auth__content-social google">
                                                <img alt="google" src={icons.google} />
                                          </div>
                                          <div className="auth__content-social apple">
                                                <img alt="facebook" src={icons.apple} />
                                          </div>
                                          <div className="auth__content-social facebook">
                                                <img alt="facebook" src={icons.facebookWhite} />
                                          </div>
                                    </div>

                                    <div className="auth__content-separate">
                                          <span className="auth__content-separate-line"></span>
                                          <span className="auth__content-separate-text">Or Continue with</span>
                                          <span className="auth__content-separate-line"></span>
                                    </div>
                                    <div className="auth__content-form">
                                          <form className="form">
                                                <div className="form__group">
                                                      <div className="form__row border active">
                                                            <div className="form__control">
                                                                  <input
                                                                        className="form__input"
                                                                        type="email"
                                                                        placeholder="Email"
                                                                  />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="form__group">
                                                      <div className="form__row border">
                                                            <div className="form__control">
                                                                  <input
                                                                        type="password"
                                                                        placeholder="Password (6 characters minimun)"
                                                                        id="password"
                                                                        className="form__input"
                                                                  />
                                                            </div>
                                                            <div className="form__label">
                                                                  <label className="eye-slash" htmlFor="password">
                                                                        <img alt="" src={icons.eyeSlash} />
                                                                  </label>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="form__group">
                                                      <div className="form__row border ">
                                                            <div className="form__control">
                                                                  <input
                                                                        type="password"
                                                                        placeholder="Password comfirmation"
                                                                        id="confirm-password"
                                                                        className="form__input"
                                                                  />
                                                            </div>
                                                            <div className="form__label">
                                                                  <label
                                                                        className="eye-slash"
                                                                        htmlFor="confirm-password"
                                                                  >
                                                                        <img alt="" src={icons.eyeSlash} />
                                                                  </label>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="form__group">
                                                      <div className="form__row ">
                                                            <input id="accept-term" type="checkbox" />
                                                            <div className="form__label">
                                                                  <label className="accept-term" htmlFor="accept-term">
                                                                        I agree to the{' '}
                                                                        <a className="form__link" href="#!">
                                                                              Terms of Service
                                                                        </a>
                                                                        ,{' '}
                                                                        <a className="form__link" href="#!">
                                                                              General Terms and Conditions{' '}
                                                                        </a>
                                                                        and{' '}
                                                                        <a className="form__link" href="#!">
                                                                              Privacy Policy
                                                                        </a>
                                                                        .
                                                                  </label>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="form-group">
                                                      <div className="form__button">
                                                            <button>Sign Up</button>
                                                      </div>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                              <div className="auth__intro">
                                    <div className="auth__intro-inner">
                                          <div className="auth__intro-card">
                                                <img className="auth__intro-img" alt="" src={images.thumbIntroCard1} />
                                                <p className="auth__intro-text left">Upload your imgae</p>
                                          </div>
                                          <div className="auth__intro-card">
                                                <img className="auth__intro-img" alt="" src={images.thumbIntroCard2} />
                                                <p className="auth__intro-text right">
                                                      Automatically remove background
                                                </p>
                                                <img className="auth__intro-icon" alt="" src={icons.vector1} />
                                          </div>
                                          <div className="auth__intro-card">
                                                <img className="auth__intro-img" alt="" src={images.thumbIntroCard3} />
                                                <p className="auth__intro-text left">
                                                      Select new or upload new background
                                                </p>
                                                <img className="auth__intro-icon below" alt="" src={icons.vector2} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default SignUp;
