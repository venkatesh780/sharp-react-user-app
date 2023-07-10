import { useState } from "react";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      userAge,
      id: `U${props.usersLength}`,
    };
    props.onSubmitUser(userData);
    setUserName("");
    setUserAge("");
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };
  return (
    <div className="bg-green-100 p-2 m-2 max-w-lg">
      <form>
        <div className="m-3">
          <label className="block">User Name</label>
          <input
            type="text"
            className="h-8"
            value={userName}
            onChange={userNameHandler}
          />
        </div>
        <div className="m-3">
          <label className="block">Age (Years)</label>
          <input
            type="number"
            className="h-8"
            value={userAge}
            onChange={userAgeHandler}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white font-bold p-1 rounded-r-md"
          onClick={formSubmitHandler}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
