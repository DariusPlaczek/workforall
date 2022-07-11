export default function addedToLocalStorage(event) {

  const cachedLocalStorage = JSON.parse(localStorage.getItem('work4All'))

  if (cachedLocalStorage === null || cachedLocalStorage === undefined) {
    localStorage.setItem('work4All', JSON.stringify([event]));
    return
  }

  for (const cachedLocalStorageElement of cachedLocalStorage) {
    if (cachedLocalStorageElement.id === event.id) {
      return;
    }
  }

  localStorage.setItem('work4All', JSON.stringify([...cachedLocalStorage, event]));

}