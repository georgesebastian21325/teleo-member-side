import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import CreateAcc from './pages/CreateAcc'
import Dashboard from './pages/Dashboard'
import BrowseChurch from './pages/BrowseChurch'
import OnlineDisc from './pages/OnlineDisc'
import ManageAcc from './pages/ManageAcc'
import Error404 from './pages/Error404'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/create" element={<CreateAcc />}/>
          <Route path="/dash" element={<Dashboard />}/>
          <Route path="/browse" element={<BrowseChurch />}/>
          <Route path="/disc" element={<OnlineDisc />}/>
          <Route path="/manage" element={<ManageAcc />}/>
          <Route path="404" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
