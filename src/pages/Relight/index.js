import classNames from 'classnames/bind';
import styles from './Relight.module.scss';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';

const cx = classNames.bind(styles);

function Relight() {
      return (
            <div className={cx('wrapper')}>
                  <div>Relight</div>
                  <QuestionsAndAnswers />
            </div>
      );
}

export default Relight;
