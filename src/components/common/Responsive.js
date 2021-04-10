import React from 'react';
import styled from 'styled-components';

const Responsive = ({ children, ...rest }) => {
  return <ResponsibeBlock {...rest}>{children}</ResponsibeBlock>;
};
const ResponsibeBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  /*브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default Responsive;
