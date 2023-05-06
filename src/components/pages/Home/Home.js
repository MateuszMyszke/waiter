import React from 'react';
import Table from '../../features/Table';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import Spinner from "react-bootstrap/Spinner";

const Home = () => {

const tables = useSelector(getAllTables)

console.log(tables.length)
if(tables.length == 0) return (<Spinner/>)

  return (
    <div>
      <h1 className="m-2">All tables</h1>
      {tables.map((table, index) => (
        <Table
        key={index} 
        id={table.id}
        status={table.status}
        />
      ))}
    </div>
  );
};

export default Home;