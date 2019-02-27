import React from 'react';

const ReviewsListEntry = ({reviews}) => {
  return (
    <div>
      <ul
        className='allReviewsContainer'>
        <li
          className='emptyDefaultContainer'>
          <div
            className='emptyAvatarContainer'>
            <div
              className='emptyProfile'>
              {<img
                src='https://s3-us-west-1.amazonaws.com/elite-grub-collateral/empty_profile.png'
              />}
            </div>
            <div
              className='emptyStartReviewContainer'>
              <div
                className='emptyStarsContainer'>
                <div
                  className='emptyStars'>
                  *****
                </div>
              </div>
              <div
                className='startReviews'>
                Start your review of {''}
                <strong>Fog Harbor Fish House</strong>
              </div>
            </div>
          </div>
        </li>
        {reviews.map(review => (
          <li
            className='eachReviewLinkedList'>
            <div
              className='eachReviewContainer'>
              <div
                className='reviewSidebarContentContainer'>
                <div
                  className='profileContainer'>
                  <div
                    className='avatarContainer'>
                    <div
                      className='avatar'>
                      {/* avatar */}
                    </div>
                  </div>
                  <div
                    className='detailsContainer'>
                    <ul
                      className='userInfoContainer'>
                      <li
                        className='userName'>
                        Ben D.
                      </li>
                      <li
                        className='locationInfo'>
                        Southgate, MI
                      </li>
                    </ul>
                    <ul
                      className='userStatsContainer'>
                      <li
                        className='friendCount'>
                        37 Friends
                      </li>
                      <li
                        className='reviewCount'>
                        131 reviews
                      </li>
                      <li
                        className='photoCount'>
                        29 Photos
                      </li>
                      <li
                        className='isElite'>
                        Elite '19'
                      </li>
                    </ul>
                  </div>
                </div>
                <ul
                  className='profileLinksContainer'>
                  <li
                    className='shareReviewLink'>
                    Share review
                  </li>
                  <li
                    className='embedReviewLink'>
                    Embed review
                  </li>
                  <li
                    className='complimentLink'>
                    Compliment
                  </li>
                  <li
                    className='sendMessageLink'>
                    Send message
                  </li>
                  <li
                    className='followUserLink'>
                    Follow Ben D.
                  </li>
                </ul>
              </div>
              <div
                className='reviewContentContainer'>
                <div
                  className='reviewStarsContainer'>
                  <div
                    className='reviewStars'>
                    *****
                  </div>
                  <span>
                    1/25/2019
                  </span>
                </div>
                <p>
                  food was great
                </p>
                <div
                  className='reviewFooterContainer'>
                  <div
                    className='didVoteContainer'>
                    <p>
                      <strong>
                        Randy M. and 2 others
                      </strong>
                      {' '}
                      voted for this review
                    </p>
                  </div>
                  <ul
                    className='votingButtonsContainer'>
                    <li
                      className='votingButtonContainer'>
                      <span
                        className='votingIcon'>
                        &#9786;
                      </span>
                      {' '}
                      <span
                        className='voteType'>
                        <strong>
                          Useful
                        </strong>
                      </span>
                      {' '}
                      <span
                        className='voteCount'>
                        1
                      </span>
                    </li>
                    <li
                      className='votingButtonContainer'>
                      <span
                        className='votingIcon'>
                        &#9786;
                      </span>
                      {' '}
                      <span
                        className='voteType'>
                        <strong>
                          Funny
                        </strong>
                      </span>
                      {' '}
                      <span
                        className='voteCount'>
                        2
                      </span>
                    </li>
                    <li
                      className='votingButtonContainer'>
                      <span
                        className='votingIcon'>
                        &#9786;
                      </span>
                      {' '}
                      <span
                        className='voteType'>
                        <strong>
                          Cool
                        </strong>
                      </span>
                      {' '}
                      <span
                        className='voteCount'>
                        1
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className='businessOwnerReplyContainer'>
                  <div
                    className='businessOwnerHeaderContainer'>
                    <div
                      className='businessOwnerAvatarContainer'>
                      <div
                        className='businessOwnerAvatar'>
                        :)
                      </div>
                    </div>
                    <div
                      className='businessOwnerHeader'>
                      <strong>
                        Comment from Bob P. of Fog Harbor Fish House
                      </strong>
                      <br/>
                      Business Manager
                    </div>
                  </div>
                  <span>
                    1/26/2019 Ben
                    <br/>
                    Thanks for eating with us
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewsListEntry;