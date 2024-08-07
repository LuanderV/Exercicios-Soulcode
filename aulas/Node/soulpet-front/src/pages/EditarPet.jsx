import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getPet, updatePet } from "../api/pets";
import { getCliente } from "../api/clientes"; // Adicione a função para buscar cliente

function EditarPet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [clienteNome, setClienteNome] = useState(""); // Estado para armazenar o nome do cliente
  const navigate = useNavigate();
  const { id } = useParams();

  function atualizarPet(data) {
    updatePet(id, data).then((resposta) => {
      toast.success(resposta.message);
      navigate("/pets");
    }).catch((err) => {
      toast.error(err.response.data.message);
    });
  }

  function carregarPet() {
    getPet(id).then(async (dados) => {
      reset(dados);
      
      if (dados.clienteId) {
        try {
          const cliente = await getCliente(dados.clienteId);
          setClienteNome(cliente.nome); // Define o nome do cliente no estado
        } catch (error) {
          console.error("Erro ao buscar cliente", error);
        }
      }
    }).catch((err) => {
      navigate("/pets");
    });
  }

  useEffect(() => {
    carregarPet();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Editar Pet</h1>
      <hr />
      <form onSubmit={handleSubmit(atualizarPet)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 90 })}
          />
          {errors.nome && (
            <small className="text-danger">O nome é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="tipo">Tipo</label>
          <input
            type="text"
            id="tipo"
            className="form-control"
            {...register("tipo", { required: true, maxLength: 100 })}
          />
          {errors.tipo && (
            <small className="text-danger">O tipo é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="porte">Porte</label>
          <input
            type="text"
            id="porte"
            className="form-control"
            {...register("porte", { required: true, maxLength: 100 })}
          />
          {errors.porte && (
            <small className="text-danger">O porte é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="dataNasc">Data de Nascimento</label>
          <input
            type="date"
            id="dataNasc"
            className="form-control"
            {...register("dataNasc", { required: true })}
          />
          {errors.dataNasc && (
            <small className="text-danger">A data de nascimento é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="clienteId">Nome do Cliente</label>
          <input
            type="text"
            id="clienteId"
            className="form-control"
            value={clienteNome} // Exibe o nome do cliente
            readOnly
          />
        </div>
        <Button className="mt-3" type="submit">
          Atualizar
        </Button>
      </form>
    </main>
  );
}

export default EditarPet;
