import Types from './jobs-types';
import {addJob, deleteJob} from './jobs-utils';


const INITIAL_STATE = {
  jobsList: []
};

const jobsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_JOB:
      return {
        ...state,
        jobsList: addJob(state.jobsList, action.payload)
      };
    case Types.DELETE_JOB:
      return {
        ...state,
        jobsList: deleteJob(state.jobsList, action.payload)
      };
    default: 
      return state;
  }
};

export default jobsReducer;