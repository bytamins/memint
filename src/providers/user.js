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
  const [network, setNetwork] = useState("Polygon");

  async function refreshUser() {
    const response = await refetchUserData();
    setUser(response);
  }

  Moralis.onAccountsChanged(async function (accounts) {
    console.log("ON ACCOUNTS CHANGED");
    console.log(accounts);
    logout();
    await refreshUser();
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
        network,
        setNetwork,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserConsumer, UserProvider };
