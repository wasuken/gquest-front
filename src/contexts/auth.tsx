import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  let deftoken = null;
  if(localStorage.getItem('token')){
    deftoken = localStorage.getItem('token');
  }
  const [token, setToken] = useState(deftoken);

  const handleLogin = async (email, password) => {
    const resp = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });
    console.log(resp);
    const { access_token } = resp.data;
    setToken(access_token);
    localStorage.setItem('token', access_token);
    navigate("/dashboard");
  };
  const handleLogout = () => {
    setToken(null);
  };
  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
