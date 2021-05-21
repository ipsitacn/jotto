import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from './App';
import { findByTestArr, storeFactory } from '../test/testUtils';


jest.mock('./actions');


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = mount(<Provider store={store}><App /></Provider>);


    const inputBox = findByTestArr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    const submitButton = findByTestArr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() { } })

    return wrapper;
}

describe('no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    });
    test('creats GuessWords table with one row', () => {
        const guessedWordRows = findByTestArr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    })
});

describe.skip('some words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
        });
    });
    test('adds row to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(2);
    });
});

describe.skip('guess secret word', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
        });

        // add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockEvent);

        // simulate click on submit button
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
    });
    test('adds row to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    });
    test('displays congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    });
    test('does not display input component contents', () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        expect(inputBox.exists()).toBe(false);

        const submitButton = findByTestAttr(wrapper, "submit-button");
        expect(submitButton.exists()).toBe(false);
    });

});
