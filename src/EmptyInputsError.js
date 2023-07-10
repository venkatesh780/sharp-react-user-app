const EmptyInputsError = (props) => {
  const handlerClick = () => {
    props.onChangeUser(false);
  };
  return (
    <div className="bg-pink-200 max-w-lg m-2  rounded-md">
      <div className="bg-violet-400 text-center">Invalid Input</div>
      <div className="h-24 p-3 flex flex-col justify-between">
        <p>Please Enter Valid userName and Age</p>
        <button className="bg-violet-500 w-36 self-end" onClick={handlerClick}>
          Okey
        </button>
      </div>
    </div>
  );
};

export default EmptyInputsError;
