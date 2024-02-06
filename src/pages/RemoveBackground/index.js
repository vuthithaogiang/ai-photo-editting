import classNames from 'classnames/bind';
import styles from './RemoveBackground.module.scss';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';
import Feature from './Feature';

const cx = classNames.bind(styles);

function RemoveBackground() {
      return (
            <div className={cx('wrapper')}>
                  <Feature />
                  <QuestionsAndAnswers />
            </div>
      );
}

export default RemoveBackground;
