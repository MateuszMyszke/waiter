import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import TableForm from './components/features/TableForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTablesStatus } from './redux/tablesStatusRedux';
import { fetchTable } from './redux/tablesRedux';
import EditTable from './components/features/EditTable';


function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchTable()), [dispatch])
  useEffect(() => dispatch(fetchTablesStatus()), [dispatch])


  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tableform" element={<TableForm />} />
          <Route path="/edittable/:id" element={<EditTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
   </main>
  );
};

export default App;
