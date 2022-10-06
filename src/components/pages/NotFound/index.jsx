import { Link } from "react-router-dom";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <section className="h-screen w-full flex justify-center items-center bg-base bg-gradient-to-b from-red-200 to-red-700">
        <div className="w-1/2 h-1/2 flex flex-col justify-center sm:w-9/12 items-center rounded-xl p-6 shadow-xl bg-red-600 text-white text-4xl">
          <h1 className="font-serif text-xxxxs">404</h1>
          <h1 className="my-4 font-serif">Página não encontrada</h1>
          <Link
            className="rounded-xl p-4 shadow-xl bg-white w-40 text-center text-2xl font-bold text-black"
            to="/"
          >
            Voltar
          </Link>
        </div>
      </section>
    </div>
  );
}
