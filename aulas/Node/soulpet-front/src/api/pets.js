// Este arquivo possui funções para realizar
// as operações do CRUD de Clientes
import axios from "axios";

export async function getPets() {
  const response = await axios.get("http://localhost:3000/pets");
  // Dentro de 'data' está o JSON de resposta do back-end
  return response.data;
}

export async function addPet(data) {
  // O 2º parâmetro do post é corpo da requisição
  const response = await axios.post("http://localhost:3000/pets", data);
  return response.data;
}

export async function deletePet(id) {
  const response = await axios.delete(`http://localhost:3000/pets/${id}`);
  return response.data;
}

export async function getPet(id) {
  const response = await axios.get(`http://localhost:3000/pets/${id}`);
  return response.data;
}

export async function updatePet(id, data) {
  const response = await axios.put(`http://localhost:3000/pets/${id}`, data);
  return response.data;
}