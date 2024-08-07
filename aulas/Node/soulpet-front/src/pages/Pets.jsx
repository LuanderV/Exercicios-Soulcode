import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { deletePet, getPets } from "../api/pets";
import { getClientes } from "../api/clientes";

function Pets() {
  const [pets, setPets] = useState(null);
  const [clientes, setClientes] = useState(null);

  // Função para buscar clientes
  async function carregarClientes() {
    try {
      const dados = await getClientes();
      const clienteMap = {};
      dados.forEach(cliente => {
        clienteMap[cliente.id] = cliente.nome;
      });
      setClientes(clienteMap);
    } catch (error) {
      console.error("Erro ao carregar clientes", error);
    }
  }

  // Função para buscar pets
  function carregarPets() {
    getPets().then((dados) => {
      setPets(dados);
    });
  }

  function deletarPet(id) {
    const deletar = confirm("Tem certeza que deseja excluir ?");
    if (deletar) {
      deletePet(id).then((resposta) => {
        toast.success(resposta.message);
        carregarPets();
      });
    }
  }

  useEffect(() => {
    carregarClientes();
    carregarPets();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Pets</h1>
      <Button as={Link} to="/pets/novo">
        Adicionar Pet
      </Button>
      <hr />
      {pets ? (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Porte</th>
              <th>Data de Nascimento</th>
              <th>Dono</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.nome}</td>
                <td>{pet.tipo}</td>
                <td>{pet.porte}</td>
                <td>{pet.dataNasc}</td>
                <td>{clientes[pet.clienteId] || 'Desconhecido'}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => deletarPet(pet.id)}>Excluir</Button>
                  <Button size="sm" as={Link} to={`/pets/editar/${pet.id}`}>Editar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Pets;
