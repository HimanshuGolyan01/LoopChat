import React from 'react';
import './App.css';
import AuthPage from './Pages/Authentication';
import { BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
