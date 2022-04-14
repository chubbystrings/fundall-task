import useReducer from "@/store";
import { setUser } from "@/store/actions";
// import jwtDecode from "jwt-decode";

export const checkIsLoggedIn = (): boolean => {
  const user = localStorage.getItem("ExpenseTrackerUser");
  const { dispatch } = useReducer();

  if (user) {
    const userObj = JSON.parse(user);
    const today = new Date();
    const expiryDate = new Date(userObj.expires_at);
    if (today > expiryDate) {
      localStorage.clear();
      dispatch(setUser(null));
      return false;
    }
    dispatch(setUser(userObj));
    return true;
  }
  return false;
};
