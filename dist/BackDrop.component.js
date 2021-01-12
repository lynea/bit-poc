import React from "react";

import styled, { css } from "styled-components";

const hiderStyles = css `

  pointer-events: ${(props) => (props.isVisible ? "all" : "none")};

  cursor: ${({ isVisible }) => (isVisible ? "pointer" : "auto")};

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

`;

const StyledBackDrop = styled.div `

  opacity: ${(props) => (props.isVisible ? "0.7" : 0)};

  width: 100vw;

  height: 100vh;

  z-index: 100;

  position: fixed;

  background: black;

  ${hiderStyles}

`;

const ContentContainer = styled.div `

  opacity: 1;

  z-index: 201;

  width: 50rem;

  height: 35rem;

  overflow: hidden;

  border-radius: 0.5rem;

  position: fixed;

  pointer-events: all;

  justify-content: center;

  align-items: center;

  ${hiderStyles};

  opacity: ${(props) => (props.isVisible ? "1" : "0")};

`;

const CenterContainer = styled.div `

  display: flex;

  width: 100%;

  height: 100%;

  justify-content: center;

  align-items: center;

  z-index: 200;

  opacity: 1;

  position: fixed;

  ${hiderStyles};

  opacity: ${(props) => (props.isVisible ? "1" : "0")};

`;

const Backdrop = ({ children, active, onClose, }) => {

    return (React.createElement(React.Fragment, null,

        React.createElement(StyledBackDrop, { isVisible: active }),

        React.createElement(CenterContainer, { onClick: onClose, isVisible: active },

            React.createElement(ContentContainer, { isVisible: active }, children))));

};

export default Backdrop;

