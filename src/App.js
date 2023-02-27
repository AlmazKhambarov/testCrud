import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import ListContent from './features/ListContent';
import CreateUser from './features/CreateUser';
import EditUser from './features/EditUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListContent />} />
       <Route path="/adduser" element={<CreateUser />} />
     <Route path="/edituser/:id" element={<EditUser />} />
  </Routes>
  )
}

export default App;
