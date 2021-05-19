import { ShallowWrapper } from "enzyme";

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestArr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
