import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Navbar } from './Components/Layout/Navbar';

it('should render Ticket and Footer', () => {
  const wrapper = shallow(<App />);
  const navbar = wrapper.find(Navbar);

  expect(navbar.exists()).toBe(true);
});
