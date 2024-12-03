import { createStore } from "redux";
import { produce } from "immer";
// return `${year}-${month}-${day+Math.floor(Math.random() * 4) + 1}`;
const mystate = {
  cursor: {
    width: 30,
    height: 30,
    rotate:360,
    filter:"hue-rotate(100deg)",
    src:"./logo.png",
  },
};
const Render = (state = mystate, action) => {
  switch (action.type) {
    case "UPDATECURSORSCALE":
      return produce(state, (draftState) => {
        // draftState.cursor.scale = action.scale;
      });
      default:
        return state; 
  }
};
const store = createStore(Render);
export default store;
