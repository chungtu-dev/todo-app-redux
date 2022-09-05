// import { createSelector } from 'reselect'
import { createSelector } from '@reduxjs/toolkit' //createSelector được tích hợp vào toolkit, ko cần dùng 'reselect' nữa

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;


export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, priorities) => { // nếu như các dữ liệu này ko có sự thay đổi thì func này ko được thực thi lại. (giống như các reac hook như callback,... giúp cải thiện performance)
        // 2:01:00
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities?.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities?.length ? priorities.includes(todo.priority) : true)
            );
        })
    })