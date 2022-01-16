import MetamaskButton from "../../components/MetamaskButton";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1
            style={{
              fontSize: "82px",
              fontWeight: "bold",
            }}>
            NFTs
          </h1>
          <h5>of your everyday life.</h5>
          <MetamaskButton />
        </div>
        <div className="col-md-6">
          <div className="row d-flex align-items-end">
            <div className="col-md-3">
              <h5>Only</h5>
            </div>
            <div className="col-md-3">
              <h5>
                <s>artists</s>
              </h5>
              <h5>
                <s>developers</s>
              </h5>
              <h5>
                <s>entrepreneurs</s>
              </h5>
              <h5>you</h5>
            </div>
            <div className="col-md-6">
              <h5>can create these NFTs.</h5>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center">
          <h1>Welcome to memint!</h1>
          <h5>Mint Moments</h5>
          <p>
            Why should artists/developers/entrepreneurs have all of the fun? All
            your need is a memory &amp; a photo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
