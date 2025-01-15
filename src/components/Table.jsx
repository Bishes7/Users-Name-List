import React from "react";

const Table = ({ list }) => {
  return (
    <div className="mt-5 shadow-lg rounded p-2">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{item.input}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
