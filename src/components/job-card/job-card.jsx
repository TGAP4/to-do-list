import React from 'react';
import * as S from './job-card.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectVisibleDeleteModal} from '../../redux/modals/modals-selectors';
import {toggleDeleteModal} from '../../redux/modals/modals-actions';

import {getTimeDiff} from '../../utils';

import DeleteModal from '../delete-modal/delete-modal';


const JobCard = ({taskName, additionalInfo, date, color, id, priority, toggleDeleteModal, visibleDeleteModal}) => {
  const timeDiff = getTimeDiff(date);
  const currentJob = {
    taskName: taskName,
    additionalInfo: additionalInfo
  };
  
  return (
    <>
      {visibleDeleteModal === id ? <DeleteModal currentJob={currentJob} /> : null}
      <S.JobCard color={color}>
        <S.Priority priority={priority}>{priority}</S.Priority>
        <S.TrashButton 
          src='https://cdn1.iconfinder.com/data/icons/shooping/64/trash_can-512.png' 
          alt='Trash Icon'
          onClick={() => toggleDeleteModal(id)}  
        />
        <S.JobInfo>
          <S.TaskName>{taskName}</S.TaskName>
          <span>{additionalInfo}</span>
        </S.JobInfo>
        <S.TimeAdded>added {timeDiff}</S.TimeAdded>
      </S.JobCard>
    </>
  );
}

const mapState = createStructuredSelector({
  visibleDeleteModal: selectVisibleDeleteModal
});

const mapDispatch = dispatch => ({
  toggleDeleteModal: id => dispatch(toggleDeleteModal(id))
});

export default connect(mapState, mapDispatch)(JobCard);