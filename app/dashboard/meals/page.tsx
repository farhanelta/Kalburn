'use client';

import Image from "next/image";
import { Modal } from "flowbite-react";
import React, { useState, Fragment, useEffect } from "react";
import { Menu, Transition } from '@headlessui/react';
import styled, { keyframes } from 'styled-components';
import DataTable from "react-data-table-component";
import { ProductService } from "../service/ProductService";
import Sidebar from "../components/sidebar/Sidebar"

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
  const data = [
    {
      id: 1,
      meals: <Image
        src="/ramen.jpg"
        alt="Ramen"
        width={24}
        height={24}
      /> + "Tuscan with",
      date: '17 Aug 2023',
      calories: '660 Kcal',
      carbs: '150 Gram',
      fat: '1 Gram',
      protein: '45 Gram',
      action: <button><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
      </svg></button>
    },
  ]
  const columns = [
    {
      name: 'Meals Name',
      selector: (row: any) => row.meals,
      width: '30%'
    },
    {
      name: 'Date Upload',
      selector: (row: any) => row.date,
      width: '13%'
    },
    {
      name: 'Calories',
      selector: (row: any) => row.calories,
      width: '13%'
    },
    {
      name: 'Carbohydrates',
      selector: (row: any) => row.carbs,
      width: '13%'
    },
    {
      name: 'Fat Percent',
      selector: (row: any) => row.fat,
      width: '13%'
    },
    {
      name: 'Protein',
      selector: (row: any) => row.protein,
      width: '13%'
    },
    {
      name: '',
      selector: (row: any) => row.action,
      right: 'true',
      width: '5%'
    },
  ];

  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([{}]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
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

            <div>
              <div className="min-w-full h-16 p-4 bg-white border-b border-black border-opacity-10 justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3 flex">

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-stone-500 hover:text-stone-500 border border-black border-opacity-10 hover:bg-gray-100 font-medium rounded-lg text-center text-xs py-2 px-3 flex justify-between items-center">
                        <div className="pr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16M7 14h.013m2.997 0h.005m2.995 0h.005m3 0h.005m-3.005 3h.005m-6.01 0h.005m2.995 0h.005" />
                          </svg>
                        </div>
                        January 2023
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062" />
                          </svg>
                        </div>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm"
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm"
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className="
                                  block px-4 py-2 text-sm"
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className="
                                    block w-full px-4 py-2 text-left text-sm
                                    "
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <div className="text-gray-200">
                    |
                  </div>
                  <div className="justify-start items-center gap-2.5 flex">
                    <button className="text-stone-500 hover:text-stone-500 border border-black border-opacity-10 hover:bg-gray-100 font-medium rounded-lg text-center text-xs py-2 px-3 flex justify-between items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="pr-1" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 9l4-4l4 4M7 5v14m14-4l-4 4l-4-4m4 4V5" />
                      </svg>
                      Sort
                    </button>
                  </div>
                </div>
                <button onClick={() => setOpenModal(true)} className="focus:outline-none text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-xs py-2 dark:bg-orange-500 dark:hover:bg-orange-700 px-3 flex justify-between items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="pr-1" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9m3 9H9m3-3v6" />
                  </svg> Add Menu
                </button>

                <Modal show={openModal} size="2xl" onClose={onCloseModal} popup className="bg-gray-400 bg-opacity-20 absolute">
                  <Modal.Header className="bg-white p-4"><p className="text-black">Add Menu</p></Modal.Header>
                  <Modal.Body className="bg-white p-4">
                    <div>
                      <form className="grid" action="" method="post">
                        <p className="text-sm font-medium">Meal Name</p>
                        <div className="pt-2">
                          <input type="text" placeholder="Enter meals" className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <p className="text-sm font-medium pt-3">Description</p>
                        <div className="pt-2">
                          <textarea placeholder="Enter descriptions" rows={6} className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <p className="text-sm font-medium pt-3">Meals ingredients</p>
                        <div className="flex pt-2">
                          <input type="text" placeholder="Enter ingredients" className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <p className="text-sm font-medium pt-3">Calories</p>
                        <div className="flex pt-2">
                          <input type="text" placeholder="Enter kkal" className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm font-medium pt-3">Protein</p>
                            <div className="flex pt-2">
                              <input type="text" placeholder="Enter protein" className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            </div>
                          </div>
                          <div className="px-2">
                            <p className="text-sm font-medium pt-3">Carbohydrates</p>
                            <div className="flex pt-2">
                              <input type="text" placeholder="Enter carbs" className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium pt-3">Fat</p>
                            <div className="flex pt-2">
                              <input type="text" placeholder="Enter fat" className="bg-white border border-gray-400 border-opacity-30 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                            </div>
                          </div>
                        </div>
                        <p className="text-sm font-medium pt-3">Meal Photo</p>
                        <div className="pt-2">

                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                  <Modal.Footer className="bg-white p-4 grid"><button className=" text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-xs py-2 dark:bg-orange-500 dark:hover:bg-orange-700 flex justify-center text-center">Confirm</button></Modal.Footer>
                </Modal>

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
                  data={rows}
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