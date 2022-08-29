export const addToList = (obj) =>{

    return {
        type: "ADDTOLIST",
        obj
    }
}

export const removeFromList = (id) =>{

    return{
        type: "REMOVEFROMLIST",
        id
    }
}