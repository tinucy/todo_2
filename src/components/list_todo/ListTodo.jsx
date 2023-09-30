import React from "react";
import "./ListTodo.scss";

export default function ListTodo() {
  return (
    <div className="listTodo">
      <div className="listTodo__row">
        <div className="listTodo__item"></div>
        <div className="listTodo__delete"></div>
      </div>
    </div>
  );
}
