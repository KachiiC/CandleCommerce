import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageRoutes from 'pages';
// CSS
import 'antd/dist/antd.min.css'
import './App.css';
// SERVICES

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {PageRoutes}
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;