import { 
  LOGOUT_ACTION,
   ME_ACTION, 
   REGISTER_ACTION } from "./types";

export const Reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_ACTION.REQUEST:
      return { ...state, isLoading: true };
      break;

    // ... (other code omitted for brevity)

    case LOGOUT_ACTION.SUCCESS:
      debugger
      return {
        ...state,
        Error: null,
        success: true,
        isLoading: false,
        Token: null,
        userDetailes: {},
      };
      break;
    case ME_ACTION.SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        userDetailes: action.payload,
        isAuthendticated:true
      };

    case ME_ACTION.FALIED:
      return {
        ...state,
        Error: "unauthrized user!",
        success: false,
        isLoading: false,
        Token: null,
        userDetailes: {},
        isAuthendticated:false
      };
    default:
      break;
  }
};
