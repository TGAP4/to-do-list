import React, {useState} from 'react';
import * as S from './add-modal.styles';

import {connect} from 'react-redux';
import {toggleAddModal} from '../../redux/modals/modals-actions';
import {addJob} from '../../redux/jobs/jobs-actions';


const AddModal = ({toggleAddModal, addJob}) => {
  const [jobInfo, setJobInfo] = useState({
    company: '',
    position: '',
    date: null
  });

  const randomColor = {
    shuffle: Math.floor(Math.random() * 7 + 1),
    modifier: Math.floor(Math.random() * 3 + 1) * 25
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setJobInfo({...jobInfo, [name]: value});
  };

  const handleSubmit = () => {
    if (jobInfo.company && jobInfo.position) {
      addJob({
        ...jobInfo, 
        date: new Date().getTime(),
        color: randomColor
      });
    }
    setJobInfo({
      company: '',
      position: ''
    });
    toggleAddModal();
  };

  return (
    <>
      <S.Backdrop onClick={toggleAddModal} />
      <S.Popup>
        <S.Title>Add a job</S.Title>
        <S.XButton onClick={toggleAddModal}>x</S.XButton>
        <S.Input 
          name='company'
          placeholder='Company Name'
          value={jobInfo.company} 
          onChange={handleChange}
        />
        <S.Input 
          name='position'
          placeholder='Job Title'
          value={jobInfo.position}
          onChange={handleChange}
        />
        <S.SubmitButton onClick={handleSubmit}>
          Continue
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