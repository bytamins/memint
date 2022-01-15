const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 text-center mb-5">
          <h1>Dashboard</h1>
          <p>You can mint any day in your past into an NFT!</p>
          <hr />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12">
          <h4>Suggested Mints</h4>
        </div>
        <div className="col-md-12">
          <hr />
        </div>
        <div className="col-md-4">
          <h5>Recent Birthday</h5>
        </div>
        <div className="col-md-4">
          <h5>First Birthday</h5>
        </div>
        <div className="col-md-4">
          <h5>New Year's Eve</h5>
        </div>
      </div>

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
