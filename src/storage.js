const Storage = (()=>{
    const create = (key, data) =>{
        if(Object.keys(localStorage).includes(key)) {
            return false
        }
        localStorage.setItem(key, JSON.stringify(data));
        return true
    }
    const read = (key) =>{
        if (Object.keys(localStorage).includes(key)){
            return JSON.parse(localStorage.getItem(key))
        }
    }
    const erase = (key)=>{
        if (Object.keys(localStorage).includes(key)){
            localStorage.removeItem(key)
        }
        return false
    }
    const All_projects = () => Object.keys(localStorage)
    return{ 
        create, erase, read, All_projects
    }
})();

export default Storage