import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ProductItem from "../../components/ProductItem";

import {getAllProducts} from "../../store/fethActions";

import {Table} from "react-bootstrap";

export default function List() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
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
              key={product._id}
              product={product}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
