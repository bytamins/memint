import { ethers } from "ethers";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4 text-center mt-5">
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Contract Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="0x7853a1444c243A43D6b9D83E1d0f53a90552A5F4"
            />
            <div className="form-text">
              Enter the contract address of your NFT collection.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
