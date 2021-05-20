import React from 'react';
import { shallow } from "enzyme";
import { findByTestArr, checkProps } from "../test/testUtils";

import Input from './input';

/**
 * 
 * @returns {ShallowWrapper}
 */
const setup = () => {
    return shallow(<Input />);
}

test('Input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestArr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
})