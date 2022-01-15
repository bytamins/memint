import PageTitle from "../../components/PageTitle";
import SuggestedDays from "../../components/SuggestedDays";

const Dashboard = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div className="container mt-5">
      <PageTitle
        title="Dashboard"
        description="You can mint any day of your past into an NFT!"
      />

      <SuggestedDays />

      <div className="row mb-5">
        <div className="col-md-12">
          <h4>Recommended Dates</h4>
        </div>
        <div className="col-md-12">
          <hr />
        </div>
        <div className="col-md-12">
          <ul>
            <li>Halloween</li>
            <li>Thanksgiving</li>
            <li>Election Day</li>
          </ul>
          <ul>
            <li>New Jobs</li>
            <li>Graduation</li>
            <li>Moving</li>
            <li>Enagements/Wedding</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
