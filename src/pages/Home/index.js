import BigSection from './BigSection';
import Partners from './Partners';
import Services from './Services';
import Features from './Features';
import Reviews from './Reviews';
import Blogs from '~/components/Blogs';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';
import Dowload from '~/components/Dowload';
import { useEffect } from 'react';

function Home() {
      useEffect(() => {
            // Scroll the body to x = 0, y = 0
            window.scrollTo(0, 0); // Change the values (0, 0) to the desired scroll position
      }, []);
      return (
            <main>
                  <BigSection />
                  <Partners />
                  <Services />
                  <Features />
                  <Reviews />
                  <Blogs />
                  <QuestionsAndAnswers />
                  <Dowload />
            </main>
      );
}

export default Home;
