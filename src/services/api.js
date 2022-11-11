import axios from "axios";

/* Usamos o axios para criar uma referência de endereço da API/Servidor (chamada de baseURL) */
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
