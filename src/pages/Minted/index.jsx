// import axios from "axios";
// import { useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import LoadingIcon from "../../components/LoadingIcon";
import DayCard from "../../components/DayCard";
import PageTitle from "../../components/PageTitle";
// import { CHAIN, NFTPORT_API_KEY } from "../../utils/constants";

const Minted = () => {
  const { user } = useMoralis();

  const { data: days, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("user", user).equalTo("minted", true).limit(100)
  );

  console.log(days);

  // useEffect(() => {
  //   async function getMinted() {
  //     const { data } = await axios.request({
  //       method: "GET",
  //       url: `https://api.nftport.xyz/v0/accounts/${user.get("ethAddress")}`,
  //       params: { chain: CHAIN },
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: NFTPORT_API_KEY,
  //       },
  //     });
  //     console.log(data.nfts);
  //   }
  //   getMinted();
  // }, [user]);
  return isLoading ? (
    <LoadingIcon />
  ) : (
    <div className="container mt-5">
      <PageTitle
        title="Minted Days"
        description="All of the days you've minted to the blockchain!"
      />
      <div className="row">
        {days.map((day) => (
          <DayCard
            key={day.id}
            dayRecord={day}
            col="col-md-3"
            resetBorder={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Minted;
