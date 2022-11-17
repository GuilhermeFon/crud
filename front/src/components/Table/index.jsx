import React from "react";

import {Table} from "react-bootstrap";

export default function Login() {
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Leite</td>
          <td>12/04/2020</td>
          <td>Sim</td>
          <td>20/09/2020</td>
          <td>6</td>
          <td>Editar</td>
        </tr>
      </tbody>
    </Table>
  );
}
