import Types from './jobs-types';

export const addJob = job => ({
  type: Types.ADD_JOB,
  payload: job
});

export const deleteJob = job => ({
  type: Types.DELETE_JOB,
  payload: job
});