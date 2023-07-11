import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import EmptyInputsError from "./src/EmptyInputsError";
import NegativeInputError from "./src/NegativeInputErro";
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
  const [isEmpty, setIsEmpty] = useState(false);
  const [isNegativeAge, setIsNegativeAge] = useState(false);

  const getUsersData = (user) => {
    if (user.userName.length === 0 || user.userAge.length === 0) {
      setIsEmpty(true);
      return;
    }
    if (parseInt(user.userAge) < 0) {
      setIsNegativeAge(true);
      return;
    }
    setUsers((prevUsers) => {
      const users = [...prevUsers, user];
      return users;
    });
  };
  const isEmptyHamdler = (empty) => {
    setIsEmpty(empty);
  };
  const isAgeNegative = (isNeg) => {
    console.log(isNeg);
    setIsNegativeAge(isNeg);
  };
  return (
    <>
      <div className="flex flex-col ml-auto">
        <UserForm onSubmitUser={getUsersData} usersLength={users.length} />
        {isNegativeAge && <NegativeInputError onChangeAge={isAgeNegative} />}
        {isEmpty && <EmptyInputsError onChangeUser={isEmptyHamdler} />}
        {!isEmpty && !isNegativeAge && <UserList users={users} />}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
