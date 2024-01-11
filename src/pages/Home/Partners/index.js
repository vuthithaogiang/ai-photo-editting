import classNames from 'classnames/bind';
import styles from './Partners.module.scss';
import icons from '~/assets/icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Partners() {
      const images = [
            icons.amazon,
            icons.figma,
            icons.adobe,
            icons.instagram,
            icons.shopify,
            icons.shoppee,
            icons.adobe,
            icons.amazon,
            icons.figma,
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
            const intervalId = setInterval(() => {
                  // Update the current index to the next one
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);

            // Clear the interval when the component is unmounted or on cleanup
            return () => clearInterval(intervalId);
      }, [currentIndex, images.length]);
      const containerStyle = {
            transform: `translateX(-${currentIndex * 15}%)`, // Adjust based on the width of each slide
            transition: 'transform 0.5s ease-in-out',
      };

      return (
            <div className={cx('wrapper')}>
                  <h2 className={cx('heading')}>Trusted by 10k+ Business Partners</h2>
                  <div className={cx('partners')} style={containerStyle}>
                        {images.map((image, index) => (
                              <span
                                    key={index}
                                    className={index === currentIndex ? cx('partner', 'active') : cx('partner')}
                              >
                                    <img alt="Amazon" src={image} />
                              </span>
                        ))}
                  </div>
            </div>
      );
}

export default Partners;
