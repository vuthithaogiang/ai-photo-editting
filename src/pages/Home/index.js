import BigSection from './BigSection';
import Partners from './Partners';
import Services from './Services';
import Features from './Features';
import Reviews from './Reviews';
import Blogs from '~/components/Blogs';

function Home() {
      return (
            <main>
                  <BigSection />
                  <Partners />
                  <Services />
                  <Features />
                  <Reviews />
                  <Blogs />
            </main>
      );
}

export default Home;
