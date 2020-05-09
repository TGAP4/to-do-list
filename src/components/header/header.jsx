import React from 'react';
import * as S from './header.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectNumJobs} from '../../redux/jobs/jobs-selectors';

import AddButton from '../add-button/add-button';


const Header = ({numJobs}) => {
  return (
    <>
      <S.Header>
        <S.Title>TO-DO LIST</S.Title>
        <span>{numJobs} TASK{numJobs > 1 ? 'S': ''}</span>
      </S.Header>
      <AddButton />
    </>
  );
}

const mapState = createStructuredSelector({
  numJobs: selectNumJobs
});

export default connect(mapState)(Header);