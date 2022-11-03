import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function StyledComponents() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time}s ease-in-out`;

  const fadeIn = keyframes`
    0% {
      opacity:0;
    }

    100% {
      opacity:1;
    }
  `;

  const MyH3 = styled.h3`
    background-color: ${mainColor};
    //color: ${(props) => props.color};
    color: ${({ color }) => color || "#fff"};
    padding: 5px;
    text-align: center;
    transition: ${setTransitionTime(0.5)};
    animation: ${fadeIn} 2s ease-out;

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

  // Utilización del módulo «Theme Provider» de styled-components

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
    margin: 0 auto;
    max-width: 80%;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      background-color: #0FA;
      color: #000;
      text-transform: uppercase;
    } 
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Componentes Estilizados con styled-components library</h2>
      <MyH3 color="#333">
        Soy un H3 estilizado con la lib. styled-components
      </MyH3>
      <MyH3 color="#61dafb">
        Soy un H3 estilizado con la lib. styled-components
      </MyH3>
      <MyH3>Soy un H3 estilizado con la lib. styled-components</MyH3>
      <MyH3 isButton>Soy un H3 estilizado como Botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded theme={light}>
          Soy una caja con theme, que hereda de Box y adiciona borde redondeado
        </BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded theme={dark}>
          Soy una caja con theme, que hereda de Box y adiciona borde redondeado
        </BoxRounded>
      </ThemeProvider>
    </>
  );
}
