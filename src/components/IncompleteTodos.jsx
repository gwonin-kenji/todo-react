import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onclickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
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
  );
};
