export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_PRIORITY = 'CHANGE_PRIORITY';

export const changeSearch = (filter) => ({
  type: CHANGE_SEARCH,
  payload: filter
});

export const changeStatus = (filter) => ({
  type: CHANGE_STATUS,
  payload: filter
});

export const changePriority = (filter) => ({
  type: CHANGE_PRIORITY,
  payload: filter
});
