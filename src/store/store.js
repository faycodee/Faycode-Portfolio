import { createStore } from "redux";
import { produce } from "immer";

// return `${year}-${month}-${day+Math.floor(Math.random() * 4) + 1}`;
const mystate = {  cursorScale: "1"  };
const Render = (state = mystate, action) => {
  switch (action.type) {
    case "UPDATECURSORSCALE":
      return produce(state, (draftState) => {
        draftState.cursorScale.valueOf(action.scale);
      });
  }
};
const store = createStore(Render);
export default store;
