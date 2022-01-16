import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBabyCarriage,
  faGlassCheers,
  faGolfBall,
  faGraduationCap,
  faPlaneDeparture,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

import MetamaskButton from "../../components/MetamaskButton";

const ICON_SIZE = "2x";

const Home = () => {
  return (
    <>
      {" "}
      <div className="container mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-4">
            <h1
              style={{
                fontSize: "8rem",
                fontWeight: "bold",
                marginBottom: "0px",
                lineHeight: "80%",
              }}>
              NFTs
            </h1>
            <h5
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "20px",
              }}>
              of your everyday life.
            </h5>
            <div className="row">
              <div className="col-md-2">
                <FontAwesomeIcon icon={faUmbrellaBeach} size={ICON_SIZE} />
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon icon={faGlassCheers} size={ICON_SIZE} />
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon icon={faGraduationCap} size={ICON_SIZE} />
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon icon={faBabyCarriage} size={ICON_SIZE} />
              </div>

              <div className="col-md-2">
                <FontAwesomeIcon icon={faPlaneDeparture} size={ICON_SIZE} />
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon icon={faGolfBall} size={ICON_SIZE} />
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-md-2">
            <h1>Welcome to memint!</h1>
            <p>
              Do you want to create your own NFTs? All your need is a memory
              &amp; a photo.
            </p>
            <MetamaskButton />
          </div>
        </div>
      </div>
      <div
        className="row d-flex align-items-end mt-5"
        style={{
          fontSize: "3rem",
          background: "#70baa0",
          padding: "20px 0px",
        }}>
        <div className="col-md-2 offset-md-1">
          <h5
            style={{
              fontSize: "3rem",
            }}>
            Only
          </h5>
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
        <div className="col-md-5">
          <h5>can create these NFTs.</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
