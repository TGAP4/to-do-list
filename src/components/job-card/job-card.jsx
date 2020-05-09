import React from 'react';
import * as S from './job-card.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectVisibleDeleteModal} from '../../redux/modals/modals-selectors';
import {toggleDeleteModal} from '../../redux/modals/modals-actions';

import DeleteModal from '../delete-modal/delete-modal';


const JobCard = ({company, position, date, color, id, toggleDeleteModal, visibleDeleteModal}) => {
  let timeDiff = Math.round((new Date().getTime() - date) / 60000);
  const logo = company[0].toUpperCase();
  const currentJob = {
    company: company,
    position: position
  };
  
  return (
    <>
      {visibleDeleteModal === id ? <DeleteModal currentJob={currentJob} /> : null}
      <S.JobCard color={color}>
        <S.Logo>{logo}</S.Logo>
        <S.TrashButton 
          src='https://cdn1.iconfinder.com/data/icons/shooping/64/trash_can-512.png' 
          alt='Trash Icon'
          onClick={() => toggleDeleteModal(id)}  
        />
        <S.JobInfo>
          <S.CompanyName>{company}</S.CompanyName>
          <span>{position}</span>
        </S.JobInfo>
        <S.TimeAdded>added {timeDiff} minutes ago</S.TimeAdded>
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