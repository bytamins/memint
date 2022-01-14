import { ethers } from "ethers";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4 text-center mt-5">
        <h1>Login</h1>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Contract Address
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="0x7853a1444c243A43D6b9D83E1d0f53a90552A5F4"
            />
            <div class="form-text">
              Enter the contract address of your NFT collection.
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
