export const getTimeDiff = taskTime => {
  const diffMinutes = Math.round((new Date().getTime() - taskTime) / 60000);
  if (diffMinutes === 0) {
    return `just now`;
  } else if (diffMinutes === 1) {
    return '1 minute ago';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`;
  } else if (diffMinutes < 1410) {
    return `${Math.round(diffMinutes / 60)} hours ago`;
  } else if (diffMinutes < 2160) {
    return `1 day ago`;
  } else {
    return `${Math.round(diffMinutes / 1440)} days ago`;
  }
};