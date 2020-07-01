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
  const all_projects = () => Object.entries(localStorage);
  return {
    create, erase, read, update, all_projects,
  };
})();

export default Storage;