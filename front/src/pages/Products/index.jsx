import React from "react";

import List from "../List";
import Modal from "../../components/ModalProduct"

export default function Products() {
  return (
    <div className="m-5">
      <Modal />
      <List />
    </div>
  );
}
