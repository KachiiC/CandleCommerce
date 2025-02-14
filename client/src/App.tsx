import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageRoutes from './pages';
import 'antd/dist/antd.min.css';
import './App.css';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop>
        <main>
          <PageRoutes />
        </main>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
