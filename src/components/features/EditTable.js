import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editTable, getTableById } from '../../redux/tablesRedux';
import TableForm from './TableForm'; 
import { useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

const EditTable= () => {

  const { id } = useParams();
  const editTables = useSelector(status => getTableById(status, id));

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const handleSubmit = table => {
    dispatch(editTable({ ...table, id }));
    navigate('/')
  };

  if(!editTables) return <Navigate to="/" />
  else 
    return (
      <TableForm
      action={handleSubmit} actionText={"Update"}
      id={editTables.id}
      peopleAmount={editTables.peopleAmount}
      maxPeopleAmount={editTables.maxPeopleAmount}
      status={editTables.status}
      bill={editTables.bill}
      />
    );
};

export default EditTable;