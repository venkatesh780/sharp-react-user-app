import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import EmptyInputsError from "./src/EmptyInputsError";
import UserForm from "./src/UserForm";
import UserList from "./src/UserList";

const usersArr = [
  { id: "u1", userName: "venkatesh", userAge: 25 },
  { id: "u2", userName: "ram", userAge: 21 },
  { id: "u3", userName: "raj", userAge: 27 },
  { id: "u4", userName: "rakesh", userAge: 24 },
];
const App = () => {
  const [users, setUsers] = useState(usersArr);

  const getUsersData = (user) => {
    setUsers((prevUsers) => {
      const users = [...prevUsers, user];
      return users;
    });
  };
  return (
    <div className="flex">
      <UserForm onSubmitUser={getUsersData} usersLength={users.length} />
      <UserList users={users} />
      <EmptyInputsError />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
