import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { UserConsumer } from "./providers/user";

import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Day from "./pages/Day";
import Onboard from "./pages/Onboard";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import Minted from "./pages/Minted";

function App() {
  return (
    <UserConsumer>
      {(context) =>
        context.loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Header address={context.account} />
            {context.account && !context.user ? (
              <Routes>
                <Route path="/onboard" element={<Onboard />} />
                <Route path="/*" element={<Navigate to="onboard" />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/minted" element={<Minted />} />
                <Route path="/day/:timestamp" element={<Day />} />
                <Route path="/*" element={<Navigate to="/dashboard" />} />
              </Routes>
            )}
            <ToastContainer />
          </>
        )
      }
    </UserConsumer>
  );
}

export default App;
