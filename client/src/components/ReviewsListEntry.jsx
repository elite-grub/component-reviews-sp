import React from 'react';

let id = 1

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ReviewsListEntry = ({reviews}) => {
  {console.log(reviews)}
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
                src={reviews[0].collateral.emptyProfile}
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
                <strong>
                  {reviews[0].restaurantName}
                </strong>
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
                      <img
                        src={review.user.avatar}
                      />
                    </div>
                  </div>
                  <div
                    className='detailsContainer'>
                    <ul
                      className='userInfoContainer'>
                      <li
                        className='userName'
                        key={id++}>
                        {review.user.name}
                      </li>
                      <li
                        className='locationInfo'
                        key={id++}>
                        {review.user.location}
                      </li>
                    </ul>
                    <ul
                      className='userStatsContainer'>
                      <li
                        className='friendCount'
                        key={id++}>
                        {review.user.friends}
                      </li>
                      <li
                        className='reviewCount'
                        key={id++}>
                        {review.user.otherReviews}
                      </li>
                      <li
                        className='photoCount'
                        key={id++}>
                        {review.user.photos}
                      </li>
                      {review.user.isElite === true &&
                        <li
                          className='isElite'
                          key={id++}>
                          Elite {review.user.elite}
                        </li>
                      }
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
                    Follow {review.user.name}
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
                    {review.date}
                  </span>
                </div>
                <p>
                  {review.review}
                </p>
                <div
                  className='reviewFooterContainer'>
                  <div
                    className='didVoteContainer'>
                    {review.wasThisReview === true &&
                      <p>
                        <strong>
                          {review.nameAndOthers} and {getRandomInclusive(1, 5)} others
                        </strong>
                        {' '}
                        voted for this review
                      </p>
                    }
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
                        {getRandomInclusive(1, 5)}
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
                        {getRandomInclusive(1, 5)}
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
                        {getRandomInclusive(1, 5)}
                      </span>
                    </li>
                  </ul>
                </div>
                {review.commentFromOwner === true &&
                  <div
                    className='businessOwnerReplyContainer'>
                    <div
                      className='businessOwnerHeaderContainer'>
                      <div
                        className='businessOwnerAvatarContainer'>
                        <div
                          className='businessOwnerAvatar'>
                          {<img
                            src={review.ownerReview.avatar}
                          />}
                        </div>
                      </div>
                      <div
                        className='businessOwnerHeader'>
                        <strong>
                          Comment from {review.ownerReview.name} of {reviews[0].restaurantName}
                        </strong>
                        <br/>
                        {reviews[0].ownerReview.title}
                      </div>
                    </div>
                    <span>
                      {review.ownerReview.date} {review.user.name}
                      <br/>
                      {review.ownerReview.review}
                    </span>
                  </div>
                }
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewsListEntry;