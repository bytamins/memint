import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Moralis } from "moralis";

import { useMoralis } from "react-moralis";

import "./App.css";
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
import Features from "./pages/Public/Features";

import Roadmap from "./pages/Public/Roadmap";
import { NetworkConsumer } from "./utils/networkProvider";

function App() {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const { user, logout, isAuthenticated, isInitialized } = useMoralis();

  Moralis.onAccountsChanged(async function (accounts) {
    logout();
    navigate("/");
  });

  useEffect(() => {
    if (isAuthenticated) {
      Moralis.enableWeb3();
    }
    setLoading(false);
  }, [isAuthenticated]);

  useEffect(() => {
    if (isInitialized) {
      Moralis.initPlugins();
    }
  }, [isInitialized]);

  return loading ? (
    <LoadingIcon />
  ) : (
    <Page>
      {user ? (
        <NetworkConsumer>
          {(context) => (
            <Content>
              <Header
                network={context.network}
                setNetwork={context.setNetwork}
              />
              {user.get("birthdate_unix") ? (
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
                  <Route path="/onboard" element={<Onboard />} />
                  <Route path="/roadmap" element={<Roadmap />} />
                  <Route path="/*" element={<Navigate to="onboard" />} />
                </Routes>
              )}
              <ToastContainer />
              <Footer />
            </Content>
          )}
        </NetworkConsumer>
      ) : (
        <Content>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Content>
      )}
    </Page>
  );
}

export default App;
