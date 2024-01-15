import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';

const cx = classNames.bind(styles);

function Reviews() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">Reviews</div>
            </div>
      );
}

export default Reviews;
