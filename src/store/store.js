import { createStore } from "redux";
import { produce } from "immer";
// return `${year}-${month}-${day+Math.floor(Math.random() * 4) + 1}`;
const mystate = {
  cursor: {
    width: 30,
    height: 30,
    filter: "hue-rotate(100deg)",
    src: "./logo.png",
    rotate:360
   
    
  },
  tele:false,
};
const Render = (state = mystate, action) => {
  switch (action.type) {
    case "UPDATETELE":
      return produce(state, (draftState) => {
        draftState.tele = action.te;
      });
    case "UPDATECURSORWIDTH":
      return produce(state, (draftState) => {
        draftState.cursor.width = action.wi;
      });
    case "UPDATECURSORHEIGTH":
      return produce(state, (draftState) => {
        draftState.cursor.height = action.he;
      });
    case "UPDATECURSORSRC":
      return produce(state, (draftState) => {
        draftState.cursor.src = action.sr;
      });
    default:
      return state;
  }
};
const store = createStore(Render);
export default store;
