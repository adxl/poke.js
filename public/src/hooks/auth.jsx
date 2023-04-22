import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { login, getCurrentUser } from "@api/auth";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [_user, setUser] = useState({});
  const [_token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("poke-token"))
  );

  const refreshUser = () => {
    if (!_token) return;

    getCurrentUser(_token)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((_) => {
        sessionStorage.setItem("poke-token", JSON.stringify(null));
        location.href= "/login";
      });
  }

  useEffect(() => {
    refreshUser();
  }, [])

  useEffect(() => {
    sessionStorage.setItem("poke-token", JSON.stringify(_token));
    refreshUser();
  }, [_token]);

  function handleLogin(email, password) {
    return new Promise((_, reject) => {
      login(email, password)
        .then(({ data: token }) => {
          setToken("Bearer " + token);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  const handleLogout = useCallback(() => {
    setToken(null);
    location.href = "/login";
  }, []);

  const value = useMemo(
    () => ({
      token: _token,
      setToken: setToken,
      user: _user,
      login: handleLogin,
      logout: handleLogout,
      refreshUser: refreshUser,
    }),
    [_token, _user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}