import img_placeholder from "../../assets/img_placeholder.png";
import { TokenPreview, DayMeta, MetaContainer } from "./styled";
import MintArea from "../MintArea";

const AssetCard = ({ day }) => {
  return (
    <TokenPreview placeholder={day.id ? false : true} className="card mb-4">
      <img
        src={day.id ? day.get("image_url") || img_placeholder : img_placeholder}
        className="card-img-top"
        alt="..."
      />
      {day.id && (
        <MetaContainer>
          <DayMeta>
            <h4 className="card-title mb-3">{day.get("title")}</h4>
            <p className="card-description mb-0">{day.get("description")}</p>
          </DayMeta>
        </MetaContainer>
      )}
      {day.id && !day.get("minted") && <MintArea day={day} />}
    </TokenPreview>
  );
};

export default AssetCard;
