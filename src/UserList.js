const UserList = (props) => {
  const users = props.users;
  return (
    <div className="bg-green-600 max-w-lg m-2 p-2 text-white text-bold">
      <ul>
        {users.map((user) => {
          return (
            <li
              className="h-9"
              key={user.id}>{`${user.userName} ${user.userAge} (Years)`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
