export const addJob = (jobsList, jobToAdd) => {
  const newJobsList = [...jobsList];
  if (!jobsList.find(job => 
    job.taskName.toLowerCase() === jobToAdd.taskName.toLowerCase() 
  )) {
    newJobsList.push(jobToAdd);
  }
  newJobsList.sort((a,b) => b.priority - a.priority);
  return newJobsList;
}

export const deleteJob = (jobsList, jobToDelete) => {
  const newJobsList = jobsList.filter(job => 
    job.taskName.toLowerCase() !== jobToDelete.taskName.toLowerCase() 
  );
  return newJobsList;
}