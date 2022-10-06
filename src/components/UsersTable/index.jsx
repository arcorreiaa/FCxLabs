import { deleteUser } from "../firebase/database/users";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Spinner } from "react-spinners-css";
import { BiTrash } from "react-icons/bi";
import { TbEdit } from "react-icons/tb";
import ModalForm from "../ModalForm";
import moment from "moment/moment";
import "../../styles/main.css";

function UsersTable({ users, setUpdate, update }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dataUser, setDataUser] = useState({});
  return (
    <div className="pt-12">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <table className="border-collapse">
          <thead>
            <tr className="">
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  hidden lg:table-cell mb-10">
                Nome
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                Email
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                Telefone
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                CPF
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                Data de nascimento
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                Nome da mãe
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                Status
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  border-gray-300 hidden lg:table-cell">
                Data de inclusão
              </th>
              <th className="p-3 font-bold uppercase bg-gray-300 text-gray-800  hidden lg:table-cell mb-10">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <div className="">
                <div>
                  <div className="">
                    <Spinner
                      className="items-center justify-center"
                      color="#ffff"
                      size={50}
                      style={{
                        marginTop: 40,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              users?.map((user, index) => (
                <tr
                  key={index}
                  className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Nome:
                    </span>
                    {user.name}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Email:
                    </span>
                    {user.email}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Telefone:
                    </span>
                    {user.cell}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      CPF:
                    </span>
                    {user.cpf}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Data de Nascimento:
                    </span>
                    {user.nascimento}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Nome da Mãe:
                    </span>
                    {user.nameMother}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Status:
                    </span>
                    {user.status}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Data Inclusão:
                    </span>
                    {moment(new Date(user.createdAt.seconds * 1000)).format(
                      "DD/MM/YYYY"
                    )}
                    {console.log()}
                  </td>

                  <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                    <span className="lg:hidden absolute top-0 left-0 bg-white px-2 py-4 text-xs font-bold uppercase">
                      Editar:
                    </span>
                    <button
                      onClick={() => {
                        setDataUser(user);
                        setIsOpen(true);
                      }}
                      className="text-gray-600 hover:text-gray-800 underline px-4"
                    >
                      <TbEdit />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-600 underline px-4"
                      onClick={() => {
                        deleteUser(user.id);
                        setUpdate(!update);
                        console.log("entrou");
                      }}
                    >
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ModalForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dataUser={dataUser}
        setUpdate={setUpdate}
        update={update}
      />
    </div>
  );
}

export default UsersTable;
