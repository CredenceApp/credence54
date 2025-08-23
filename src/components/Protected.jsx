import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  // const userInfo = localStorage.getItem("isAuthenticated");
  return userInfo ? <>{children}</> : <Navigate to={"/reg/login"} replace />;
};
export default Protected;
