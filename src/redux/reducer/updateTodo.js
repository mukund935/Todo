const initialState = []

const updateTodo = (state =initialState ,action)=>{

    switch(action.type){
        case "ADDTOLIST": {
            state = [...state, action.obj]
            return state;
        }
        case "REMOVEFROMLIST":{
            let newList = []
            newList = state.filter((el)=>{
                console.log(el.id)
                console.log(action.id)
               return el.id != action.id})
            console.log(newList)
            return (newList)
        }
        default: return state;
    }
}

export default updateTodo