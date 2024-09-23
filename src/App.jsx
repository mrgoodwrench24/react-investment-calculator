import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

const USER_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [user, setUserData] = useState(USER_DATA);

  var annualData = [];

  const test_data = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };
  

  function handleUserInfoChange(dataType, event) {
    setUserData((prevUser) => {
      const updatedUser = {
        ...prevUser,
        [dataType]: Number(event.target.value),
      };
      return updatedUser;
    });
  }

  if(user.annualInvestment !== 0 && user.duration !== 0 && user.expectedReturn !==0 && user.initialInvestment !==0){
    annualData = calculateInvestmentResults(user);
  }
  return (
    <>
      <Header />
      <UserInput onChangeData={handleUserInfoChange} />
      <Result 
      annualReport={annualData}
      initialInvestment = {user.initialInvestment}
      annualInvestment = {user.annualInvestment}/>
    </>
  );
}

export default App;
