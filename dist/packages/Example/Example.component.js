import React, { useState } from "react";

import styled from "styled-components";

import Button from "../../molecules/Button/Button.component";

import Image from "../../molecules/Image/Image.component";

import Card from "../../molecules/Card/Card.component";

import BackDrop from "../../molecules/Backdrop/BackDrop.component";

const StyledTitle = styled.h2 `

  text-align: center;

  font: normal normal 800 30px Open Sans;

  letter-spacing: 0px;

  color: #29285e;

  opacity: 1;

`;

const StyledCenterImage = styled.img `

  width: 100px;

  height: 100px;

`;

const StyledBody = styled.p `

  text-align: center;

  font: normal normal 600 20px/24px Segoe UI;

  letter-spacing: 0px;

  color: #29285e;

  opacity: 1;

`;

const StyledSurpriseText = styled.h3 `

  color: white;

  font: normal normal 800 30px Open Sans;

  padding: 0 20px;

  text-align: center;

  color: #29285e;

`;

const Example = ({ bodyText = "this is the body", title = "this is the title", surpriseSrc, centerSrc, surpriseText, }) => {

    const [isActive, SetIsActive] = useState(false);

    const handleClick = () => {

        SetIsActive(!isActive);

    };

    return (React.createElement(React.Fragment, null,

        React.createElement(Card, null,

            React.createElement(React.Fragment, null,

                React.createElement(StyledTitle, null, title),

                React.createElement(StyledCenterImage, { alt: "card image", src: centerSrc }),

                React.createElement(StyledBody, null,

                    " ",

                    bodyText),

                React.createElement(Button, { onClick: handleClick }, "Press me pls..."))),

        React.createElement(BackDrop, { onClose: handleClick, active: isActive },

            React.createElement(Image, { src: surpriseSrc },

                React.createElement(StyledSurpriseText, null, surpriseText)))));

};

export default Example;

