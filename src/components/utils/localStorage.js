export const setPersistAuth = (user) => {
  const userStringify = JSON.stringify(user);
  localStorage.setItem("@user", userStringify);
};

export const getPersistAuth = () => {
  const user = localStorage.getItem("@user");
  return JSON.parse(user);
};

export const deletePersistAuth = () => {
  const logout = localStorage.removeItem("@user");
  return logout;
};
