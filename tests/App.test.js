import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  it('renders one <ReviewList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ReviewList).not.have.lengthOf(1));
  });
});