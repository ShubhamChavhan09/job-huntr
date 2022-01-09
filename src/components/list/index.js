import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { useStore } from "../../context";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const List = () => {
  const [showModal, setShowModal] = useState(false);
  const { todos } = useStore();
  console.log(todos);

  return (
    <Container>
      <h1>Lists</h1>
      <button onClick={() => setShowModal(true)}>Add</button>
      {showModal ? (
        <Modal>
          <Todo setShowModal={setShowModal} />
        </Modal>
      ) : null}
      <div>
        {todos.map((todo, index) => (
          <Card key={index}>
            <div>
              <h2>{todo.text.job}</h2>
              <p>{todo.text.company}</p>
            </div>
            <div>
              <AiFillEdit />
              <AiFillDelete />
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default List;

const Container = styled.div`
  height: 100%;
  width: 280px;
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

const Card = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0;
  padding: 5px;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: steelblue;
`;
