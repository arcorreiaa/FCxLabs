import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { updateUser } from "../firebase/database/users";
import AuthContext from "../context/AuthContext";
import { Ring } from "react-spinners-css";
import InputMask from "react-input-mask";
import Select from "react-select";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalForm({ isOpen, setIsOpen, dataUser, setUpdate, update }) {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cell, setCell] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [nameMother, setNameMother] = useState("");
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const options = [
    { value: "Solteiro", label: "Solteiro(a)" },
    { value: "Casado", label: "Casado(a)" },
    { value: "Viúvo", label: "Viúvo(a)" },
  ];

  useEffect(() => {
    dataUser &&
      (setName(dataUser?.name || ""),
      setEmail(dataUser?.email || ""),
      setCell(dataUser?.cell || ""),
      setCpf(dataUser?.cpf || ""),
      setNascimento(dataUser?.nascimento || ""),
      setNameMother(dataUser?.nameMother || ""),
      setStatus(dataUser?.status || ""));
  }, [dataUser]);

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async () => {
    setLoading(true);
    const result = await signUp({
      name,
      cell,
      cpf,
      nascimento,
      nameMother,
      status,
      email,
      password,
    });
    console.log(result);
    if (result) {
      console.log("entrou");
      setSuccessMessage("Usuário criado com sucesso!");
      setTimeout(() => {
        setSuccessMessage("");
        setIsOpen(false);
      }, 2000);
    } else {
      setErrorMessage(true);
    }
    setLoading(false);
  };
  // funcao chama o update alterar e atualizar
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const result = await updateUser({
        name,
        cell,
        cpf,
        nascimento,
        nameMother,
        status,
        email,
        id: dataUser.id,
      });
      if (result) {
        setSuccessMessage("Usuário alterado com sucesso!");
        setTimeout(() => {
          setSuccessMessage("");
          setUpdate(!update);
          setIsOpen(false);
        }, 2000);
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      setErrorMessage(true);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="justify-center items-center lg:h-40 h-20">
      <Modal
        style={{
          overlay: {
            position: "fixed",
            background: "#000000a6",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            width: "90%",
            backgroundColor: "#c9272fe1",
            maxWidth: "600px",
            padding: "10px",
            borderRadius: "5px",
          },
        }}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="border-none">
          <h1 className="font-bold text-center mb-6 m-4 text-xl text-white">
            Cadastro de clientes
          </h1>

          <div className="">
            <div className="flex justify-center pb-2">
              <h1 className="font-medium p-1 mr-7 text-sm text-white">Nome:</h1>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(item) => setName(item.target.value)}
                value={name}
                type="text"
              />
            </div>

            <div className="flex justify-center pb-2">
              <h1 className="font-medium p-1 mr-11 text-sm text-white">CPF:</h1>

              <InputMask
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                mask="999.999.999-99"
                value={cpf}
                onChange={(item) => setCpf(item.target.value)}
              />
            </div>

            <div className="flex justify-center pb-2">
              <h1 className="font-medium pt-1 mr-5 text-sm text-white">
                Telefone:
              </h1>
              <InputMask
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                mask="(99) 9 9999-9999"
                value={cell}
                onChange={(item) => setCell(item.target.value)}
              />
            </div>

            <div className="flex justify-center pb-2">
              <h1 className="font-medium p-1 mr-32 lg:mr-60 md:mr-80 text-sm text-white">
                Data de nascimento:
              </h1>
              <InputMask
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                mask="99/99/9999"
                value={nascimento}
                onChange={(item) => setNascimento(item.target.value)}
              />
            </div>

            <div className="flex justify-center pb-2">
              <h1 className="font-medium p-1 text-sm text-white">
                Nome da Mãe:
              </h1>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                onChange={(item) => setNameMother(item.target.value)}
                value={nameMother}
                type="text"
              />
            </div>

            <div className="flex justify-center pb-2">
              <h1 className="font-medium p-2 text-sm mr-7 mt-2 text-white">
                Status:
              </h1>

              <Select
                className="appearance-none border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                options={options}
                onChange={(item) => setStatus(item.value)}
              />
            </div>

            <div className="flex justify-center pb-2">
              <h1 className="font-medium p-1 text-sm pr-10 text-white">
                Email:
              </h1>
              <input
                type="email"
                value={email}
                onChange={(item) => setEmail(item.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className={`${dataUser ? "hidden" : "flex"} justify-center `}>
              <h1 className="font-medium p-1 pr-8 text-white">Senha:</h1>
              <input
                type="password"
                onChange={(item) => setPassword(item.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex items-center justify-around mt-4">
            <button className="">
              <AiOutlineCloseCircle
                size={40}
                onClick={closeModal}
                color="#fff"
              />
            </button>
            {/* funcao verifica se teve alteração para editar e desativar o modal */}
            <button
              className=""
              onClick={() => (dataUser ? handleUpdate() : handleSubmit())}
              disabled={loading}
            >
              {loading ? (
                <Ring color="#fcfcfc" size={30} />
              ) : (
                <AiOutlineCheckCircle size={40} color="#fff" />
              )}
            </button>
          </div>
        </div>
        {successMessage && (
          <p className="mt-4 text-green-500 text-center font-bold">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center font-bold">
            Erro ao fazer o cadastro
          </p>
        )}
      </Modal>
    </div>
  );
}

export default ModalForm;
