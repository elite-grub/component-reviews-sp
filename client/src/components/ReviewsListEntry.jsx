import React from 'react';

let id = 1

const ReviewsListEntry = ({reviews}) => {
  return (
    <div>
      <ul
        className='allReviewsContainer'>
        <li
          className='emptyDefaultContainer'
          key={id++}>
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
        {reviews && reviews.map(review => (
          <li
            className='eachReviewLinkedList'
            key={id++}>
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
                        className='userName'
                        key={id++}>
                        Ben D.
                      </li>
                      <li
                        className='locationInfo'
                        key={id++}>
                        Southgate, MI
                      </li>
                    </ul>
                    <ul
                      className='userStatsContainer'>
                      <li
                        className='friendCount'
                        key={id++}>
                        37 Friends
                      </li>
                      <li
                        className='reviewCount'
                        key={id++}>
                        131 reviews
                      </li>
                      <li
                        className='photoCount'
                        key={id++}>
                        29 Photos
                      </li>
                      <li
                        className='isElite'
                        key={id++}>
                        Elite '19'
                      </li>
                    </ul>
                  </div>
                </div>
                <ul
                  className='profileLinksContainer'>
                  <li
                    className='shareReviewLink'
                    key={id++}>
                    Share review
                  </li>
                  <li
                    className='embedReviewLink'
                    key={id++}>
                    Embed review
                  </li>
                  <li
                    className='complimentLink'
                    key={id++}>
                    Compliment
                  </li>
                  <li
                    className='sendMessageLink'
                    key={id++}>
                    Send message
                  </li>
                  <li
                    className='followUserLink'
                    key={id++}>
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
                      className='votingButtonContainer'
                      key={id++}>
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
                      className='votingButtonContainer'
                      key={id++}>
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
                      className='votingButtonContainer'
                      key={id++}>
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
                        {`:)`}
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