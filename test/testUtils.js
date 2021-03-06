import { ShallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/reducers';
import { middlewares } from "../src/configureStore"

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestArr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
