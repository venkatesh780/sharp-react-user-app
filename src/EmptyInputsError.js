const EmptyInputsError = (props) => {
  const handlerClick = () => {
    props.onChangeUser(false);
  };
  return (
    <>
      <div className="bg-pink-200 max-w-lg m-2  rounded-md">
        <div className="bg-violet-400 text-center">Invalid Input</div>
        <div className="h-36 flex flex-col justify-between p-3">
          <p>Invalid User name and age. Please enter valid details</p>
          <button
            className="bg-violet-500 w-12 place-self-end"
            onClick={handlerClick}>
            Okey
          </button>
        </div>
      </div>
    </>
  );
};

export default EmptyInputsError;
