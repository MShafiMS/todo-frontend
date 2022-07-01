import React, { useState } from "react";

const Todos = ({ task }) => {
  const { _id, newTask, description } = task;
  const [tasks, setTasks] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if(proceed){
    fetch(`https://arrogant-eds-36335.herokuapp.com/todoList/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          console.log('deleted');
          const remaining = tasks.filter(task => task._id !== id);
          setTasks(remaining);
      }
      });
    }
  };

  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div>
              <div class="font-bold">{newTask}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="">{description}</span>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            class="btn btn-error btn-xs"
          >
            Delete
          </button>
        </td>
        <th>
          <button class="btn btn-success btn-xs">Edit</button>
        </th>
      </tr>
    </div>
  );
};

export default Todos;
