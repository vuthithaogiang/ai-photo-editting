import classNames from 'classnames/bind';
import styles from './RemoveBackground.module.scss';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';
import Feature from './Feature';
import HowItWorks from './HowItWorks';
import IntroHero from './IntroHero';

const cx = classNames.bind(styles);

function RemoveBackground() {
      return (
            <div className={cx('wrapper')}>
                  <Feature />
                  <HowItWorks />
                  <IntroHero />
                  <QuestionsAndAnswers />
            </div>
      );
}

export default RemoveBackground;
