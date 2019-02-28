import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

// Helper function for random inclusive number
const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ReviewsList = ({reviews}) => {
  return (
    <div>
      <div
        className='headerContainer'>
        <div
          className='headerTextContainer'>
          <div
            className='recommendedReviews'>
            Recommended Reviews
          </div>
          <div
            className='forCurrentRestaurant'>
            for {''}
            <strong>
              {reviews[0].restaurantName}
            </strong>
          </div>
        </div>
        <div
          className='searchBarContainer'>
          <div
            className='searchBar'>
            <input
              type='text'
              defaultValue='Search within the reviews'
            />
          </div>
          <div
            className='searchButton'>
            <button>
              Go
            </button>
          </div>
        </div>
        <div
          className='sortContainer'>
          <div
            className='sortBy'>
            Sort by
          </div>
          <div
            className='sortDropDown'>
            <select>
              <option
                defaultValue='yelp'>
                Yelp Sort
              </option>
              <option
                value='newest'>
                Newest First
              </option>
              <option
                value='oldest'>
                Oldest First
              </option>
              <option
                value='highest'>
                Highest Rated
              </option>
              <option
                value='lowest'>
                Lowest Rated
              </option>
            </select>
          </div>
        </div>
        <div
          className='languageContainer'>
          <div
            className='language'>
            Language
          </div>
          <div
            className='languageDropDown'>
            <select>
              <option
                defaultValue='english'>
                English ({getRandomInclusive(3000, 5500)})
              </option>
              <option
                value='secondLanguage'>
                {reviews[0].languages}
              </option>
              <option
                value='thirdLanguage'>
                {reviews[1].languages}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <ReviewsListEntry
          reviews={reviews}
        />
      </div>
    </div>
  )
}

export default ReviewsList;