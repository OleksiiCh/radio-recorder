import React from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const UserList: React.FC = () => {
  //   const { users } = useTypedSelector((state) => state.user);
  const state = useSelector((state) => state);
  //   console.log(state);
  return <div></div>;
};

export default UserList;
