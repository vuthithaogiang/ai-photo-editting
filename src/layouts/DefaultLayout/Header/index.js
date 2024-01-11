import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import icons from '~/assets/icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
      const NAVBAR_ITEMS = [
            {
                  title: 'Products',
                  path: '/products',
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
                              <div className="logo" onClick={() => navigate('/')}>
                                    <img className="logo__img" src={icons.logo} alt="" />
                                    <h2 className="logo__title">PixelPro</h2>
                              </div>

                              <div className="navbar">
                                    <ul className="navbar__list">
                                          {NAVBAR_ITEMS.map((item) => (
                                                <li
                                                      key={item.title}
                                                      className="navbar__item"
                                                      onClick={() => navigate(item.path)}
                                                >
                                                      <span className="navbar__link">{item.title}</span>
                                                      <img alt="" src={icons.arrowDown} className="navbar__icon" />
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
