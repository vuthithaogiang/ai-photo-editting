import classNames from 'classnames/bind';
import styles from './Upscale.module.scss';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';

const cx = classNames.bind(styles);

function Upscale() {
      return (
            <div className={cx('wrapper')}>
                  <div>Upscale</div>
                  <QuestionsAndAnswers />
            </div>
      );
}

export default Upscale;
