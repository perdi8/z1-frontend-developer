import React from "react";
import { useHistory } from "react-router-dom";
import { MyContext } from "../../common-app";
import { routes } from "../../core/router";
import { HomeRejectedComponent } from "./home-rejected.component";

export const HomeRejectedContainer: React.FC = () => {
  const history = useHistory();
  const { imgContext } = React.useContext(MyContext);

  const handleClickReTakekNavigation = () => {
    history.push(routes.camera);
  };

  const handleClickRejectedkNavigation = () => {
    history.push(routes.home);
  };

  return (
    <HomeRejectedComponent
      onClickReTake={handleClickReTakekNavigation}
      onClickRejected={handleClickRejectedkNavigation}
      photoID={imgContext}
    />
  );
};
