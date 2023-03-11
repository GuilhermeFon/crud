import React, {useState, useEffect} from "react";

import {addProductFetch, updateProductFetch} from "../../store/fethActions";
import {useDispatch} from "react-redux";

import {Button, Form, Modal, InputGroup} from "react-bootstrap";

export default function ModalProduct({show, onClose, product}) {
  const [perishable, setPerishable] = React.useState(false);
  const [expiration_date, setExpirationDate] = React.useState("");

  const isEdit = !!product?.id;
  const [form, setForm] = useState({
    name: "",
    manufacturing_date: "",
    perishable: "true",
    expiration_date: "",
    price: "",
  });

  useEffect(() => {
    if (product?.id) {
      setForm(product);
    }
  }, [product]);

  const dispatch = useDispatch();

  function formChange(e) {
    const {name, value} = e.target;

    setForm({...form, [name]: value});
  }

  useEffect(() => {
    if (!perishable && expiration_date) {
      setExpirationDate("");
    }
  }, [expiration_date, perishable]);

  function addEditProduct(e) {
    e.preventDefault();

    // if (form.manufacturing_date > form.expiration_date) {
    //   window.alert("deu merda");
    //   return;
    // }

    isEdit && dispatch(updateProductFetch(product.id, form));
    !isEdit && form?.name !== "" && dispatch(addProductFetch(form));

    handleClose();
  }

  function handleClose() {
    setForm({
      name: "",
      manufacturing_date: "",
      perishable: "true",
      expiration_date: "",
      price: "",
    });

    onClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Editar Produto" : "Adicionar Produto"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={addEditProduct}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control
                placeholder="Ex: Leite"
                onChange={formChange}
                type="name"
                name="name"
                value={form.name}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preço*</Form.Label>
              <Form.Control
                type="number"
                name="price"
                onChange={formChange}
                value={form.price}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data de Fabricação*</Form.Label>
              <Form.Control
                type="date"
                name="manufacturing_date"
                onChange={formChange}
                value={form.manufacturing_date}
                required
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
                  checked={form.perishable === "true"}
                />
                <Form.Text>Não</Form.Text>
                <Form.Check
                  className="mx-2"
                  onChange={formChange}
                  type="radio"
                  name="perishable"
                  id="no"
                  value={false}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group
              hidden={form.perishable === "false"}
              id="expiration"
              className="mb-3"
            >
              <Form.Label>Data de Validade*</Form.Label>
              <Form.Control
                type="date"
                name="expiration_date"
                onChange={formChange}
                value={form.expiration_date}
                required={form.perishable === "true"}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" variant="primary">
              {isEdit ? "Editar" : "Adicionar"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
