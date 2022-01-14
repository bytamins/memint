import { Link } from "react-router-dom";
import MetamaskButton from "../../components/MetamaskButton";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>MeMint</h1>
          <h5>Mint Memories</h5>
          <MetamaskButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
