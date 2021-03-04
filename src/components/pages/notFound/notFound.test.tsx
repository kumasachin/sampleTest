import React from 'react';
import NotFound from './notFound';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly enzyme', () => {
    const wrapper = shallow(<NotFound />)

    expect(toJson(wrapper)).toMatchSnapshot();
});