import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader"
import toast from "react-hot-toast";
import { deletePet, getPets } from "../api/pets";

function Pets() {
  const [pets, setPets] = useState(null)

  function carregarPets() {
    getPets().then((dados) => {
      setPets(dados);
    })
  }

  function deletarPet(id) {
    const deletar = confirm("Tem certeza que deseja excluir ?")
    if (deletar) {
      deletePet(id).then((resposta) => {
        toast.success(resposta.message)
        carregarPets();
      })
    }
  }

  useEffect(() => {
    carregarPets();
  }, [])

  return (
    <main className="mt-4 container">
      <h1>Pets</h1>
      <Button as={Link} to="/pets/novo">
        Adicionar Pet
      </Button>
      <hr />
      {pets ? <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Porte</th>
            <th>Data de Nascimento</th>
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
              <td>{pet.clienteId ? pet.clienteId.nome : 'Cliente não encontrado'}</td> {/* Exibindo o nome do cliente */}
              <td>
                <Button variant="danger" size="sm" onClick={() => deletarPet(pet.id)}>Excluir</Button>
                <Button size="sm" as={Link} to={`/pets/editar/${pet.id}`}>Editar</Button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table> : <Loader />}
    </main>
  );
}

export default Pets;
