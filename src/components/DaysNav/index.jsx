import moment from "moment";
import { useEffect, useContext, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

import { UserContext } from "../../providers/user";
import {
  YEAR_FORMAT,
  MONTH_FORMAT,
  DAY_LABEL_FORMAT,
} from "../../utils/constants";
import DayCard from "../DayCard";

const DaysNav = ({ view }) => {
  const { account } = useContext(UserContext);
  // const [days, setDays] = useState([]);

  const { user } = useMoralis();

  const {
    data: days,
    error,
    isLoading,
  } = useMoralisQuery("Day", (query) =>
    query.equalTo("user", user).limit(100).toJSON()
  );

  console.log(days);

  // // query days by user
  // async function getDays() {
  //   const db = getFirestore();
  //   const daysRef = collection(db, "days");

  //   // Create a query against the collection.
  //   const q = query(daysRef, where("account", "==", account));
  //   const querySnapshot = await getDocs(q);
  //   const tempDays = [];
  //   querySnapshot.forEach((doc) => tempDays.push(doc.data()));
  //   setDays(tempDays);
  // }
  // useEffect(() => {
  //   getDays();
  // }, []);
  // console.log(days);
  return (
    <div className="row">
      {[
        ...Array(
          moment(
            `${view.year}/${view.month}`,
            `${YEAR_FORMAT}/${MONTH_FORMAT}`
          ).daysInMonth()
        ).keys(),
      ].map((day) => {
        const dayLabel = moment(
          `${view.month}/${day + 1}/${view.year}`,
          "MMMM/D/YYYY"
        ).format(DAY_LABEL_FORMAT);
        const dayRecord = days.find(
          (d) => d.tokenId === `${account}x${moment(dayLabel).unix()}`
        );
        return <DayCard dayRecord={dayRecord} dayLabel={dayLabel} key={day} />;
      })}
    </div>
  );
};

export default DaysNav;
