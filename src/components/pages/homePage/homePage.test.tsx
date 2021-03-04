import React from 'react';
import HomePage from './homePage';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import generateStore from "../../../stateManager/store/generateStore";
import journeyReducers from "../../../stateManager/reducers/journeyReducer";
import { Provider } from "react-redux";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const mockfn = jest.fn();
describe("homepage", () => {
    let wrapper: any;
    let store: any;
    const props: any = {
      history: { push: mockfn },
      match: { params: {} },
      dataSelectorPrefix: "ccob",
      isDirty: true,
      setSessionTracking: mockfn,
    };
  
    beforeEach(() => {
      store = generateStore(journeyReducers);
      wrapper = mount(
        <Provider store={store}>
          <HomePage {...props} />
        </Provider>
      );
    });
  
    it('renders correctly enzyme', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});