import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import { use } from "react";

function App() {
  const [list, setList] = useState([]);

  const addUserList = (user) => {
    setList([...list, user]);
    console.log(user);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5">User List</h2>
      {/* form Component */}
      <Form addUserList={addUserList} />

      {/* Table Component */}
      <Table list={list} />
    </div>
  );
}

export default App;
