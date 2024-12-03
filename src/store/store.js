import { createStore } from "redux";
import { produce } from "immer";


// return `${year}-${month}-${day+Math.floor(Math.random() * 4) + 1}`;
const mystate = {};
const Render = (state = mystate, action) => {
  switch (action.type) {
    // case "ADD":
    //   return produce(state, (draftState) => {
    //     draftState.Tasks.unshift(action.newTask);
    //   });
  }
};
const store = createStore(Render);
export default store;
