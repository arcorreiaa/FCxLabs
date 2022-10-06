import React, { createContext, useEffect, useState } from "react";
import { fireAuth, fireStore } from "../firebase/config/firebase";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getPersistAuth,
  setPersistAuth,
  deletePersistAuth,
} from "../utils/localStorage";

export const AuthContext = createContext({ signed: false });
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function loadStorage() {
      const storageUsers = getPersistAuth();
      if (storageUsers) {
        setUser(storageUsers);
      }
    }
    loadStorage();
  }, []);

  const signIn = async (email, password) => {
    try {
      await fireAuth.signInWithEmailAndPassword(email, password);
      const { uid } = fireAuth.currentUser;
      if (uid) {
        await fireStore
          .collection("users")
          .doc(uid)
          .get()
          .then((doc) => {
            const data = {
              uid,
              name: doc.data().name,
              email: doc.data().email,
            };
            setUser(data);
            setPersistAuth(data);
          });

        return true;
      } else {
        return false;
      }
    } catch (error) {}
  };

  const signUp = async (data) => {
    console.log("data: ", data);
    let result = undefined;
    const create = await fireAuth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    console.log("create.user: ", create.user);
    if (create.user) {
      const uid = create.user.uid;
      await fireStore.collection("users").doc(uid).set({
        uid,
        name: data.name,
        email: data.email,
        cell: data.cell,
        cpf: data.cpf,
        nascimento: data.nascimento,
        nameMother: data.nameMother,
        status: data.status,
        createdAt: new Date(),
      });
      setUser(data);
      setPersistAuth(data);
      result = true;
    } else {
      result = false;
    }
    return result;
  };
  // deslogar
  const signOut = async () => {
    await fireAuth.signOut();
    await deletePersistAuth();
    setUser("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        setUser,
        signUp,
        allUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
