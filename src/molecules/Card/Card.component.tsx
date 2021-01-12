import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 500px;
  width: 400px;
  overflow: hidden;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent linear-gradient(140deg, #ffffff66 0%, #ffffff2b 100%)
    0% 0% no-repeat padding-box;
  border: 1px solid #ffffff40;
  border-radius: 20px;
  opacity: 1;
  backdrop-filter: blur(33px);
  -webkit-backdrop-filter: blur(33px);
`;

interface CardProps {
  children: ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ children }) => (
  <StyledCard>{children}</StyledCard>
);
export default Card;
