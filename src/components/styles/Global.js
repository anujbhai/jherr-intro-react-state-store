import styled from "@emotion/styled";

export const Title = styled.h1`
  text-align: center;
`;

export const TwoColLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

export const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-family: "Bellota Text", cursive;
  width: 100%;
  font-size: x-large;
  padding: 0.5rem;
  border: 1px solid #bbbbbb;
  border-radius: 5px;

  &:focus {
    outline: 0;
  }
`;
