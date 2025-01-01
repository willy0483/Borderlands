import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};
  grid-area: header;

  .logo {
    display: flex;
    img {
      width: 150px;
      height: auto;
    }
    &hover {
      cursor: pointer;
    }
  }
`;
