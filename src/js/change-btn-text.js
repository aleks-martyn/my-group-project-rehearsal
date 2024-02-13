export const changeBtnText = (isStoredMovie, listName) =>
  isStoredMovie ? `REMOVE FROM ${listName}` : `ADD TO ${listName}`;
