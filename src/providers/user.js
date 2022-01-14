import { createContext, useState } from "react";

const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <UserContext.Provider
      value={{
        account,
        setAccount,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserConsumer, UserProvider };
