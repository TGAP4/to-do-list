export const addJob = (jobsList, jobToAdd) => {
  const newJobsList = [...jobsList];
  if (!jobsList.find(job => 
    job.company.toLowerCase() === jobToAdd.company.toLowerCase() 
    && job.position.toLowerCase() === jobToAdd.position.toLowerCase()
  )) {
    newJobsList.push(jobToAdd);
  }
  return newJobsList;
}

export const deleteJob = (jobsList, jobToDelete) => {
  const newJobsList = jobsList.filter(job => 
    job.company.toLowerCase() !== jobToDelete.company.toLowerCase() 
    || job.position.toLowerCase() !== jobToDelete.position.toLowerCase()
  );
  return newJobsList;
}