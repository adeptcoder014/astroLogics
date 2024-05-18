// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import astroServer from '../constants/url';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState('TOKEN_369');


  useEffect(() => {
    // astroServer.get('/user/get').then(res => 
    //   console.log('-----',res.data[0]))

  }, [])
  const login = (token) => {
    // console.log("=== token ---> ", token);
    setUserToken(token);
  };

  const logout = () => {
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout,setUserToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext); // Ensure you're returning the correct context value
  return context
};




