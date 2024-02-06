import classNames from 'classnames/bind';
import styles from './Feature.module.scss';
import icons from '~/assets/icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Feature() {
      const assetImages = [
            {
                  source: images.image1,
            },
            {
                  source: images.image2,
            },
            {
                  source: images.image3,
            },
            {
                  source: 'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1672568263341-JEU9RNRTOWOG7CXLQK3T/How+I+Spent+My+Last+Days+of+2022+-+Her86m2+-+_1.84.1.jpg?format=1500w',
            },
      ];

      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <div className={cx('inner')}>
                              <div className={cx('left')}>
                                    <h2 className={cx('heading')}>
                                          Remove background online in <strong>1click</strong>
                                    </h2>

                                    <div className={cx('upload-image')}>
                                          <button>
                                                <img alt="" src={icons.plusWhite} />
                                                <span>Upload Image</span>
                                          </button>
                                          <p>Drop an image or paste</p>
                                    </div>

                                    <div className={cx('suggest-images')}>
                                          <p>
                                                No image? Try one of these:
                                                <img alt="" src={icons.arrowDownSmall} />
                                          </p>

                                          <div className={cx('list-image')}>
                                                {assetImages.map((image, index) => (
                                                      <img key={index} alt="" src={image.source} />
                                                ))}
                                          </div>
                                    </div>
                              </div>

                              <div className={cx('right')}>
                                    <div className={cx('wrap-images')}>
                                          <div className={cx('image')}>
                                                <img
                                                      className={cx('')}
                                                      alt=""
                                                      src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1672564004027-7Q913A12XO5EWSIQZ3CV/1+Garmisch+Schloss+Elmau+-+Her86m2+3.jpg?format=1500w"
                                                />
                                                <img
                                                      className={cx('')}
                                                      alt=""
                                                      src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1672564003895-EUQL5B96V5WV7WV2WZMM/1+Garmisch+Schloss+Elmau+-+Her86m2+4.jpg?format=1500w"
                                                />
                                                <img
                                                      className={cx('')}
                                                      alt=""
                                                      src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1672568262885-FRWVT46HDKAXV9RYM3GV/How+I+Spent+My+Last+Days+of+2022+-+Her86m2+-+_1.83.1.jpg?format=1500w"
                                                />
                                                <img
                                                      alt=""
                                                      className={cx('')}
                                                      src="https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1672568272550-WBZSTM1Q4L7ZKUMDUEET/How+I+Spent+My+Last+Days+of+2022+-+Her86m2+-+_1.87.1.jpg?format=1500w"
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Feature;
