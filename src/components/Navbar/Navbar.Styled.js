import { styled } from "styled-components";

export const StyledNavbar = styled.div` // styled component for navbar
ul {
  display: flex;
  justify-content: space-between;
  li {
    list-style: none;
    a {
    margin: auto 20px;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;
  }
  h1 {
    a {
      font-size: 46px;
      color: #dc143c;
    }
  }
  }
}
`;
