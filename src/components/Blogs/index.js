import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Blogs() {
      const itemBlogs = [
            {
                  id: 1,
                  title: '10 Effective Strategies to Remove Background from Images',
                  desc: 'High-quality pictures are not enough, but editing them is also essential for taking good pictures, lighting, angles, and many factors impact.',
                  nameAuthor: 'Moinul Hasan',
                  avatarAuthor: images.authorBlogAvatar1,
                  thumbnail: images.blogThumbnaail1,
            },
            {
                  id: 2,
                  title: '7 Powerful Strategies to Build Stronger Relationships',
                  desc: 'A passport is an essential travel document confirming identity and citizenship. A passport photo with a plain background is required to ensure that the photo.',
                  nameAuthor: 'Ksenia Sverku',
                  avatarAuthor: images.authorBlogAvatar2,
                  thumbnail: images.blogThumbnail2,
            },
      ];
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <h2 className={cx('heading')}>Latest Articles</h2>
                        <div className={cx('wrap-blogs')}>
                              <div className="row row-cols-2 row-cols-md-1 g-3">
                                    {itemBlogs.map((item, index) => (
                                          <div className="col" key={index}>
                                                <div className="blog-card">
                                                      <div className="blog-card__inner">
                                                            <img
                                                                  alt=""
                                                                  src={item.thumbnail}
                                                                  className="blog-card__thumbnail"
                                                            />
                                                            <h3 className="blog-card__title">{item.title}</h3>
                                                            <p className="blog-card__desc">{item.desc}</p>
                                                            <div className="blog-card__author">
                                                                  <img alt="" src={item.avatarAuthor} />
                                                                  <p>{item.nameAuthor}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                        <div className={cx('wrap-btn')}>
                              <button className="button primary">See All Post</button>
                        </div>
                  </div>
            </div>
      );
}

export default Blogs;
