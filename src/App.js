import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Day from "./pages/Day";
import { UserConsumer } from "./providers/user";

function App() {
  return (
    <UserConsumer>
      {(context) => (
        <>
          <Header address={context.account} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/day/:timestamp" element={<Day />} />
          </Routes>
        </>
      )}
    </UserConsumer>
  );
}

export default App;
