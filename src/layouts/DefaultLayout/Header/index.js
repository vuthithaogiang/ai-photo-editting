import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import icons from '~/assets/icons';
import { useNavigate } from 'react-router-dom';
import images from '~/assets/images';

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
                              path: '/',
                        },
                        {
                              subTitle: 'Remove Objects',
                              thumb: images.removeObjetsThumb,
                              path: '/',
                        },
                        {
                              subTitle: 'Upscale',
                              thumb: images.upscaleThumb,
                              path: '/',
                        },
                        {
                              subTitle: 'Relight',
                              thumb: images.relightThumb,
                              path: '/',
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
      return (
            <header className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('header-inner')}>
                              <button className={cx('more-btn')}>
                                    <img alt="" src={icons.menu} />
                              </button>
                              <div className="logo" onClick={() => navigate('/')}>
                                    <img className="logo__img" src={icons.logo} alt="" />
                                    <h2 className="logo__title">PixelPro</h2>
                              </div>

                              <div className="navbar">
                                    <ul className="navbar__list">
                                          {NAVBAR_ITEMS.map((item) => (
                                                <li
                                                      className="navbar__item"
                                                      key={item.title}
                                                      //       onClick={() => navigate(item.path)}
                                                >
                                                      <div className="navbar__link">
                                                            <span>{item.title}</span>
                                                            {item.children ? (
                                                                  <>
                                                                        <img
                                                                              alt=""
                                                                              src={icons.arrowDown}
                                                                              className="navbar__icon"
                                                                        />
                                                                  </>
                                                            ) : (
                                                                  <></>
                                                            )}
                                                      </div>

                                                      {item.children ? (
                                                            <>
                                                                  <div className="dropdown">
                                                                        <div className="dropdown__inner">
                                                                              <div className="dropdown__list">
                                                                                    {item.children.map((subLink) => (
                                                                                          <div
                                                                                                key={subLink.subTitle}
                                                                                                className="dropdown__wrap-thumb"
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
                              </div>

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
