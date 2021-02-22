import React from "react";
import styled from "styled-components";

const Body = styled.body`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardId = styled.div`
  height: 175px;
  width: 260px;
`;

const ImageId = styled.img`
  box-sizing: border-box;
  height: 160px;
  width: 260px;
  border: 2px solid #69cc8b;
  border-radius: 12px;
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
  left: 3rem;
  top: -2rem;
  height: 30px;
  width: 105px;
  border-radius: 4px;
  background-color: #69cc8b;
  cursor: pointer;
`;

const ButtonText = styled.span`
  height: 12px;
  width: 67px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.75px;
  line-height: 12px;
  text-align: right;
`;

interface Props {
  onClick: () => void;
  photoID: string;
}

export const HomeAcceptedComponent: React.FC<Props> = (props) => {
  const { onClick, photoID } = props;
  return (
    <Body>
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
        <CardId>
          <ImageId src={photoID} />
        </CardId>
        <Button onClick={onClick}>
          <ButtonText>ACCEPTED</ButtonText>
        </Button>
      </Container>
    </Body>
  );
};
