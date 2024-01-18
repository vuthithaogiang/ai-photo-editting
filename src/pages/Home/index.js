import BigSection from './BigSection';
import Partners from './Partners';
import Services from './Services';
import Features from './Features';
import Reviews from './Reviews';
import Blogs from '~/components/Blogs';
import QuestionsAndAnswers from '~/components/QuestionsAndAnswers';
import Dowload from '~/components/Dowload';

function Home() {
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
