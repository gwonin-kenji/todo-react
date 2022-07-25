import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodoItems, setIncompleteTodoItems] = useState([
    "お皿洗い",
    "トイレ掃除"
  ]);

  const [completeTodoItems, setCompleteTodoItems] = useState(["洗濯"]);

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodoItems.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodoItems.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
