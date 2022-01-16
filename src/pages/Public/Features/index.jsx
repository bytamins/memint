import PageTitle from "../../../components/PageTitle";

const Features = () => {
  return (
    <div className="container mt-5">
      <PageTitle
        title="Features"
        description="Learn more about our functionality."
      />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <p>
            <strong>Polygon Contact Addres:</strong>{" "}
            0x1189B301458ab7b6bA4a367a0a460aaE01fFf2a7
          </p>
          <p>
            <strong>Rinkeby Contact Addres:</strong>{" "}
            0x698c978BfF4C76db094133DfDd08EDFc5C766eB8
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
