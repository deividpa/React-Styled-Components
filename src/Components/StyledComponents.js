import React from "react";
import styled, { css } from "styled-components";

export default function StyledComponents() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time}s ease-in-out`;

  const MyH3 = styled.h3`
    background-color: ${mainColor};
    //color: ${(props) => props.color};
    color: ${({ color }) => color || "#fff"};
    padding: 5px;
    text-align: center;
    transition: ${setTransitionTime(0.5)};

    ${(props) =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  return (
    <>
      <h2>Componentes Estilizados con styled-components library</h2>
      <MyH3 color="#333">
        Soy un H3 estilizado con la lib. styled-components
      </MyH3>
      <MyH3 color="#61dafb">
        Soy un H3 estilizado con la lib. styled-components
      </MyH3>
      <MyH3>Soy un H3 estilizado con la lib. styled-components</MyH3>
      <MyH3 isButton>Soy un H3 estilizado como Botón</MyH3>
    </>
  );
}
