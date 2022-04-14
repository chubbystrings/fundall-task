import { reactive, toRefs, readonly } from "vue";
import { ACTION, INITIAL_STATE } from "@/types";
import { TOGGLE_LOADER, SET_USER } from "./actionTypes";

const initialState = reactive({
  isLoading: false,
  isAuthenticated: false,
  currentUser: null,
});

const useReducer = (): {
  state: INITIAL_STATE;
  dispatch: (action: ACTION) => void;
} => {
  const dispatch = (action: ACTION) => {
    switch (action.type) {
      case TOGGLE_LOADER:
        initialState.isLoading = !initialState.isLoading;
        return;
      case SET_USER:
        initialState.currentUser = { ...action.payload };
        return;
      default:
        return;
    }
  };

  return { state: readonly(toRefs(initialState)), dispatch };
};

export default useReducer;
