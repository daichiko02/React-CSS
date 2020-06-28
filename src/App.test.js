import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  describe('#render', () => {
    it('should render welcome', () => {
      const wrapper = shallow(<App />);
      const text = wrapper.find('h1');

      expect(text.text()).toEqual('Welcome');
    });
  });
});
