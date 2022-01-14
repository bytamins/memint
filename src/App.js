import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserConsumer } from "./providers/user";

import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Day from "./pages/Day";
import Onboard from "./pages/Onboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <UserConsumer>
      {(context) => (
        <>
          <Header address={context.account} />
          {context.account && !context.user ? (
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          ) : (
            <Routes>
              {!context.address && <Route path="/*" element={<Onboard />} />}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/day/:timestamp" element={<Day />} />
            </Routes>
          )}
        </>
      )}
    </UserConsumer>
  );
}

export default App;
