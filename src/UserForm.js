import { useState, useRef } from "react";
import Wrapper from "./Helpers/Wrapper";

const UserForm = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const userCollegeRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      userName: userNameRef.current.value,
      userAge: userAgeRef.current.value,
      userCollege: userCollegeRef.current.value,
      id: `U${props.usersLength}`,
    };
    props.onSubmitUser(userData);

    userNameRef.current.value = "";
    userAgeRef.current.value = "";
    userCollegeRef.current.value = "";
  };
  return (
    <Wrapper>
      <div className="bg-green-100 p-2 m-2 max-w-lg">
        <form>
          <div className="m-3">
            <label className="block">User Name</label>
            <input type="text" className="h-8" ref={userNameRef} />
          </div>
          <div className="m-3">
            <label className="block">Age (Years)</label>
            <input type="number" className="h-8" ref={userAgeRef} />
          </div>
          <div className="m-3">
            <label className="block">College</label>
            <input type="text" className="h-8" ref={userCollegeRef} />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-bold p-1 rounded-r-md"
            onClick={formSubmitHandler}>
            Add User
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default UserForm;
