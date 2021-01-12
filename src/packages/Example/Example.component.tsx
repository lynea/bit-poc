import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Button from "../../molecules/Button/Button.component";
import Image from "../../molecules/Image/Image.component";
import Card from "../../molecules/Card/Card.component";
import BackDrop from "../../molecules/Backdrop/BackDrop.component";

const StyledTitle = styled.h2`
  text-align: center;
  font: normal normal 800 30px Open Sans;
  letter-spacing: 0px;
  color: #29285e;
  opacity: 1;
`;

const StyledCenterImage = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledBody = styled.p`
  text-align: center;
  font: normal normal 600 20px/24px Segoe UI;
  letter-spacing: 0px;
  color: #29285e;
  opacity: 1;
`;

const StyledSurpriseText = styled.h3`
  color: white;
  font: normal normal 800 30px Open Sans;
  padding: 0 20px;
  text-align: center;
  color: #29285e;
`;

interface ExampleProps {
  bodyText: string;
  title: string;
  surpriseSrc: string;
  centerSrc: string;
  surpriseText: string;
}

const Example: FunctionComponent<ExampleProps> = ({
  bodyText = "this is the body",
  title = "this is the title",
  surpriseSrc,
  centerSrc,
  surpriseText,
}) => {
  const [isActive, SetIsActive] = useState(false);
  const handleClick = () => {
    SetIsActive(!isActive);
  };

  return (
    <>
      <Card>
        <>
          <StyledTitle>{title}</StyledTitle>
          <StyledCenterImage
            alt="card image"
            src={centerSrc}
          ></StyledCenterImage>
          <StyledBody> {bodyText}</StyledBody>
          <Button onClick={handleClick}>Press me pls...</Button>
        </>
      </Card>
      <BackDrop onClose={handleClick} active={isActive}>
        <Image src={surpriseSrc}>
          <StyledSurpriseText>{surpriseText}</StyledSurpriseText>
        </Image>
      </BackDrop>
    </>
  );
};

export default Example;
