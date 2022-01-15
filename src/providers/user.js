import { createContext, useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const UserContext = createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");
  const [user, setUser] = useState(null);

  async function getUser() {
    const db = getFirestore();

    const docRef = doc(db, "accounts", account);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  }

  async function getAccount() {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask installed!");
      return;
    } else {
      console.log("Wallet exists! Ready to go.");
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      setAccount(accounts[0]);
    } else {
      console.log("No authorized account found.");
    }
    setLoading(false);
  }

  useEffect(() => {
    console.log("ON APP MOUNT");
    if (account) {
      console.log("ON ADDRESS CHANGE");
      getUser();
    } else {
      getAccount();
    }
  }, [account]);
  return (
    <UserContext.Provider
      value={{
        loading,
        account,
        setAccount,
        getUser,
        user,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserConsumer, UserProvider };
