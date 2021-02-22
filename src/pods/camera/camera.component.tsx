import React from "react";
import styled from "styled-components";
import backgroundStyle from "../../assets/cameraWebCam/andyone--WW8jBak7bo-unsplash.png";
import Webcam from "react-webcam";
import okLogo from "../../assets/camera-accepted/Fontawesome Regular.svg";
import lightLogo from "../../assets/rejectedCamera/Fontawesome Regular.svg";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundImage = styled.div`
  background-image: url(${backgroundStyle});
  background-size: cover;
  /* opacity: 0.2; */
`;

const TakePictureText = styled.h2`
  height: 24px;
  width: 282px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

const InformationAutomaticallyText = styled.h4`
  height: 48px;
  width: 282px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;
const BorderAccepted = styled.div`
  height: 283px;
  width: 380px;
`;

const ImageIDAccepted = styled.img`
  box-sizing: border-box;
  height: 283px;
  width: 380px;
  border: 2px solid #69cc8b;
  border-radius: 12px;
`;

const BorderRejected = styled.div`
  box-sizing: border-box;
  height: 283px;
  width: 380px;
  border: 2px solid #c00000;
  border-radius: 18px;
`;

const RoomLighting = styled.div`
  height: 30px;
  width: 202px;
`;
const TextRoomLight = styled.span`
  height: 16px;
  width: 172px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
`;

const OkPicture = styled.div`
  height: 30px;
  width: 128px;
`;

const TextOkPicture = styled.span`
  height: 16px;
  width: 98px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Button = styled.div`
  height: 24px;
  width: 66.5px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
  text-align: center;
  margin-top: 200px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: #ffffff;
  height: 24px;
  width: 63px;
`;

interface Props {
  imgSrc: string;
  handleClickCancel: () => void;
  webcamRef: React.MutableRefObject<any>;
  conditionStatus: boolean;
}

export const CameraComponent: React.FC<Props> = (props) => {
  const { imgSrc, handleClickCancel, webcamRef, conditionStatus } = props;

  return (
    <BackgroundImage>
      <Container>
        <div>
          <TakePictureText>Take picture</TakePictureText>
          <InformationAutomaticallyText>
            Fit your ID card inside the frame. The picture will be taken
            automatically.
          </InformationAutomaticallyText>
        </div>
        {conditionStatus ? (
          <>
            <BorderAccepted>
              <ImageIDAccepted src={imgSrc} />
            </BorderAccepted>
            <OkPicture>
              <img src={okLogo} alt="Logo accepted" />
              <TextOkPicture>Picture Taken!</TextOkPicture>
            </OkPicture>
            <Button onClick={handleClickCancel}>
              <ButtonText>CANCEL</ButtonText>
            </Button>
          </>
        ) : (
          <>
            <BorderRejected>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ blockSize: "280px", borderRadius: "18px" }}
              />
            </BorderRejected>
            <RoomLighting>
              <img src={lightLogo} alt="Logo rejected" />
              <TextRoomLight>Room lighting is too low</TextRoomLight>
            </RoomLighting>
            <Button onClick={handleClickCancel}>
              <ButtonText>CANCEL</ButtonText>
            </Button>
          </>
        )}
      </Container>
    </BackgroundImage>
  );
};
