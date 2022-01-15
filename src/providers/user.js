import { createContext, useEffect, useState } from "react";

import { useMoralis } from "react-moralis";

const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const {
    authenticate,
    isAuthenticated,
    user: MoralisUser,
    currentAsync,
  } = useMoralis();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  async function refreshUser() {
    const response = await currentAsync();
    setUser(response);
  }

  useEffect(() => {
    if (isAuthenticated) {
      setUser(MoralisUser);
    }
    setLoading(false);
  }, [isAuthenticated]);

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
