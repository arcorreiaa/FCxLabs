import { fireStore } from "../config/firebase";

export const getUsers = async () => {
  return await fireStore
    .collection("users")
    .get()
    .then((querySnapshot) => {
      let arrayUsers = [];
      querySnapshot.forEach((doc) => {
        arrayUsers.push({ ...doc.data(), id: doc.id });
      });
      return arrayUsers;
    });
};
// edição do usuario
export const updateUser = async (data) => {
  try {
    await fireStore
      .collection("users")
      .doc(data.id)
      .update({ ...data, update_at: new Date() });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteUser = async (id) => {
  try {
    await fireStore.collection("users").doc(id).delete();
    return true;
  } catch {
    return false;
  }
};
