import React from 'react';
import Tile from './tile';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders correctly enzyme', () => {
    const wrapper = shallow(<Tile
        clickHandler={()=>{}}
        pendingBalance={132}
        currency={"GBP"}
        id={"1"}
        fundsHeld={123}
        overDraft={123}
        accountDetails= {{
            sortCode: "1231231",
            accountNumber: 111111111,
            id: "123123"
        }}
    />)

    expect(toJson(wrapper)).toMatchSnapshot();
});