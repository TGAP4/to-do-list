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
        <S.Logo src='https://www.iconbunny.com/icons/media/catalog/product/1/8/1856.1-magic-wand-tool-icon-iconbunny.jpg' alt='Logo' />
        <S.Title>WISHLIST</S.Title>
        <span>{numJobs} JOBS</span>
      </S.Header>
      <AddButton />
    </>
  );
}

const mapState = createStructuredSelector({
  numJobs: selectNumJobs
});

export default connect(mapState)(Header);