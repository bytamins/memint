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
          <h5>for your everyday life.</h5>
          <MetamaskButton />
        </div>
        <div className="col-md-6">
          <p>Collage</p>
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
