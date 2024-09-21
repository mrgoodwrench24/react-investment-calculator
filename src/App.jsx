import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

const USER_DATA = {
  initial: 0,
  annual: 0,
  expected: 0,
  duration: 0,
};

function App() {
  const [user, setUserData] = useState(USER_DATA);

  function handleUserInfoChange(dataType, event) {
    setUserData((prevUser) => {
      const updatedUser = {
        ...prevUser,
        [dataType]: event.target.value,
      };
      console.log(updatedUser); // Log the updated state
      return updatedUser;
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeData={handleUserInfoChange} />
    </>
  );
}

export default App;
