import styled, {css} from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0A011C;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 350px;
  padding: 0 40px;
  text-align: center;
  background-color: white;
  border-radius: 5px;
  position: fixed;
  top: 80px;
  left: 25px;
  z-index: 11;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 60px 0 25px;
`;

export const Text = styled.div`
  font-size: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 15px;
`;

const ButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47%;
  height: 40px;
  border-radius: 5px;
  font-size: 17px;
  margin-top: 20px;
  cursor: pointer;
  color: white;
`;

export const Button1 = styled.div`
  ${ButtonStyles}
  background-color: #641792;
`;

export const Button2 = styled.div`
  ${ButtonStyles}
  background-color: #BBACC4; 
`;

