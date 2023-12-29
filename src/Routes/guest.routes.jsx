import { paths } from "./paths";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";

export const guestRoutes = [
  {
    path: "",
    element: <HomeScreen />,
  },
  {
    path: paths.LOGIN_PAGE,
    element: <LoginScreen />,
  },
  {
    path: paths.REGISTER_PAGE,
    element: <RegisterScreen />,
  },
];
