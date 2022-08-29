import React from "react";
import { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addToList, removeFromList } from "./redux/actions/index";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const Todo = () => {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [currentData, setCurrentData] = useState("");

  const clickHandler = () => {
    if (currentData.length > 0) {
      const obj = {
        id: Math.floor(Math.random() * 1000),
        name: currentData,
      };

      dispatch(addToList(obj));

      setCurrentData("");
    } else {
      alert("Please enter a todo");
    }
  };

  const changeHandler = (e) => {
    setCurrentData(e.target.value);
  };

  const deletehandler = (e) => {
		dispatch(removeFromList(e.currentTarget.id))
	};

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Todo</h1>
        <div className="inputField">
          <input
            type="text"
            placeholder="Add your new todo"
            onChange={changeHandler}
            value={currentData}
            required
          />
          <button onClick={clickHandler}>
            <FaPlus className="plus" />
          </button>
        </div>
        <div className="">
          <ul className="todoList">
            {data.map((e, i) => (
              <li key={e.id}>
                {e.name}{" "}
                <button id={e.id} onClick={deletehandler}>
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
