import React from "react";
import styled from "styled-components";

const SellpageLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default SellpageLayout;

const Layout = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;
