import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Card, Icon, StyledLink } from "./styled";
const FeaturedDayCard = ({ title, description, icon, color, link }) => {
  return (
    <Card className="card">
      <div className="card-body">
        <Icon color={color}>
          <FontAwesomeIcon icon={icon} />
        </Icon>
        <h5>{title}</h5>
        <p>{description}</p>
        <StyledLink color={color} className="btn btn-primary" to={link}>
          Get Started
        </StyledLink>
      </div>
    </Card>
  );
};

export default FeaturedDayCard;
