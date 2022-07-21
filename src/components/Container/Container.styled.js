import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;
  width: 100%;
  /* height: 1000px; */

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 20px 20px;
  }

  @media screen and (min-width: 1280px) {
     /* height: 850px; */
     width: 1280px;
  }
`;
