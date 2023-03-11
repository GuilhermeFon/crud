import React, {useState} from "react";

import {addProductFetch} from "../../store/fethActions";
import {useDispatch} from "react-redux";

import {Button, Form, Modal, InputGroup} from "react-bootstrap";

export default function ModalProduct({show, handleClose}) {
  const [hidden, setHidden] = useState(true);
  const [perishable, setPerishable] = React.useState(false);
  const [expiration_date, setExpirationDate] = React.useState("");
  const handleHidden = () => setHidden(true);
  const handleNotHidden = () => {
    setHidden(false);
  };

  const [form, setForm] = useState({
    name: "",
    manufacturing_date: "",
    perishable: "",
    expiration_date: "",
    price: "",
  });

  const dispatch = useDispatch();

  function formChange(e) {
    const {name, value} = e.target;

    setForm({...form, [name]: value});
  }

  function formSubmit(e) {
    e.preventDefault();

    dispatch(addProductFetch(form));

    setForm({
      name: "",
      manufacturing_date: "",
      perishable: "",
      expiration_date: "",
      price: "",
    });
  }

  React.useEffect(() => {
    if (!perishable && expiration_date) {
      setExpirationDate("");
    }
  }, [expiration_date, perishable]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Produto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={formSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control
                placeholder="Ex: Leite"
                onChange={formChange}
                type="name"
                name="name"
                value={form.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preço*</Form.Label>
              <Form.Control
                type="number"
                name="price"
                onChange={formChange}
                value={form.price}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data de Fabricação*</Form.Label>
              <Form.Control
                type="date"
                name="manufacturing_date"
                onChange={formChange}
                value={form.manufacturing_date}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Produto Perecível*</Form.Label>
              <InputGroup>
                <Form.Text>Sim</Form.Text>
                <Form.Check
                  className="mx-2"
                  onChange={formChange}
                  type="radio"
                  name="perishable"
                  id="yes"
                  value={true}
                  onClick={handleNotHidden}
                />
                <Form.Text>Não</Form.Text>
                <Form.Check
                  className="mx-2"
                  onChange={formChange}
                  type="radio"
                  name="perishable"
                  id="no"
                  value={false}
                  onClick={handleHidden}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group hidden={hidden} id="expiration" className="mb-3">
              <Form.Label>Data de Validade*</Form.Label>
              <Form.Control
                type="date"
                name="expiration_date"
                onChange={formChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
