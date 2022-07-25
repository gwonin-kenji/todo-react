import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodoItems, setIncompleteTodoItems] = useState([]);

  const [completeTodoItems, setCompleteTodoItems] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodoList = [...incompleteTodoItems, todoText];
    setIncompleteTodoItems(newTodoList);
    setTodoText("");
  };

  const onclickDelete = (index) => {
    const newTodoList = [...incompleteTodoItems];
    newTodoList.splice(index, 1);
    setIncompleteTodoItems(newTodoList);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodoItems = [...incompleteTodoItems];
    newIncompleteTodoItems.splice(index, 1);

    const newCompleteTodoItems = [
      ...completeTodoItems,
      incompleteTodoItems[index]
    ];

    setIncompleteTodoItems(newIncompleteTodoItems);
    setCompleteTodoItems(newCompleteTodoItems);
  };

  const onClickBack = (index) => {
    const newCompleteTodoItems = [...completeTodoItems];
    newCompleteTodoItems.splice(index, 1);

    const newIncompleteTodoItems = [
      ...incompleteTodoItems,
      completeTodoItems[index]
    ];

    setCompleteTodoItems(newCompleteTodoItems);
    setIncompleteTodoItems(newIncompleteTodoItems);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodoItems}
        onClickComplete={onClickComplete}
        onclickDelete={onclickDelete}
      />
      <CompleteTodos todos={completeTodoItems} onClickBack={onClickBack} />
    </>
  );
};
