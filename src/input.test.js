import React from 'react';
import { shallow } from "enzyme";
import { findByTestArr, checkProps } from "../test/testUtils";

import Input from './input';

/**
 * 
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
}

test('Input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestArr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
});

test('does not throw error with expected props', () => {
    checkProps(Input, { secretWord: 'party' })
})