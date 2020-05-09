import {createSelector} from 'reselect';

const selectJobs = state => state.jobs;

export const selectJobsList = createSelector(
  [selectJobs],
  jobs => jobs.jobsList
);

export const selectNumJobs = createSelector(
  [selectJobsList],
  jobsList => jobsList.length
);