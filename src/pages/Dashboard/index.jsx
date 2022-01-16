import { useMoralis } from "react-moralis";
import PageTitle from "../../components/PageTitle";
import SuggestedDays from "../../components/SuggestedDays";

const Dashboard = () => {
  const { user } = useMoralis();
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
    </div>
  );
};

export default Dashboard;
