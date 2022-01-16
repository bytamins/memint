import { TailSpin } from "react-loader-spinner";
import { Container } from "./styled";

const LoadingIcon = () => {
  return (
    <div className="row">
      <Container className="col-md-12 text-center">
        <TailSpin
          arialLabel="loading-indicator"
          height="40"
          width="40"
          color="#70baa0"
        />
      </Container>
    </div>
  );
};

export default LoadingIcon;
