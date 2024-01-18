import classNames from 'classnames/bind';
import styles from './QuestionsAndAnswers.module.scss';
import React, { useState } from 'react';
import icons from '~/assets/icons';

const cx = classNames.bind(styles);

function QuestionsAndAnswers() {
      const listQuestionAndAnswer = [
            {
                  id: 1,
                  question: 'How to remove the background of a picture for free?',
                  answer: 'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
            },

            {
                  id: 2,
                  question: 'How to remove an object from a picture?',
                  answer: 'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
            },
            {
                  id: 3,
                  question: 'How to remove a person from a picture?',
                  answer: 'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
            },
            {
                  id: 4,
                  question: 'How to remove watermark?',
                  answer: 'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
            },
            {
                  id: 5,
                  question: 'How to remove background from picture on iPhone?',
                  answer: 'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
            },
            {
                  id: 6,
                  question: 'How to remove background from picture on Android?',
                  answer: 'To remove the background of a picture, go to PixelPro.co/remove-background, and upload your image. PixelPro will remove the background for you, and you will be able to download your HD image for free.',
            },
      ];

      const [indexQuestion, setIndexquestion] = useState(null);
      return (
            <div className={cx('wrapper')}>
                  <div className="container">
                        <h3 className={cx('heading')}>FAQs</h3>
                        {listQuestionAndAnswer.map((item, index) => (
                              <div className={cx('item')} key={item.id}>
                                    <div className={cx('top')}>
                                          <h4
                                                className={cx('question')}
                                                onClick={() => {
                                                      if (indexQuestion !== null && index + 1 === indexQuestion) {
                                                            setIndexquestion(null);
                                                      } else {
                                                            setIndexquestion(index + 1);
                                                      }
                                                }}
                                          >
                                                {item.question}
                                          </h4>
                                          {indexQuestion !== null && indexQuestion === index + 1 ? (
                                                <>
                                                      <span onClick={() => setIndexquestion(null)}>
                                                            <img alt="" src={icons.minus} />
                                                      </span>
                                                </>
                                          ) : (
                                                <>
                                                      <span onClick={() => setIndexquestion(index + 1)}>
                                                            <img alt="" src={icons.plus} />
                                                      </span>
                                                </>
                                          )}
                                    </div>

                                    <p
                                          className={
                                                indexQuestion !== null && index + 1 === indexQuestion
                                                      ? cx('answer', 'show')
                                                      : cx('answer')
                                          }
                                    >
                                          {item.answer}
                                    </p>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

export default QuestionsAndAnswers;
