import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height 140px;
  position: relative;
  color: #70667d;
  letter-spacing: 0.05rem;
`;

export const Logo = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: #240052;
  font-weight: 600;
  margin: 45px 0 10px;
`;