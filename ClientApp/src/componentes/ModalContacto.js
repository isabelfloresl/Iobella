import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, ModalFooter, Button } from "reactstrap"

const modeloCitas = {
    idCita: 0,
    nombre: "",
    correo: "",
    telefono: "",
    servicio: ""
}


const ModalContacto = ({ mostrarModal, setMostrarModal, guardarCitas, editar, setEditar, editarCitas }) => {

    const [citas, setCitas] = useState(modeloCitas);

    const actualizarDato = (e) => {

        console.log(e.target.name + " : " + e.target.value)
        setCitas(
            {
                ...citas,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (citas.idcita == 0) {
            guardarCitas(citas)
        } else {
            editarCitas(citas)
        }

        setCitas(modeloCitas)

    }

    useEffect(() => {
        if (editar != null) {
            setCitas(editar)
        } else {
            setCitas(modeloCitas)
        }
    }, [editar])

    const cerrarModal = () => {

        setMostrarModal(!mostrarModal)
        setEditar(null)
    }


    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>

                {citas.idCita == 0 ? "Nueva Cita" : "Editar Cita"}

            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={citas.nombre} />
                    </FormGroup>

                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={citas.telefono} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizarDato(e)} value={citas.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Servicio</Label>
                        <Input name="servicio" onChange={(e) => actualizarDato(e)} value={citas.servicio} />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal} >Cerrar</Button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalContacto;
