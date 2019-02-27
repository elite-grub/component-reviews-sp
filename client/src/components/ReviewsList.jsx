import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

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
            for Fog Harbor Fish House
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
                English (5007)
              </option>
              <option
                value='japanese'>
                Japanese (9)
              </option>
              <option
                value='portugese'>
                Portugese (6)
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