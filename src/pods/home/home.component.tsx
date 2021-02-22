import React from "react";
import styled from "styled-components";
import logo from "../../assets/takePictureHome/ID.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardID = styled.div`
  height: 160px;
  width: 260px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
`;

const ImageID = styled.img`
  text-align: "center";
  height: 124px;
  width: 217px;
`;

const MenuText = styled.h1`
  height: 24px;
  width: 101px;
  color: #2f0079;
  font-family: Roboto;
  font-size: 21px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;

const ScanIdText = styled.h2`
  height: 24px;
  width: 282px;
  color: #000000;
  font-family: Roboto;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

const InformationValidateText = styled.h4`
  height: 48px;
  width: 314px;
  color: #000000;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

const Button = styled.button`
  position: relative;
  z-index: 3;
  top: -5rem;
  height: 48px;
  width: 160px;
  border-radius: 24px;
  background-color: #2f0079;
  cursor: pointer;
`;

const ButtonText = styled.span`
  height: 24px;
  width: 120px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
`;

interface Props {
  onClick: () => void;
}

export const HomeComponent: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <>
      <header>
        <MenuText>BankClient</MenuText>
      </header>
      <Container>
        <div>
          <ScanIdText>Scan your ID</ScanIdText>
          <InformationValidateText>
            Take a picture. It may take time to validate your personal
            information.
          </InformationValidateText>
        </div>
        <CardID>
          <ImageID src={logo} alt="card ID content" />
          <Button onClick={onClick}>
            <ButtonText>TAKE PICTURE</ButtonText>
          </Button>
        </CardID>
      </Container>
    </>
  );
};
