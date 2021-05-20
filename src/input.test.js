import React from 'react';
import { mount } from "enzyme";
import { findByTestArr, checkProps, storeFactory } from "../test/testUtils";
import { Provider } from 'react-redux';

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
const setup = (initialState = {}, secretWord = 'party') => {
    const store = storeFactory(initialState);
    return mount(<Provider store={store}><Input secretWord={secretWord} /></Provider>);
}

describe('renders', () => {
    describe('success is true', () => {
        let wrapper;
        beforeEach(() => { wrapper = setup({ success: true }); });
        test('Input renders without error', () => {
            const inputComponent = findByTestArr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });
        test('input box does not show', () => {
            const inputBox = findByTestArr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        test('submit button does not show', () => {
            const submitButton = findByTestArr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        });
    });
    describe('success is false', () => {
        let wrapper;
        beforeEach(() => { wrapper = setup({ success: false }); });
        test('Input renders without error', () => {
            const inputComponent = findByTestArr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });
        test('input box show', () => {
            const inputBox = findByTestArr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button show', () => {
            const submitButton = findByTestArr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
})


test('does not throw error with expected props', () => {
    checkProps(Input, { secretWord: 'party' })
});

describe('state controlled input field', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ success: false });
    })

    test('state updates with value of input button change', () => {
        const inputBox = findByTestArr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('field is cleared upon submit button clicked', () => {
        const submitButton = findByTestArr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});