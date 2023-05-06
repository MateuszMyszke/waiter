import { Container } from 'react-bootstrap';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import Home from './components/pages/Home/Home.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound.js'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTable } from './redux/tablesRedux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTable()), [dispatch])

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>   
      <Footer />
    </Container>
    
  );
}

export default App;
