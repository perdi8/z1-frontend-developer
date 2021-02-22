import React from "react";
import { useHistory } from "react-router-dom";
import { MyContext } from "../../common-app";
import { routes } from "../../core/router";
import { HomeAcceptedComponent } from "./home-accepted.component";

export const HomeAcceptedContainer: React.FC = () => {
  const history = useHistory();

  const { imgContext } = React.useContext(MyContext);

  const handleClickAcceptedNavigation = () => {
    history.push(routes.home);
  };

  return (
    <HomeAcceptedComponent
      onClick={handleClickAcceptedNavigation}
      photoID={imgContext}
    />
  );
};
