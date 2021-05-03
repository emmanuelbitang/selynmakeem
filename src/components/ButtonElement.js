import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  // background: ${({ primary }) => (primary ? '#E3C5E0' : '#010606')};
  background: #f7cac9;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #000; //${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    //background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    background: #d65076;
  }
`;
