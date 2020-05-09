import React from 'react';
import * as S from './add-button.styles';

import {connect} from 'react-redux';
import {toggleAddModal} from '../../redux/modals/modals-actions';


const AddButton = ({toggleAddModal}) => {
  return (
    <S.AddButton onClick={toggleAddModal}>+</S.AddButton>
  );
}

const mapDispatch = dispatch => ({
  toggleAddModal: () => dispatch(toggleAddModal())
});

export default connect(null, mapDispatch)(AddButton);