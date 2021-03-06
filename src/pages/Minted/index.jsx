import { useMoralis, useMoralisQuery } from "react-moralis";
import LoadingIcon from "../../components/LoadingIcon";
import DayCard from "../../components/DayCard";
import PageTitle from "../../components/PageTitle";

const Minted = () => {
  const { user } = useMoralis();

  const { data: days, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("user", user).equalTo("minted", true).limit(100)
  );

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <div className="container mt-5">
      <PageTitle
        title="Minted Days"
        description="All of the days you've minted to the blockchain!"
      />
      {days.length === 0 ? (
        <p className="text-center">You haven't minted any days yet!</p>
      ) : (
        <div className="row">
          {days.map((day) => (
            <DayCard
              key={day.id}
              dayRecord={day}
              dayLabel={day.get("dayLabel")}
              col="col-md-3"
              resetBorder={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Minted;
