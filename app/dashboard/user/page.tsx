'use client';

import Image from "next/image";
import { Modal } from "flowbite-react";
import React, { useState, Fragment, useEffect, use } from "react";
import { Menu, Transition } from '@headlessui/react';
import styled, { keyframes } from 'styled-components';
import DataTable from "react-data-table-component";
import Sidebar from "../components/sidebar/Sidebar"
import axios from "axios";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	margin: 16px;
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
	border-top: 2px solid grey;
	border-right: 2px solid grey;
	border-bottom: 2px solid grey;
	border-left: 4px solid black;
	background: transparent;
	width: 80px;
	height: 80px;
	border-radius: 50%;
`;

const CustomLoader = () => (
  <div style={{ padding: '24px' }}>
    <Spinner />
    <div>Loading Data...</div>
  </div>
);

const Home = () => {
  const [selectedDate, setselectedDate] = useState("")
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/api/admin/users');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(data);

  const columns = [
    {
      name: 'User Name',
      cell: (row) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/vercel.svg" className="rounded-full mr-2" alt="User" width={20} height={20} />
          <span>{row.name}</span>
        </div>
      ),
      grow: 2
    },
    {
      name: 'Date Joined',
      selector: (row) => row.created_at,
      width: '13%'
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      width: '13%'
    },
    {
      name: 'Birth Date',
      selector: (row) => row.birth_date,
      width: '13%'
    },
    {
      name: 'Phone Number',
      selector: (row) => row.phone_number,
      width: '13%'
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
      width: '13%'
    },
    {
      name: '',
      cell: (row) => <button onClick={() => handleAction(row)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
        </svg></button>,
      width: '5%'
    }
  ];

  const [pending, setPending] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);


  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <body className="min-w-full min-h-screen">

      <div className="grid">
        <div className="w-100 flex justify-between">

          <Sidebar />

          <div className="flex-col flex-1">
            <div className="min-w-full h-16 px-5 bg-white border-r border-b border-black border-opacity-10 justify-between items-center inline-flex">
              <div className="grow shrink basis-0 h-4 justify-start items-center gap-2 flex">
                <div>
                  <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Search Here" />
                </div>
              </div>
              <div className="justify-start items-center gap-4 flex">
                <div className="w-4 h-4 relative">
                  <div>
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79c-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67c.32-.89 1.27-1.5 2.3-1.28c.95.2 1.65 1.13 1.57 2.1c-.1 1.34-1.62 1.63-2.45 2.88c0 .01-.01.01-.01.02c-.01.02-.02.03-.03.05c-.09.15-.18.32-.25.5c-.01.03-.03.05-.04.08c-.01.02-.01.04-.02.07c-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07c.02-.03.03-.06.05-.09c.08-.14.18-.27.28-.39c.01-.01.02-.03.03-.04c.1-.12.21-.23.33-.34c.96-.91 2.26-1.65 1.99-3.56c-.24-1.74-1.61-3.21-3.35-3.47" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="w-4 h-4 relative">
                  <div>
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 19q-.425 0-.712-.288T4 18q0-.425.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18q0 .425-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="text-gray-200">
                  |
                </div>
                <div className="items-center flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8q0-.825-.587-1.412T12 6q-.825 0-1.412.588T10 8q0 .825.588 1.413T12 10m0 8" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between flex-1 px-4 py-4 items-center">
              <div>
                <p className="font-semibold text-base">Meals Database</p>
                <p className="text-gray-300 text-sm">Database for healthy menu</p>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-stone-500 hover:text-stone-500 border border-black border-opacity-10 hover:bg-gray-100 font-medium rounded-lg text-center text-xs py-2 px-3 flex justify-between items-center">
                  <div className="pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v2.172a2 2 0 0 1-.586 1.414L15 12v7l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227z" />
                    </svg>
                  </div>
                  Filter
                </button>

                <p className="text-gray-300 px-2">|</p>

                <div className="inline-flex rounded-md shadow-sm">
                  <button aria-current="page" className="px-3 py-2 text-xs border-r-0 font-medium text-stone-500 hover:text-stone-500 bg-white border border-black border-opacity-10 rounded-s-lg hover:bg-gray-100 flex justify-between items-center">
                    <div className="pr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
                      </svg>
                    </div>
                    List
                  </button>
                  <button className="px-3 py-2 text-xs border-l-0 font-medium text-stone-500 hover:text-stone-500 bg-white border border-black border-opacity-10 rounded-e-lg hover:bg-gray-100 flex justify-between items-center">
                    <div className="pr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
                      </svg>
                    </div>
                    Grid
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="border border-black border-opacity-10 rounded-lg justify-center pb-0.5">
                <DataTable
                  pagination
                  responsive
                  columns={columns}
                  data={data}
                  progressPending={pending}
                  progressComponent={<CustomLoader />}
                />
              </div>
            </div>

          </div>


        </div>

      </div>


    </body>
  );
}

export default Home;