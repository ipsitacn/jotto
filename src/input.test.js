import React from 'react';
import { shallow } from "enzyme";
import { findByTestArr, checkProps } from "../test/testUtils";

import Input from './input';

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}))

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
});

describe('state controlled input field', () => {

    const wrapper = setup();
    const inputBox = findByTestArr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
})