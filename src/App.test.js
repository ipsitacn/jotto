import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestArr } from '../test/testUtils';
import App from "./App";

const setup = () => {
  return shallow(<App />);
}
test("renders non-empty component without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestArr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
