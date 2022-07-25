import React, { useState } from "react";
import "./styles.css";

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
                {/* htmlのイベント関数に引数を持たせたいときは、アロー関数でかく */}
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
          {completeTodoItems.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                {/* htmlのイベント関数に引数を持たせたいときは、アロー関数でかく */}
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
