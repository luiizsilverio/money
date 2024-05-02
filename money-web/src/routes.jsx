import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import CadDespesa from './pages/cad-despesa';
import { Sidebar } from './components/sidebar';
import { NavBar } from './components/navbar';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Sidebar />
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/despesa/:id" element={ <CadDespesa /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes