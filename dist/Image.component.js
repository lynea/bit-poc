import styled from "styled-components";

const Image = styled.figure `

  width: 100%;

  height: 100%;

  background-image: url(${(props) => props.src});

  background-repeat: no-repeat;

  background-position: center;

  background-size: cover;

  margin: 0;

  display: flex;

  align-items: flex-end;

`;

export default Image;

