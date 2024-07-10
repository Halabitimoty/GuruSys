import React, { createContext, useState, ReactNode, useEffect } from "react";
import { apiClient } from "./api";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserData[] | null>(null);
  const [parsetoken, setparseToken] = useState<{ token: string } | null>(null);
  const [token, setToken] = useState("");
  const [dataToUpdate, setDataToUpdate] = useState<{
    data: Blog;
    id: string;
  } | null>(null);

  useEffect(() => {
    const GuruSysData = localStorage.getItem("GuruSys");

    if (GuruSysData) {
      setparseToken(JSON.parse(GuruSysData));
      setLoading(false);
    }
  }, []);

  const login = async ({ username, password }: Login) => {
    try {
      setLoading(true);
      const res = await apiClient.post(
        "/api/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      setToken(res.data);
      setLoading(false);
      localStorage.removeItem("GuruSys");
      localStorage.setItem("GuruSys", JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const signup = async ({ username, password }: Login) => {
    try {
      setLoading(true);
      const res = await apiClient.post(
        "/api/signup",
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

  const createBlog = async (blog: Blog) => {
    try {
      setLoading(true);
      const res = await apiClient.post("/api/createblog", blog, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsetoken?.token}`,
        },
      });
      setLoading(false);
      return res.data;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const updateBlog = async (blog: Blog, id: string) => {
    try {
      setLoading(true);
      const res = await apiClient.put(`/api/updateblog/${id}`, blog, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsetoken?.token}`,
        },
      });
      setLoading(false);
      return res.data;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const deleteBlog = async (id: string) => {
    try {
      setLoading(true);
      const res = await apiClient.delete(`/api/deleteblog/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsetoken?.token}`,
        },
      });
      setLoading(false);
      return res.data;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const getBlogs = async (): Promise<IBlog[] | undefined> => {
    try {
      setLoading(true);
      const res = await apiClient.get<IBlog[]>("/api/userblog", {
        headers: { Authorization: `Bearer ${parsetoken?.token}` },
      });
      setLoading(false);
      return res.data;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const datasToUpdate = (blog: Blog, id: string) => {
    const dataT = {
      title: blog.title,
      content: blog.content,
      paragraph: blog.paragraph,
    };
    if (dataT) setDataToUpdate({ data: dataT, id });
    return data;
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
        createBlog,
        updateBlog,
        deleteBlog,
        getBlogs,
        setLoading,
        dataToUpdate,
        datasToUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
