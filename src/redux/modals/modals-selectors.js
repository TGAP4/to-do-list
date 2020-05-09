import {createSelector} from 'reselect';

const selectModals = state => state.modals;

export const selectAddModalHidden = createSelector(
  [selectModals],
  modals => modals.addModalHidden
);

export const selectVisibleDeleteModal = createSelector(
  [selectModals],
  modals => modals.visibleDeleteModal
);