import React, { useContext, useReducer } from "react";
import Store from "./Store";
import { Reducer } from "./Reducer";
import { useNavigate } from "react-router-dom/dist";
import { me } from "../service/AuthService";
import { ME_ACTION } from "./types";
import { paths } from "../routes/paths";

const initialState = {
  isLoading: false,
  Error: null,
  userDetailes: {},
  success: false,
  isAuthendticated:false,
};

export const State = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const navigate = useNavigate();

  /* begin:: action: get Is Auth handler  */
  const getIsAuth = async () => {
    const { status, data:user } = await me();
    if (status) {
      // trigger the success action
      dispatch({ type: ME_ACTION.SUCCESS, payload: user });
      return true;
    }

    dispatch({ type: ME_ACTION.FALIED });
    navigate(paths.LOGIN_PAGE);
  };
  /* end:: action: get Is Auth handler  */

  return (
    <Store.Provider
      value={{
        isLoading: state.isLoading,
        Error: state.Error,
        userDetailes: state.userDetailes,
        Token: state.Token,
        success: state.success,
        isAuthendticated:state.isAuthendticated,
        getIsAuth: getIsAuth,
        // UserRegister: Register,
        // UserLogin: UserLogin,
        // isTokenValid: isTokenValid,
        // Logout: Logout,
      }}
    >
      {children}
    </Store.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => {
  return useContext(Store);
};
