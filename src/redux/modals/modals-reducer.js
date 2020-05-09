import Types from './modals-types';

const INITIAL_STATE = {
  addModalHidden: true,
  visibleDeleteModal: null
};

const modalsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.TOGGLE_ADD_MODAL: 
      return {
        ...state,
        addModalHidden: !state.addModalHidden
      };
    case Types.TOGGLE_DELETE_MODAL:
      return {
        ...state,
        visibleDeleteModal: action.payload
      };
    default:
      return state;
  }
};

export default modalsReducer;