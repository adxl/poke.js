import { _get, _post } from "./gateway";

export function login(email, password) {
  const data = { email, password };
  return _post("/login", data);
}

export function getCurrentUser(token) {
  return _get("/me", token);
}