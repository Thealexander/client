import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { childre } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

//temp
 useEffect(
  () =>{
   (
    async () =>{
      setLoading(false);
    }
   )();
  },[]
 );
  //funciones
  //TODO
  const reLogin = async (accessToken)={};
  const login = async ()=>{};
  const logout =  ()=>{};
  const updateUser =  (key, value)=>{};

  const data = {
    token,
    user,
    login,
    logout,
    updateUser
  };
  if (loading ) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
