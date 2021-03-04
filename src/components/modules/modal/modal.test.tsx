import React from 'react';
import Modal from './modal';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly enzyme', () => {
    const wrapper = shallow(<Modal 
        closePopup={()=>{}}
        customerBalanceData={
            {
                fundsHeld: 12,
                currency: "",
                overDraft: 12,
                pendingBalance: 132,
                accountDetails: {
                  sortCode: "123123",
                  accountNumber: "123123123123",
                  id:"123"
                }
            }
        }
        id={1}
    />)

    expect(toJson(wrapper)).toMatchSnapshot();
});