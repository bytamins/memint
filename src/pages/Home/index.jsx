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
import {
  MainHeader,
  CallOutSection,
  CallOutText,
  SecondaryHeader,
  CallOutContainer,
} from "./styled";

const ICON_SIZE = "2x";

const Home = () => {
  return (
    <>
      {" "}
      <div className="container mt-5">
        <div className="row d-flex align-items-center mb-5">
          <div className="col-md-4">
            <MainHeader>NFTs</MainHeader>
            <SecondaryHeader>of your everyday life.</SecondaryHeader>
            <div className="row mt-5">
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
      <CallOutSection>
        <div className="container">
          <CallOutContainer className="col-md-10 offset-md-1">
            <div className="row d-flex align-items-end">
              <div className="col-md-2">
                <CallOutText>Only</CallOutText>
              </div>
              <div className="col-md-2">
                <CallOutText faded={true}>
                  <s>artists</s>
                </CallOutText>
                <CallOutText faded={true}>
                  <s>developers</s>
                </CallOutText>
                <CallOutText faded={true}>
                  <s>entrepreneurs</s>
                </CallOutText>
                <CallOutText>
                  <strong>you</strong>
                </CallOutText>
              </div>
              <div className="col-md-8">
                <CallOutText>can create these NFTs.</CallOutText>
              </div>
            </div>
          </CallOutContainer>
        </div>
      </CallOutSection>
      <section className="mb-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Dynamic Dates</h4>
                  <p className="card-body">
                    We can customize your suggested NFTs based off your
                    birthdate. More customization coming soon!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Multi-chain Minting</h4>
                  <p className="card-body">
                    You can currently mint NFTs on either the Polygon network or
                    the Rinkeby test network.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Earn Money</h4>
                  <p className="card-body">
                    You can create sell orders for the OpenSea marketplace
                    directly within memint!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
