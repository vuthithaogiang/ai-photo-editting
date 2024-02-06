import classNames from 'classnames/bind';
import styles from './HowItWorks.module.scss';
import images from '~/assets/images';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function HowItWorks() {
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <h2 className={cx('heading')}>
                              How It <strong>Works</strong> ?
                        </h2>
                        <p className={cx('desc')}>
                              There are only 3 simple steps to remove Background from Image like a professional Editor.
                        </p>

                        <div className={cx('group-items')}>
                              <div className="row row-cols-3 row-cols-lg-1 g-3">
                                    <div className="col">
                                          <div className={cx('inner-colum')}>
                                                <div className={cx('wrap-thumb', 'upload-image')}>
                                                      <img className={cx('thumb')} alt="" src={images.uploadImage} />
                                                      <div className={cx('type', 'png')}>
                                                            <span>PNG</span>
                                                      </div>
                                                      <div className={cx('type', 'jpg')}>
                                                            <span>JPG</span>
                                                      </div>
                                                      <div className={cx('type', 'webp')}>
                                                            <span>webp</span>
                                                      </div>

                                                      <div className={cx('btn')}>
                                                            <img alt="" src={icons.uploadBtn} />
                                                            <span>Upload Image</span>
                                                      </div>
                                                </div>

                                                <div className={cx('content')}>
                                                      <p className={cx('title')}>Upload Image</p>
                                                      <p className={cx('details')}>
                                                            Click the Upload Image button, drag or copy then paste your
                                                            image to remove background from it
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col">
                                          <div className={cx('inner-colum', 'row')}>
                                                <div className={cx('wrap-thumb', 'remove-auto')}>
                                                      <img alt="" src={images.removeBgAutomaticallyImage} />
                                                      <span className={cx('feature-text')}>AI Generate</span>
                                                </div>
                                                <div className={cx('content')}>
                                                      <p className={cx('title')}>Remove Automatically</p>
                                                      <p className={cx('details')}>
                                                            FocoClipping will remove BG automatically once the image is
                                                            uploaded.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col">
                                          <div className={cx('inner-colum')}>
                                                <div className={cx('wrap-thumb', 'download-image')}>
                                                      <img
                                                            className={cx('thumb')}
                                                            alt=""
                                                            src={images.cutOutDownloadImage}
                                                      />
                                                      <span className={cx('feature-text', 'free')}>Free</span>
                                                      <span className={cx('feature-text', 'download')}>
                                                            Download Original Size
                                                      </span>
                                                </div>
                                                <div className={cx('content')}>
                                                      <p className={cx('title')}>Download cut-out image</p>
                                                      <p className={cx('details')}>
                                                            Finally click the “Download” icon to freely download the
                                                            transparent or white background image without any hassles.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
export default HowItWorks;
