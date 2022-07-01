import React, { useEffect, useState } from "react";
import Todos from "./Todos";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect( ()=>{
    fetch('https://arrogant-eds-36335.herokuapp.com/todoList')
    .then(res => res.json())
    .then(data => setTasks(data));
}, [])
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
                tasks.map(task => <Todos
                    key={task._id}
                    task={task}
                >
                </Todos>)
            }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Todo;
