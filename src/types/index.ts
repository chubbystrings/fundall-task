export interface ACTION {
  type: string;
  payload?: any;
}

export interface INITIAL_STATE {
  isLoading: boolean;
  currentUser: CURRENT_USER | null;
  isAuthenticated: boolean;
}

export type DISPATCH = (action: ACTION) => INITIAL_STATE;

export interface SIGNUP_DATA {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  password_confirmation: string;
}

export interface CURRENT_USER {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  access_token: string;
  expires_at: string;
}
