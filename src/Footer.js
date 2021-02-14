import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  color: #666;
  font-size: 11px;
  padding: 8px;
  text-align: center;
  z-index: 2;
`;

export const Footer = () => (
  <FooterContainer>
    &copy; Aurora Designs LLP {new Date().getFullYear()}
  </FooterContainer>
);
