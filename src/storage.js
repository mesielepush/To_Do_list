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
})