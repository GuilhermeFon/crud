import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import ProductItem from "../../components/ProductItem";
import Modal from "../../components/ModalProduct";

import {getAllProducts} from "../../store/fethActions";

import {Table, Button} from "react-bootstrap";

export default function List() {
  const [show, setShow] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button className="primary mb-3" onClick={handleShow}>
        Adicionar
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data de Fabricação</th>
            <th>Perecível</th>
            <th>Data de Validade</th>
            <th>Preço (R$)</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <ProductItem
                index={index + 1}
                key={product.id}
                product={product}
              />
            );
          })}
        </tbody>
      </Table>
      <Modal show={show} handleClose={handleClose} />
    </>
  );
}
