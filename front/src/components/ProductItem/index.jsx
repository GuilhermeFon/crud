import React from "react";
import {useDispatch} from "react-redux";

import {showUpdateModal, deleteProductRequested} from "../../actions/product";
import convertDate from "../../utils/convertDate";

import {PencilSimple} from "phosphor-react";

// import style from "./styles/ProductItem.module.css";

export default function ProductItem({product, index}) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{convertDate(product.manufacturing_date)}</td>
      {product.perishable ? <td>Sim</td> : <td>Não</td>}
      <td>
        {product.expiration_date ? convertDate(product.expiration_date) : "-"}
      </td>
      <td>{product.price}</td>
      <td>
        <div>
          <PencilSimple
            cursor="pointer"
            onClick={() => dispatch(showUpdateModal(product._id))}
            alt="edit"
          />
        </div>
      </td>
      <td>
        <div>
          remover
          {/* <img
            onClick={() => dispatch(deleteProductRequested(product._id))}
            src={remove}
            alt="remove"
          /> */}
        </div>
      </td>
    </tr>
  );
}
