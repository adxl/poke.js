import { _get } from "./gateway";

export function getBases() {
  return _get("/bases");
}

export function getSizes() {
  return _get("/sizes");
}

export function getProteins() {
  return _get("/proteins");
}

export function getToppings() {
  return _get("/toppings");
}

