import { Badge, Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getTarefas } from "../firebase/tarefas";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Tarefas() {
    const [tarefas, setTarefas] = useState(null);
    
    function carregarDados() {
        // O then devolve a lista de tarefas da coleção
        getTarefas().then((resultados) => {
            console.log(resultados);
            setTarefas(resultados);
        });
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <>
            <main>
                <Container className="mt-5">
                    <h1>Suas Tarefas</h1>
                    <hr />
                    <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefa</Link>
                    {
                        tarefas ? <section className="mt-2">{tarefas.map((tarefa) => {
                            return <Card key={tarefa.id}>
                                <Card.Body >
                                    <Card.Title>{tarefa.titulo}</Card.Title>
                                    <Card.Text>{tarefa.descricao}</Card.Text>
                                    <div className="mb-2 text-center">
                                        {tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                                        <Badge>{tarefa.categoria}</Badge>
                                    </div>
                                    <div className="text-center">
                                        <Button variant="dark">Editar</Button>
                                        <Button variant="danger">Excluir</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        })}
                        </section> : <Loader />
                    }
                </Container>
            </main>
        </>
    );
}

export default Tarefas;

