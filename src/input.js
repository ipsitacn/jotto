import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { guessWord } from './actions';

function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = useState();
    const success = useSelector(state => state.success);
    const dispatch = useDispatch();

    if (success) {
        return <div data-test='component-input' />
    }

    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input data-test="input-box" className="mb-2 mx-sm-3"
                    type="text"
                    value={currentGuess}
                    placeholder="Enter Guess"
                    onChange={(event) => setCurrentGuess(event.target.value)} />
                <button data-test="submit-button" className="btn btn-primary mb-2" onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(guessWord(currentGuess));
                    setCurrentGuess("");
                }}>Submit</button>
            </form>

        </div>
    );
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;