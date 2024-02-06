import classNames from 'classnames/bind';
import styles from './RemoveObjects.module.scss';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';

const cx = classNames.bind(styles);

function RemoveObjects() {
      return (
            <div className={cx('wrapper')}>
                  <div>Remove Objects</div>
                  <QuestionsAndAnswers />
            </div>
      );
}

export default RemoveObjects;
