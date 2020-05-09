import React from 'react';
import * as S from './delete-modal.styles';

import {connect} from 'react-redux';
import {toggleDeleteModal} from '../../redux/modals/modals-actions';
import {deleteJob} from '../../redux/jobs/jobs-actions';


const DeleteModal = ({currentJob, jobInfo, toggleDeleteModal, deleteJob}) => {
  const handleSubmit = () => {
    deleteJob(currentJob);
    toggleDeleteModal();
  };

  return (
    <>
      <S.Backdrop onClick={toggleDeleteModal} />
      <S.Popup>
        <S.Title>Delete Job</S.Title>
        <S.Text>Are you sure you want to delete this job?</S.Text>
        <S.Buttons>
          <S.Button1 onClick={handleSubmit}>Delete</S.Button1>
          <S.Button2 onClick={toggleDeleteModal}>Cancel</S.Button2>
        </S.Buttons>
      </S.Popup>
    </>
  );
}

const mapDispatch = dispatch => ({
  toggleDeleteModal: () => dispatch(toggleDeleteModal()),
  deleteJob: job => dispatch(deleteJob(job))
});

export default connect(null, mapDispatch)(DeleteModal);