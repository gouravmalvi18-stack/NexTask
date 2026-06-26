import "./App.css";
import { Routes, Route } from "react-router";
import Signup from "./components/UserCompo/Signup";
import Login from "./components/UserCompo/Login";
import AllTodo from "./components/TodoCompo/AllTodo";
import CreateTodo from "./components/TodoCompo/createTodo/CreateTodo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo/alltodos" element={<AllTodo />} />
        <Route path="/todo/createtodo" element={<CreateTodo />} />
      </Routes>
    </>
  );
}

export default App;
