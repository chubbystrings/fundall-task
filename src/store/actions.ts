import { TOGGLE_LOADER, SET_USER } from "./actionTypes";
import { ACTION, CURRENT_USER } from "@/types";

export const toggleLoader = (): ACTION => ({
  type: TOGGLE_LOADER,
});

export const setUser = (payload: CURRENT_USER | null): ACTION => ({
  type: SET_USER,
  payload,
});
