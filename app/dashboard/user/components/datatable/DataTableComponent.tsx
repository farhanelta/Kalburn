import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const DataTableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8080/api/admin/users'
        }).then(function (response) {
          setData(response.data)
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: 'User Name',
      selector: (row: any) => row.name,
      width: '30%'
    },
    {
      name: 'Date Joined',
      selector: (row: any) => row.created_at,
      width: '13%'
    },
    {
      name: 'Email',
      selector: (row: any) => row.email,
      width: '13%'
    },
    {
      name: 'Birth Date',
      selector: (row: any) => row.birth_date,
      width: '13%'
    },
    {
      name: 'Phone Number',
      selector: (row: any) => row.phone_number,
      width: '13%'
    },
    {
      name: 'Gender',
      selector: (row: any) => row.gender,
      width: '13%'
    },
  ];
  
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default DataTableComponent;
