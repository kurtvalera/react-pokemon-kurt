import axios from "axios";
import { pokeApiUrl } from "../constants/constants";

export const instance = axios.create({
  baseURL: pokeApiUrl
});