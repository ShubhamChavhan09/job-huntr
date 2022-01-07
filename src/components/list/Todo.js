import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete, AiOutlineClose } from "react-icons/ai";
import Input from "../input";

const Todo = ({ setShowModal }) => {
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [lists, setLists] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const temp = localStorage.getItem("data");
    const loadedTemp = JSON.parse(temp);
    if (loadedTemp) {
      setLists(loadedTemp);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(lists);
    localStorage.setItem("data", temp);
  }, [lists]);

  const addList = (e) => {
    e.preventDefault();
    const newList = {
      id: uuid(),
      text: company,
      completed: false,
    };
    if (company) {
      setLists([...lists, newList]);
      setCompany("");
    }
  };

  const handleDelete = (id) => {
    const data = lists.filter((list) => list.id !== id);
    setLists(data);
  };

  const addEdit = (id) => {
    const data = [...lists].map((list) => {
      if (list.id === id) {
        if (editingText) {
          list.text = editingText;
        }
      }
      return list;
    });
    setLists(data);
    setEditing("");
    setEditingText("");
  };

  return (
    <Container>
      <Close onClick={() => setShowModal(false)} />
      <form onSubmit={addList}>
        <div>
          <Input name="Company" value={company} set={setCompany} />
        </div>

        <button type="submit">Add</button>
      </form>

      {lists.map((list) => (
        <Card key={list.id}>
          <div>
            {editing === list.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              list.text
            )}
          </div>
          <Info>
            {editing === list.id ? (
              <button onClick={() => addEdit(list.id)}>Save</button>
            ) : (
              <AiFillEdit onClick={() => setEditing(list.id)} />
            )}

            <AiFillDelete onClick={() => handleDelete(list.id)} />
          </Info>
        </Card>
      ))}
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  background: salmon;
  height: 500px;
  width: 500px;
  text-align: center;
  padding: 20px;
  position: relative;
  overflow: auto;
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: steelblue;
`;

const Info = styled.div`
  padding: 5px;
  * {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Close = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
