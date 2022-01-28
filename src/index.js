import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header'
import Home from './pages/Home';
import TitanicSurvivor from './pages/TitanicSurvivor';
import StakeholderManager from './pages/StakeholderManager';
import ShoppingListGenerator from "./pages/ShoppingListGenerator"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/titanic-survivor" element={<TitanicSurvivor />} />
          <Route path="/stakeholder-manager" element={<StakeholderManager />} />
          <Route path="/shopping-list-generator" element={<ShoppingListGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);