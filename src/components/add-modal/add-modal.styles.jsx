import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0A011C;
  opacity: 0.7;
  position: fixed;
  z-index: 10;
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 350px;
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
  margin: 60px 0 30px;
`;

export const XButton = styled.div`
  font-size: 25px;
  position: absolute;
  top: 0;
  right: 12px;
  color: #aaaaaa;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 80%;
  height: 45px;
  margin: 5px 0;
  padding-left: 15px;
  border-radius: 5px;
  border: solid 1px #bbbbbb;
  font-size: 15px;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 45px;
  background-color: #A734E9;
  border-radius: 5px;
  color: white;
  font-size: 17px;
  margin-top: 20px;
  cursor: pointer;
`;