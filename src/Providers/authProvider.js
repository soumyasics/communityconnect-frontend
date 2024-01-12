import { useState } from "react";
import AuthContext from "../Context/authContext.js";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginUser = (data) => {
    setUser(data);
  };
  const logoutUser = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;