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
                  <div
                    className='reviewDate'>
                    1/25/2019
                  </div>
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