import PageTitle from "../../components/PageTitle";
import { useMoralisQuery } from "react-moralis";
import { useParams } from "react-router-dom";
const MintedDay = () => {
  const { objectId } = useParams();

  const { data, isLoading } = useMoralisQuery("Day", (query) =>
    query.equalTo("objectId", objectId).limit(1)
  );

  console.log(data);
  const record = data[0];

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container mt-5">
      <PageTitle
        title={record.get("title")}
        description={record.get("description")}
      />
    </div>
  );
};

export default MintedDay;
