import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import icons from '~/assets/icons';
import { useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
      const NAVBAR_ITEMS = [
            {
                  title: 'Products',
                  path: '/products',
                  children: [
                        {
                              subTitle: 'Remove BG',
                              thumb: images.removeBgThumb,
                              path: '/remove-background',
                        },
                        {
                              subTitle: 'Remove Objects',
                              thumb: images.removeObjetsThumb,
                              path: '/remove-objects',
                        },
                        {
                              subTitle: 'Upscale',
                              thumb: images.upscaleThumb,
                              path: '/upscale',
                        },
                        {
                              subTitle: 'Relight',
                              thumb: images.relightThumb,
                              path: '/relight',
                        },
                  ],
            },
            {
                  title: 'Pricing',
                  path: 'pricing',
            },
            {
                  title: 'API',
                  path: '/api',
            },
            {
                  title: 'Blog',
                  path: 'blog',
            },
      ];

      const navigate = useNavigate();

      const [showNavbar, setShowNavbar] = useState(false);
      const [showDropdown, setShowDropdown] = useState(false);

      const toggleShowNavbar = () => {
            setShowNavbar(!showNavbar);
      };

      const toggleShowDropdown = () => {
            if (document.body.clientWidth > 769) {
                  return;
            }

            setShowDropdown(!showDropdown);
      };

      //  useEffect(() => {
      //      if(showDropdown) {
      //       dropdownRef

      //      }
      //      else{

      //      }
      // }, [showDropdown]);

      return (
            <header className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('header-inner')}>
                              <button className={cx('more-btn')} onClick={toggleShowNavbar}>
                                    <img alt="" src={icons.menu} />
                              </button>
                              <div className="logo" onClick={() => navigate('/')}>
                                    <img className="logo__img" src={icons.logo} alt="" />
                                    <h2 className="logo__title">PixelPro</h2>
                              </div>

                              <div className={`navbar ${showNavbar === true ? 'show' : 'hide'}`}>
                                    <ul className="navbar__list">
                                          {NAVBAR_ITEMS.map((item) => (
                                                <li
                                                      className="navbar__item"
                                                      key={item.title}
                                                      onClick={() => {
                                                            if (item.title === 'Products') {
                                                                  toggleShowDropdown();
                                                            } else {
                                                                  //navigate(item.path);
                                                            }
                                                      }}
                                                >
                                                      <div className="navbar__link">
                                                            <span
                                                                  className={`d-none d-lg-block navbar__dot ${item.title}`}
                                                            ></span>
                                                            <span>{item.title}</span>
                                                            {item.children ? (
                                                                  <>
                                                                        <img
                                                                              alt=""
                                                                              src={icons.arrowDown}
                                                                              className={
                                                                                    showDropdown
                                                                                          ? 'navbar__icon rotate'
                                                                                          : 'navbar__icon'
                                                                              }
                                                                        />
                                                                  </>
                                                            ) : (
                                                                  <></>
                                                            )}
                                                      </div>

                                                      {item.children ? (
                                                            <>
                                                                  <div
                                                                        className={
                                                                              showDropdown
                                                                                    ? 'dropdown show'
                                                                                    : 'dropdown hide'
                                                                        }
                                                                  >
                                                                        <div className="dropdown__inner">
                                                                              <div className="dropdown__list">
                                                                                    {item.children.map((subLink) => (
                                                                                          <div
                                                                                                key={subLink.subTitle}
                                                                                                className="dropdown__wrap-thumb"
                                                                                                onClick={() =>
                                                                                                      navigate(
                                                                                                            subLink.path,
                                                                                                      )
                                                                                                }
                                                                                          >
                                                                                                <img
                                                                                                      alt=""
                                                                                                      src={
                                                                                                            subLink.thumb
                                                                                                      }
                                                                                                      className="dropdown__img"
                                                                                                />
                                                                                                <h3 className="dropdown__title">
                                                                                                      {subLink.subTitle}
                                                                                                </h3>
                                                                                          </div>
                                                                                    ))}
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </>
                                                      ) : (
                                                            <></>
                                                      )}
                                                </li>
                                          ))}
                                    </ul>

                                    <div className="d-none d-lg-block">
                                          <div className="navbar__separate"></div>
                                          <div className="d-none d-lg-flex navbar__upload-file">
                                                <img alt="" src={icons.uploadFile} />
                                                <span>Drag-n-Drop to upload</span>
                                          </div>
                                          <div className="navbar__bottom">
                                                <div className="navbar__group-btn">
                                                      <button>Sign in</button>
                                                      <button>Sign up</button>
                                                </div>
                                                <img alt="" src={icons.logo} />
                                          </div>
                                    </div>
                              </div>
                              <div onClick={toggleShowNavbar} className="navbar__overlay"></div>

                              <div className={cx('top-actions')}>
                                    <div className={cx('top-actions__inner')}>
                                          <button className="button outline small ">Log in </button>
                                          <button className="button small white">Sign up for free</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </header>
      );
}

export default Header;
