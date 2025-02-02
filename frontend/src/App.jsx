import React from 'react';
import './App.css';
import AuthPage from './Pages/Authentication';
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Chat from './Pages/Chats';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/chats" element={<Chat />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
