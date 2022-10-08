import { getUsers } from "../../firebase/database/users";
import { useEffect, useState } from "react";
import UsersTable from "../../UsersTable";
import "../../../styles/main.css";
import Button from "../../Button";

function Home() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    getUsers().then((item) => setUsers(item));
  }, [update]);

  return (
    <div className="md:h-screen bg-gradient-to-b from-red-200 to-red-700 justify-center items-center">
      <div>
        <Button />
      </div>
      <div>
        <UsersTable users={users} setUpdate={setUpdate} update={update} />
      </div>
    </div>
  );
}

export default Home;
