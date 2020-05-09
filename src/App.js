import React from 'react';
import * as S from './App.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectAddModalHidden} from './redux/modals/modals-selectors';

import Header from './components/header/header';
import Jobs from './components/jobs/jobs';
import AddModal from './components/add-modal/add-modal';


const App = ({addModalHidden}) => {
  return (
    <S.App>
      {!addModalHidden ? <AddModal /> : null}
      <Header />
      <Jobs />
    </S.App>
  );
}

const mapState = createStructuredSelector({
  addModalHidden: selectAddModalHidden
});

export default connect(mapState)(App);
