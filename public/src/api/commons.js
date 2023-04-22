import { _get } from "./gateway";

export function getBases() {
  return _get("/v1/bases");
}

export function getSizes() {
  return _get("/v1/sizes");
}

export function getProteins() {
  return _get("/v1/proteins");
}

export function getToppings() {
  return _get("/v1/toppings");
}

