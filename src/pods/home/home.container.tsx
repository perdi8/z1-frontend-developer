import { useHistory } from "react-router-dom";
import { routes } from "../../core/router";
import { HomeComponent } from "./home.component";

export const HomeContainer: React.FC = () => {
  const history = useHistory();

  const handleClickTakePictureNavigation = () => {
    history.push(routes.camera);
  };

  return <HomeComponent onClick={handleClickTakePictureNavigation} />;
};
