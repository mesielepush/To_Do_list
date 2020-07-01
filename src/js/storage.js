const Storage = (() => {
  const create = (key, data) => {
    if (Object.keys(localStorage).includes(key)) {
      return false;
    }
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  };
  const read = (key) => {
    if (Object.keys(localStorage).includes(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return false;
  };
  const erase = (key) => {
    if (Object.keys(localStorage).includes(key)) {
      localStorage.removeItem(key);
    }
    return false;
  };
  const update = (key, data) => {
    if (Object.keys(localStorage).includes(key)) {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    }
    return false;
  };

  return {
    create, erase, read, update,
  };
})();

export default Storage;