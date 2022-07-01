import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Todo from "./Todo";

const Home = () => {
  const [reload, setReload] = useState(false);
const { register, handleSubmit,reset} = useForm();
const onSubmit = data => {
  console.log(data)
  const url = `https://arrogant-eds-36335.herokuapp.com/todoList`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        },
        [reload]
        )
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            reset();
            setReload(!reload);
        } )
};

  return (
    <div>
      <div class="lg:hero min-h-screen bg-base-200">
        <div class="lg:hero-content p-10 flex flex-col lg:flex-row gap-5">
          <form onSubmit={handleSubmit(onSubmit)} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <h1 className="text-center text-2xl font-bold text-primary my-8">
                  ADD TO YOUR LIST
                </h1>
                <input
                  type="text"
                  placeholder="TODO Title Here"
                  class="input input-bordered input-primary"
                  required
                  {...register("newTask", { required: true })}
                />
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">ADD</button>
              </div>
            </div>
          </form>
          <Todo></Todo>
        </div>
      </div>
    </div>
  );
};

export default Home;
