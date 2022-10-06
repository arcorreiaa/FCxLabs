import AuthContext from "../../context/AuthContext";
import EyeOff from "../../../../public/eyeOff.png";
import EyeOn from "../../../../public/eyeOn.png";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../public/fc.png";
import { useContext, useState } from "react";
import { Ring } from "react-spinners-css";
import ModalForm from "../../ModalForm";
import "../../../styles/main.css";

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [pwd, setPwd] = useState(false);

  async function handleLogin() {
    setLoading(true);
    const logedIn = await signIn(email, password);
    if (logedIn) {
      setLoading(false);
    } else {
      setErrorMessage(true);
      setLoading(false);
    }
  }

  return (
    <div className="h-screen  lg:bg-cover font-sans bg-gradient-to-b from-red-200 to-red-700 flex">
      <div className="mx-auto my-auto flex justify-center items-center">
        <div className="leading-loose">
          <div className="pl-1">
            <img
              src={Logo}
              className="w-20 block ml-auto mr-auto shadow-2xl rounded-lg"
            />
          </div>

          <div className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p className="text-white text-center text-lg font-bold">LOGIN</p>
            <div className="">
              <label className="block text-sm text-white" htmlFor="email">
                E-mail
              </label>
              <input
                className="w-full px-3 py-1 text-gray-700 bg-gray-200 rounded focus:outline-none"
                type="email"
                id="email"
                placeholder="Digite o e-mail"
                aria-label="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />
            </div>

            <div className="mt-2">
              <label className="block  text-sm text-white">Senha</label>
              <div className="w-full flex-row flex px-5 py-1 text-gray-700 bg-gray-200 rounded ">
                <input
                  className="w-full bg-gray-200 border-none focus-within:outline-none"
                  type={pwd ? "text" : "password"}
                  id="password"
                  placeholder="Digite a sua senha"
                  arial-label="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <button onClick={() => setPwd(!pwd)}>
                  <img src={pwd ? EyeOn : EyeOff} />
                </button>
              </div>
            </div>

            <div className="mt-4 items-center flex justify-center flex-col">
              <button
                disabled={loading}
                onClick={handleLogin}
                className="px-4 py-1 text-white hover:text-black font-bold tracking-wider bg-red-600 hover:bg-white rounded lg:mb-4 mb-1 "
              >
                {loading ? <Ring color="#000" size={30} /> : "Entrar"}
              </button>
              {errorMessage && (
                <p className="text-red-800 text-center font-bold drop-shadow-lg shadow-black">
                  Erro ao fazer login
                </p>
              )}
            </div>

            <div className="text-center">
              <a
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="cursor-pointer right-0 align-baseline font-bold text-white text-sm text-500 hover:text-red-600"
              >
                Criar uma conta
              </a>
            </div>
          </div>
        </div>
      </div>
      <ModalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
