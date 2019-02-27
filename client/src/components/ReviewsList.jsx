import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

const ReviewsList = ({reviews}) => {
  return (
    <div>
      <ReviewsListEntry
        reviews={reviews}
      />
    </div>
  )
}

export default ReviewsList;