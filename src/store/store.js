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
  screensize:{
    width: window.innerWidth,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isLaptop: window.innerWidth >= 1024 && window.innerWidth < 1440,
    isDesktop: window.innerWidth >= 1440
  }
};
const Render = (state = mystate, action) => {
  switch (action.type) {
    case "UPDATEscreensize":
      return produce(state, (draftState) => {
        draftState.screensize = action.screen;
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
