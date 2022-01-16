import { useContext } from "react";
import {
  faBirthdayCake,
  faCalendarCheck,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";

import moment from "moment";
import { UserContext } from "../../providers/user";
import FeaturedDayCard from "../../components/FeaturedDayCard";

const SuggestedDays = () => {
  const { user } = useContext(UserContext);
  const birthdate = user.get("birthdate_unix");
  return (
    <div className="row mb-5">
      <div className="col-md-12">
        <h4>Suggested NFTs</h4>
      </div>
      <div className="col-md-12">
        <hr />
      </div>
      <div className="col-md-3">
        <FeaturedDayCard
          title={`Today (${moment().format("M/D/YY")})`}
          description="Celebrate your first day on memint with an NFT!"
          link={`/day/${moment().startOf("day").unix()}`}
          color="#ea643f"
          icon={faCalendarCheck}
        />
      </div>
      <div className="col-md-3">
        <FeaturedDayCard
          title="Recent Birthday"
          description={`Mint an NFT for the day that you turned ${moment().diff(
            moment(birthdate * 1000),
            "years"
          )} years old.`}
          link={`/day/${moment(birthdate * 1000)
            .add(moment().diff(moment(birthdate * 1000), "years"), "years")
            .unix()}`}
          color="#7858d7"
          icon={faBirthdayCake}
        />
      </div>
      <div className="col-md-3">
        <FeaturedDayCard
          title="First Birthday"
          description="Add the day that you were born to the blockchain."
          link={`/day/${moment(birthdate * 1000).unix()}`}
          color="#7858d7"
          icon={faBirthdayCake}
        />
      </div>
      <div className="col-md-3">
        <FeaturedDayCard
          title="New Year's Eve"
          description={`Show the world how you ended ${moment()
            .subtract(1, "year")
            .format("YYYY")}.`}
          link={`/day/${moment("12/31/21").unix()}`}
          color="#ea643f"
          icon={faGlassCheers}
        />
      </div>
    </div>
  );
};

export default SuggestedDays;
