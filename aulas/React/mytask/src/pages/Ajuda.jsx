import { Container, Accordion, Button } from 'react-bootstrap';

function Ajuda() {

    return (
        <main className='mt-4'>
            <Container>
                <h1>Ajuda</h1>
                <hr />
                <Accordion defaultActiveKey={0}>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
                        <Accordion.Body>My task é um sistema
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                    <Accordion.Header>testando</Accordion.Header>
                        <Accordion.Body>My task é um sistema diferenete
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button>Clique aqui</Button>
            </Container> 
        </main>
    );
}

export default Ajuda;