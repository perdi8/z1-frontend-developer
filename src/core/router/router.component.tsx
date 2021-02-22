import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  CameraScene,
  HomeAcceptedScene,
  HomeRejectedScene,
  HomeScene,
} from "../../scenes";
import { MyContextProvider } from "../../common-app/context-image-id/image-id.context";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.home]}
          component={HomeScene}
        />
        <MyContextProvider>
          <Route
            exact={true}
            path={switchRoutes.camera}
            component={CameraScene}
          />
          <Route
            exact={true}
            path={switchRoutes.homeAccepted}
            component={HomeAcceptedScene}
          />
          <Route
            exact={true}
            path={switchRoutes.homeRejected}
            component={HomeRejectedScene}
          />
        </MyContextProvider>
      </Switch>
    </Router>
  );
};
