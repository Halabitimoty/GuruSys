import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserData[] | null>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const GuruSysData = localStorage.getItem("GuruSys");

    if (GuruSysData) {
      setData(JSON.parse(GuruSysData));
      setLoading(false);
    }
  }, []);

  const login = async ({ username, password }: Login) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      setToken(res.data);
      setLoading(false);
      localStorage.setItem("GuruSys", JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const signup = async ({ username, password }: Login) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      setToken(res.data);
      setLoading(false);
      localStorage.setItem("GuruSys", JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const logout = () => {
    setData([]);
    setToken("");
    localStorage.removeItem("GuruSys");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        loading,
        data,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
