import React, {useState} from 'react';
import * as S from './add-modal.styles';

import {connect} from 'react-redux';
import {toggleAddModal} from '../../redux/modals/modals-actions';
import {addJob} from '../../redux/jobs/jobs-actions';


const AddModal = ({toggleAddModal, addJob}) => {
  const [taskInfo, setTaskInfo] = useState({
    taskName: '',
    additionalInfo: '',
    priority: '',
    date: null
  });

  const randomColor = {
    shuffle: Math.floor(Math.random() * 7 + 1),
    modifier: Math.floor(Math.random() * 3 + 1) * 25
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setTaskInfo({...taskInfo, [name]: value});
  };

  const handleSubmit = () => {
    if (
      taskInfo.taskName 
      && Math.ceil(taskInfo.priority / 5) === 1 
      && Number.isInteger(Number(taskInfo.priority))
    ) {
      addJob({
        ...taskInfo, 
        date: new Date().getTime(),
        color: randomColor
      });
      setTaskInfo({
        taskName: '',
        additionalInfo: ''
      });
      toggleAddModal();
    }
  };

  return (
    <>
      <S.Backdrop onClick={toggleAddModal} />
      <S.Popup>
        <S.Title>Add a task</S.Title>
        <S.XButton onClick={toggleAddModal}>x</S.XButton>
        <S.Input 
          name='taskName'
          placeholder='Task Name'
          value={taskInfo.taskName} 
          onChange={handleChange}
        />
        <S.Input 
          name='additionalInfo'
          placeholder='Additional Info'
          value={taskInfo.additionalInfo}
          onChange={handleChange}
        />
        <S.Input
          name='priority'
          placeholder='Priority Level (1-5)'
          value={taskInfo.priority}
          onChange={handleChange}
        />
        <S.SubmitButton onClick={handleSubmit}>
          Submit
        </S.SubmitButton>
      </S.Popup>
    </>
  );
}

const mapDispatch = dispatch => ({
  toggleAddModal: () => dispatch(toggleAddModal()),
  addJob: job => dispatch(addJob(job))
});

export default connect(null, mapDispatch)(AddModal);