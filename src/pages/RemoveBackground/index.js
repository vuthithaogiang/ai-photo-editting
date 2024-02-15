import classNames from 'classnames/bind';
import styles from './RemoveBackground.module.scss';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';
import Feature from './Feature';
import HowItWorks from './HowItWorks';
import IntroHero from './IntroHero';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function RemoveBackground() {
      useEffect(() => {
            // Scroll the body to x = 0, y = 0
            window.scrollTo(0, 0); // Change the values (0, 0) to the desired scroll position
      }, []);
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
