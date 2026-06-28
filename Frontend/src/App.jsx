import "./App.css";
import { Routes, Route } from "react-router";
import {
  Signup,
  Login,
  Home,
  CreateTodo,
  GetAlltodo,
  UpdateTodo,
} from "./components/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/todo/alltodo" element={<GetAlltodo />} />
        <Route path="/todo/createtodo" element={<CreateTodo />} />
        <Route path="/todo/Edittodo/:id" element={<UpdateTodo />} />
      </Routes>
    </>
  );
}

export default App;
