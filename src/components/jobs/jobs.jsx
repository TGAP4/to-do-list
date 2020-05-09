import React from 'react';
import * as S from './jobs.styles';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectJobsList} from '../../redux/jobs/jobs-selectors';

import JobCard from '../job-card/job-card';


const Jobs = ({jobsList}) => {
  return (
    <S.Jobs>
      {jobsList.map((job, i) =>
        <JobCard 
          company={job.company} 
          position={job.position}
          date={job.date}
          color={job.color}
          key={i}
          id={i}
        />
      )}
    </S.Jobs>
  );
}

const mapState = createStructuredSelector({
  jobsList: selectJobsList
});

export default connect(mapState)(Jobs);