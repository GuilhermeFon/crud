import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {removeProductFetch, updateProductFetch} from "../../store/fethActions";
// import {updateProductFetch} from "../../store/fethActions/index";
import convertDate from "../../utils/convertDate";

import Modal from "../../components/ModalProduct";
// import {getUniqueProduct} from "../../store/fethActions";

import {PencilSimple, Trash} from "phosphor-react";

// import style from "./styles/ProductItem.module.css";

export default function ProductItem({product, index}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateProductFetch(product.id));
  // }, [dispatch]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function removeItem() {
    dispatch(removeProductFetch(product.id));
  }
  function updateItem() {
    dispatch(updateProductFetch(product.id));
  }

  return (
    <>
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
            <PencilSimple cursor="pointer" onClick={handleShow} alt="edit" />
          </div>
        </td>
        <td>
          <div>
            <Trash cursor="pointer" alt="remove" onClick={removeItem} />
          </div>
        </td>
      </tr>
      <Modal show={show} handleClose={handleClose} />
    </>
  );
}
