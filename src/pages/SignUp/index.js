import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';
import React, { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function SignUp() {
      // Branch: feature-sign up
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

      const [email, setEmail] = useState('');
      const [emailValid, setEmailValid] = useState(false);
      const [emailFocus, setEmailFocus] = useState(false);

      const [password, setPassword] = useState('');
      const [passwordValid, setPasswordValid] = useState(false);
      const [passwordFocus, setPasswordFocus] = useState(false);

      const [confirmPassword, setConfirmPassword] = useState('');
      const [matchPassword, setMatchPassword] = useState(false);
      const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

      const [acceptTerm, setAcceptTerms] = useState(false);
      const emailRef = useRef();

      useEffect(() => {
            if (!emailRef.current) return;

            emailRef.current.focus();
      }, []);

      useEffect(() => {}, [email]);

      const toggleShowPassword = () => {
            setShowPassword(!showPassword);
      };

      const toggleShowconfirmationPassword = () => {
            setShowConfirmationPassword(!showConfirmationPassword);
      };

      const handleSubmitForm = async (e) => {
            e.preventDefault();
      };

      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className="auth">
                              <div className="auth__content">
                                    {/* Logo */}
                                    <div className="auth__content-logo">
                                          <img alt="PixelPro" src={icons.authLogo} />
                                    </div>

                                    {/* Switch Buttons */}
                                    <div className="auth__content-switch-btns">
                                          <button>Sign Up</button>
                                          <button>Sign In</button>
                                    </div>
                                    {/* APIs */}
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
                                    {/* Socials */}
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
                                    {/* Separate */}
                                    <div className="auth__content-separate">
                                          <span className="auth__content-separate-line"></span>
                                          <span className="auth__content-separate-text">Or Continue with</span>
                                          <span className="auth__content-separate-line"></span>
                                    </div>
                                    {/* Form Sign Up */}
                                    <div className="auth__content-form">
                                          <form onSubmit={handleSubmitForm} className="form">
                                                {/* Email */}
                                                <div className="form__group">
                                                      <div
                                                            className={
                                                                  emailFocus
                                                                        ? 'form__row border active'
                                                                        : 'form__row border'
                                                            }
                                                      >
                                                            <div className="form__control">
                                                                  <input
                                                                        ref={emailRef}
                                                                        className="form__input"
                                                                        type="email"
                                                                        placeholder="Email"
                                                                        value={email}
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        onFocus={() => setEmailFocus(true)}
                                                                        onBlur={() => setEmailFocus(false)}
                                                                  />
                                                            </div>
                                                      </div>

                                                      {emailFocus && email !== '' && !emailValid && (
                                                            <div className="form__error">Please enter email valid!</div>
                                                      )}
                                                </div>

                                                {/* Password */}
                                                <div className="form__group">
                                                      <div
                                                            className={
                                                                  passwordFocus
                                                                        ? 'form__row border active'
                                                                        : 'form__row border'
                                                            }
                                                      >
                                                            <div className="form__control">
                                                                  <input
                                                                        type={showPassword ? 'text' : 'password'}
                                                                        placeholder="Password (6 characters minimun)"
                                                                        id="password"
                                                                        className="form__input"
                                                                        value={password}
                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                        onFocus={() => setPasswordFocus(true)}
                                                                        onBlur={() => setPasswordFocus(false)}
                                                                  />
                                                            </div>
                                                            <div className="form__label" onClick={toggleShowPassword}>
                                                                  <label className="eye-slash" htmlFor="password">
                                                                        <img alt="" src={icons.eyeSlash} />
                                                                  </label>
                                                            </div>
                                                      </div>
                                                      {password !== '' && passwordFocus && !passwordValid && (
                                                            <div className="form__error">
                                                                  Password must be include minimun 6 characters!
                                                            </div>
                                                      )}
                                                </div>

                                                {/* Confirmation Password */}
                                                <div className="form__group">
                                                      <div
                                                            className={
                                                                  confirmPasswordFocus
                                                                        ? 'form__row border active'
                                                                        : 'form__row border '
                                                            }
                                                      >
                                                            <div className="form__control">
                                                                  <input
                                                                        type={
                                                                              showConfirmationPassword
                                                                                    ? 'text'
                                                                                    : 'password'
                                                                        }
                                                                        placeholder="Password comfirmation"
                                                                        id="confirm-password"
                                                                        className="form__input"
                                                                        value={confirmPassword}
                                                                        onChange={(e) =>
                                                                              setConfirmPassword(e.target.value)
                                                                        }
                                                                        onFocus={() => setConfirmPasswordFocus(true)}
                                                                        onBlur={() => setConfirmPasswordFocus(false)}
                                                                  />
                                                            </div>
                                                            <div
                                                                  className="form__label"
                                                                  onClick={toggleShowconfirmationPassword}
                                                            >
                                                                  <label
                                                                        className="eye-slash"
                                                                        htmlFor="confirm-password"
                                                                  >
                                                                        <img alt="" src={icons.eyeSlash} />
                                                                  </label>
                                                            </div>
                                                      </div>
                                                      {confirmPassword !== '' &&
                                                            confirmPasswordFocus &&
                                                            !matchPassword && (
                                                                  <div className="form__error">Password not match!</div>
                                                            )}
                                                </div>

                                                <div className="form__group">
                                                      <div className="form__row ">
                                                            <input
                                                                  checked={acceptTerm}
                                                                  onChange={(e) => setAcceptTerms(e.target.checked)}
                                                                  id="accept-term"
                                                                  type="checkbox"
                                                            />
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

                                                <div className="form__group">
                                                      <div className="form__error">
                                                            You must acccept terms and policy to submit form!
                                                      </div>
                                                </div>

                                                <div className="form-group">
                                                      <div className="form__button">
                                                            <button
                                                                  disabled={
                                                                        !emailValid || !passwordValid || !matchPassword
                                                                  }
                                                            >
                                                                  Sign Up
                                                            </button>
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
