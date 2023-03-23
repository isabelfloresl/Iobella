
import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalContacto from "./componentes/ModalContacto"
import TablaContacto from "./componentes/TablaContacto"

const App = () => {

    const [citas, setCitas] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null)


    const mostrarCitas = async () => {

        const response = await fetch("api/agendarcita/Lista");

        if (response.ok) {
            const data = await response.json();
            setCitas(data)
        } else {
            console.log("error en la lista")
        }

    }


    useEffect(() => {

        mostrarCitas()
    }, [])



    const guardarCitas = async (agendarcita) => {

        const response = await fetch("api/agendarcita/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(agendarcita)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarCitas();
        }
    }

    const editarCitas = async (agendarcita) => {

        const response = await fetch("api/agendarcita/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(agendarcita)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarCitas();
        }
    }

    const eliminarCitas = async (id) => {

        var respuesta = window.confirm("desea eliminar la cita?")

        if (!respuesta) {
            return;
        }


        const response = await fetch("api/agendarcita/Eliminar/" + id, {
            method: 'DELETE',
        })

        if (response.ok) {
            mostrarCitas();
        }
    }


    return (
        <Container>
            <Row className="mt-5">

                <Col sm="12">
                    <Card color="dark">
                        <CardHeader>
                            <h5 class="text-white">Lista de Citas</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!mostrarModal)}
                            >Nueva Cita</Button>
                            <hr></hr>
                            <TablaContacto data={citas}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}

                                eliminarContacto={eliminarCitas}
                            />
                        </CardBody>
                    </Card>
                </Col>

            </Row>

            <ModalContacto
                mostrarModal={mostrarModal}

                setMostrarModal={setMostrarModal}
                guardarCitas={guardarCitas}


                editar={editar}
                setEditar={setEditar}
                editarCitas={editarCitas}
            />
        </Container>
    )

}

export default App;