import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const List = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <h1>Lists</h1>
      <button onClick={() => setShowModal(true)}>Add</button>
      {showModal ? (
        <Modal>
          <Todo setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </Container>
  );
};

export default List;

const Container = styled.div`
  height: 100%;
  width: 100%;
  diplay: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.2);
  inset: 0;
  position: absolute;
  z-index: 1;
  display: grid;
  place-items: center;
`;
const ShowModal = styled(Modal)``;
