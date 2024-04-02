import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAcc from './pages/CreateAcc';
import Dashboard from './pages/Dashboard';
import BrowseChurch from './pages/BrowseChurch';
import OnlineDisc from './pages/OnlineDisc';
import ManageAcc from './pages/ManageAcc';
import Error404 from './pages/Error404';
import LoadingScreen from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<CreateAcc />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseChurch />} />
        <Route path="/disc" element={<OnlineDisc />} />
        <Route path="/manage" element={<ManageAcc />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
