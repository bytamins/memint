import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMoralis } from "react-moralis";

import "./App.css";
import { UserConsumer } from "./providers/user";
import { Content, Page } from "./utils/styled";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Day from "./pages/Day";
import Onboard from "./pages/Onboard";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import Minted from "./pages/Minted";
import MintedDay from "./pages/MintedDay";
import LoadingIcon from "./components/LoadingIcon";

function App() {
  const { user } = useMoralis();
  return (
    <Page>
      <Content>
        <UserConsumer>
          {(context) =>
            context.loading ? (
              <LoadingIcon />
            ) : (
              <>
                <Header
                  user={context.user}
                  network={context.network}
                  setNetwork={context.setNetwork}
                />
                {context.user ? (
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/minted" element={<Minted />} />
                    <Route path="/minted/:objectId" element={<MintedDay />} />
                    <Route path="/day/:timestamp" element={<Day />} />
                    <Route path="/*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                ) : (
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/onboard" element={<Onboard />} />
                    <Route path="/*" element={<Navigate to="onboard" />} />
                  </Routes>
                )}
                <ToastContainer />
                <Footer />
              </>
            )
          }
        </UserConsumer>
      </Content>
    </Page>
  );
}

export default App;
