import styled from "styled-components";

// Cart, OrderDetails border layout
export const Container = styled.div`
  border-top: 2px solid black;
  border-bottom: ${props => (props.borderBottom ? "1px solid black" : "none")};
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.border};
  font-size: 18px;
  font-weight: bold;
`;

// buttons
export const BlackBtn = styled.button`
  padding: ${props => props.padding};
  background: black;
  color: white;
  border: 1px solid black;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;

export const WhiteBtn = styled.button`
  padding: ${props => props.padding};
  background: none;
  border: 1px solid black;
  color: black;
  font-size: ${props => props.fontSize};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;

// loading spinner
export const LoadingSpinner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
