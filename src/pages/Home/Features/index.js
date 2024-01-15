import classNames from 'classnames/bind';
import styles from './Features.module.scss';

const cx = classNames.bind(styles);

function Features() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className="row row-cols-2 row-cols-lg-1">
                              <div className="column">Column</div>
                              <div className="column">Column</div>
                              <div className="column">Column</div>
                              <div className="column">Column</div>
                        </div>
                  </div>
            </div>
      );
}

export default Features;
