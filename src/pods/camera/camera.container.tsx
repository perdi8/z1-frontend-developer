import React from "react";
import { MyContext } from "../../common-app/context-image-id";
import { useHistory } from "react-router-dom";
import { routes } from "../../core/router";
import { setInterval } from "timers";
import { service, Summary } from "../../common-app/api";
import { CameraComponent } from "./camera.component";

const typeSummary: Summary = {
  outcome: "",
};

export const CameraContainer: React.FC = () => {
  const history = useHistory();
  const { setImgContext } = React.useContext(MyContext);

  const webcamRef = React.useRef<any>(null);
  const [imgSrc, setImgSrc] = React.useState<string>("");
  const [responseAPIData, setResponseAPIData] = React.useState<Summary>(
    typeSummary
  );
  const [conditionStatus, setConditionStatus] = React.useState(false);
  const [useClickCancel, setClickCancel] = React.useState(false);

  React.useEffect(() => {
    setTimeout(async () => {
      setResponseAPIData(await service(imgSrc));
    }, 2000);
  }, [imgSrc]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot({});
        setImgSrc(imageSrc);
        setImgContext(imageSrc);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (responseAPIData.outcome === "Approved") {
        history.push(routes.homeAccepted);
      }
    }, 2000);
  }, [responseAPIData.outcome]);

  React.useEffect(() => {
    responseAPIData.outcome === "Approved"
      ? setConditionStatus(true)
      : setConditionStatus(false);
  }, [responseAPIData.outcome]);

  const handleClickCancel = () => {
    setClickCancel(false);
    history.push(routes.homeRejected);
  };

  return (
    <CameraComponent
      imgSrc={imgSrc}
      handleClickCancel={handleClickCancel}
      webcamRef={webcamRef}
      conditionStatus={conditionStatus}
    />
  );
};
