import { createContext, useEffect, useState } from "react";

const NetworkContext = createContext();
const NetworkConsumer = NetworkContext.Consumer;

export const POLYGON_CONTRACT = "0x1189B301458ab7b6bA4a367a0a460aaE01fFf2a7";
export const RINKEBY_CONTRACT = "0x698c978BfF4C76db094133DfDd08EDFc5C766eB8";

const DEFAULT_NETWORK = "polygon";
const contract_addresses = {
  polygon: "0x1189B301458ab7b6bA4a367a0a460aaE01fFf2a7",
  rinkeby: "0x698c978BfF4C76db094133DfDd08EDFc5C766eB8",
};

const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState(DEFAULT_NETWORK);
  const [contractAddress, setContractAddress] = useState(
    contract_addresses[DEFAULT_NETWORK]
  );
  useEffect(() => {
    setContractAddress(contract_addresses[network]);
  }, [network]);

  return (
    <NetworkContext.Provider value={{ network, setNetwork, contractAddress }}>
      {children}
    </NetworkContext.Provider>
  );
};

export { NetworkContext, NetworkConsumer, NetworkProvider };
