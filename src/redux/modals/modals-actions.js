import Types from './modals-types';

export const toggleAddModal = () => ({
  type: Types.TOGGLE_ADD_MODAL
});

export const toggleDeleteModal = id => ({
  type: Types.TOGGLE_DELETE_MODAL,
  payload: id
});