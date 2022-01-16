import { createContext, useEffect, useState } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";

const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const {
    authenticate,
    isAuthenticated,
    user: MoralisUser,
    refetchUserData,
    logout,
  } = useMoralis();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  async function refreshUser() {
    const response = await refetchUserData();
    setUser(response);
  }

  Moralis.onAccountsChanged(async function (accounts) {
    console.log("ON ACCOUNTS CHANGED");
    console.log(accounts);
    logout();
  });

  useEffect(() => {
    if (isAuthenticated) {
      setUser(MoralisUser);
    }
    setLoading(false);
  }, [isAuthenticated, MoralisUser]);

  console.log(user);

  return (
    <UserContext.Provider
      value={{
        authenticate,
        isAuthenticated,
        loading,
        user,
        refreshUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserConsumer, UserProvider };
