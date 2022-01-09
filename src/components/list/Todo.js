import React, { useState } from "react";
// import uuid from "react-uuid";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete, AiOutlineClose } from "react-icons/ai";
import Input from "../input";
import { useStore, useDispatch } from "../../context";

const initialValues = {
  company: "",
  job: "",
  deadline: "",
  postUrl: "",
  salary: "",
  location: "",
};
const Todo = ({ setShowModal }) => {
  const [text, setText] = useState(initialValues);
  // const { todos } = useStore();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  const dispatch = useDispatch();

  const addList = (e) => {
    e.preventDefault();
    if (text.company && text.job) {
      dispatch({
        type: "ADD_LIST",
        text,
      });
      setText("");
      setShowModal(false);
    }
  };

  return (
    <Container>
      <Close onClick={() => setShowModal(false)} />
      <form onSubmit={addList}>
        <div>
          <Input
            label={"Company"}
            name={"company"}
            type={"text"}
            value={text.company}
            set={handleInputChange}
          />
        </div>
        <div>
          <Input
            label={"Job Title"}
            name={"job"}
            value={text.job}
            type={"text"}
            set={handleInputChange}
          />
        </div>
        <div>
          <Input
            label={"Deadline"}
            name={"deadline"}
            type={"date"}
            value={text.deadline}
            set={handleInputChange}
          />
        </div>
        <div>
          <Input
            label={"Post Url"}
            name={"postUrl"}
            type={"url"}
            value={text.postUrl}
            set={handleInputChange}
          />
        </div>
        <div>
          <Input
            label={"Salary"}
            name={"salary"}
            type={"number"}
            value={text.salary}
            set={handleInputChange}
          />
        </div>
        <div>
          <Input
            label={"Location"}
            name={"location"}
            type={"text"}
            value={text.location}
            set={handleInputChange}
          />
        </div>

        <button type="submit">Add</button>
      </form>
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
