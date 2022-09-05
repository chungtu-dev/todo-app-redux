import {combineReducers} from 'redux'

import filtersReducer from "../components/Filters/FilterSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = (state = {}, action) => {
//     // { note
//     //     type:'todoList/addTodo',
//     //     payload: {id:5, name:'Learn Football', completed: false, priority: 'Medium'},
//     // }

//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }    
// }

// dùng combineReducers cho code gọn hơn, khi combineReducers chạy thì vẫn sẽ như func ở trên

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
});

export default rootReducer;

// split reducer : chia các reducer thành các phần nhỏ và ở reducer chung này gọi lại các reducer nhỏ