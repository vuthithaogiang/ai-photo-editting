import classNames from 'classnames/bind';
import styles from './OtherProducts.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function OtherProducts() {
      const PRODUCTS = [
            {
                  id: 1,
                  name: 'Remove Objects',
                  thumb: images.productThumb1,
                  desc: 'Remove any object, person, text, or defect from pictures in one click',
            },
            {
                  id: 2,
                  name: 'Upscale',
                  thumb: images.productThumb2,
                  desc: 'Modern AI is used by us to upscale and improve photos. Convert your SD photos to HD photos. Modern AI is used by us to upscale and improve photos. Convert your SD photos to HD photos.',
            },
            {
                  id: 3,
                  name: 'Relight',
                  thumb: images.productThumb3,
                  desc: 'Modern AI is used by us to upscale and improve photos. Convert your normal photos to RGB photos.',
            },
      ];
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <h2 className={cx('heading')}>
                              Try Other<strong> Products</strong>
                        </h2>

                        <div className={cx('product-cards')}>
                              <div className="row row-cols-3 row-cols-lg-2 row-cols-md-1 g-3">
                                    {PRODUCTS.map((item) => (
                                          <div className="col" key={item.id}>
                                                <div className={cx('product-card')}>
                                                      <div className={cx('inner-card')}>
                                                            <img
                                                                  className={cx('img-thumb')}
                                                                  alt={item.name}
                                                                  src={item.thumb}
                                                            />
                                                            <div className={cx('product-info')}>
                                                                  <h3 className={cx('product-name')}>{item.name}</h3>
                                                                  <p className={cx('product-desc')}>{item.desc}</p>
                                                                  <div className={cx('btn')}>
                                                                        <button>Try For Free</button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default OtherProducts;
