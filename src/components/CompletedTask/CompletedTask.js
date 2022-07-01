import React from "react";

const CompletedTask = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" checked="checked" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div>
                    <div class="font-bold">Todo App</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="">Job task from programming hero</span>
              </td>
              <td>
                <button class="btn btn-error btn-xs">Delete</button>
              </td>
              <th>
                <button class="btn btn-success btn-xs">Edit</button>
              </th>
            </tr>
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

export default CompletedTask;
