import classNames from 'classnames/bind';
import styles from './Dowload.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function Dowload() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('inner')}>
                              <h3 className={cx('heading')}>Go further with PixelPro</h3>
                              <p className={cx('desc')}>
                                    Want to unlock even more features to make your photos shine? With PixelPro, you'll
                                    get access to useful features like Batch Editor, HD quality, Smart Resize, and more.
                              </p>
                              <div className={cx('group')}>
                                    <img alt="" src={icons.appleStore} />
                                    <img alt="" src={icons.googlePlay} />
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Dowload;
