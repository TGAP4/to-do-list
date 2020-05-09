import styled from 'styled-components';

const getColor = ({color: {shuffle, modifier}}) => {
  switch (shuffle) {
    case 1:
      return `rgba(${255 - modifier}, 50, 50)`;
    case 2:
      return `rgba(${225 - modifier}, ${225 - modifier}, 50)`;
    case 3:
      return `rgba(${255 - modifier}, 50, ${255 - modifier})`;
    case 4:
      return `rgba(50, ${225 - modifier}, 50)`;
    case 5:
      return `rgba(50, ${225 - modifier}, ${150 - modifier})`;
    case 6:
      return `rgba(50, 50, ${255 - modifier})`;
    case 7:
      return `rgba(50, ${150 - modifier}, ${255 - modifier})`;
    default:
      return '#ffffff';
  }
}

const getPriorityColor = ({priority}) => {
  switch (priority) {
    case '1':
      return '#777777';
    case '2':
      return 'green';
    case '3':
      return '#1515D3';
    case '4':
      return '#8A018A';
    case '5':
      return '#B60101';
    default:
      return 'black';
  }
};

export const TrashButton = styled.img`
  width: 25px;
  height: 25px;
  padding: 3px;
  border-radius: 20px;
  visibility: hidden;
  position: absolute;
  top: 13px;
  right: 15px;

  &:hover {
    background-color: #dddddd;
  }
`;

export const JobCard = styled.div`
  display: flex;
  width: 92%;
  height: 120px;
  border-radius: 5px;
  box-shadow: 0 0 5px #bbbbbb;
  margin: 6px 0;
  background-color: ${getColor};
  position: relative;
  color: #ffffff;

  &:hover {
    ${TrashButton} {
      visibility: visible;
    }
  }
`;

export const Priority = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding-bottom: 3px;
  border-radius: 40px;
  background-color: white;
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 30px;
  font-weight: 900;
  color: ${getPriorityColor};
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 15px;
  left: 80px;
`;

export const TaskName = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const TimeAdded = styled.div`
  position: absolute;
  bottom: 5px;
  right: 7px;
  font-size: 0.8em;
`;
