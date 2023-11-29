
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Tablestatus from "./components/TableStatus";
import UserCreate from "./components/UserCreate";
import UserUpdate from "./components/UserUpdate";
import TestSideBar from "./TestSideBar";



function App() {
  return (
    <Routes>
      <Route path="/dashboard" exact={true} element={<Dashboard />} />
      <Route path="/table" element={<Tablestatus />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/form" element={<Form />} />
      <Route path="/create" element={<UserCreate />} />
      <Route path="/update/:id" element={<UserUpdate />} />
      <Route path="/test" element={<TestSideBar />} />
      
    </Routes>
  );
}

export default App;
