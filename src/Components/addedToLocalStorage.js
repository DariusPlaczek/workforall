export default function addedToLocalStorage(event) {

  const cachedLocalStorage = JSON.parse(localStorage.getItem('gitUserSearch'))

  if (cachedLocalStorage === null || cachedLocalStorage === undefined) {
    localStorage.setItem('gitUserSearch', JSON.stringify([event]));
    return
  }

  for (const cachedLocalStorageElement of cachedLocalStorage) {
    if (cachedLocalStorageElement.id === event.id) {
      return;
    }
  }

  localStorage.setItem('gitUserSearch', JSON.stringify([...cachedLocalStorage, event]));

}