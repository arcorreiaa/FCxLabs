import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";
import ModalForm from "../ModalForm";
import "../../styles/main.css";

// criar nova conta
function NewAccountButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useContext(AuthContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex flex-1 justify-center items-center mb-4 w[20%] lg:h-40 h-20">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="h-20 w-36 bg-red-600 text-white ml-5 lg:hover:bg-white lg:hover:text-red-600 hover:bg-white hover:text-black rounded-lg font-bold mt-12"
      >
        Novo Cadastro
      </button>
      <button
        onClick={signOut}
        className="h-20 w-36 bg-red-600 text-white ml-5 lg:hover:bg-white lg:hover:text-red-600 hover:bg-white hover:text-black rounded-lg font-bold mt-12"
      >
        Sair
      </button>
      <div>
        <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default NewAccountButton;
