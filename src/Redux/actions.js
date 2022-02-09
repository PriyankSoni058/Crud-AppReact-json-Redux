import * as types from "./actionType";
import Axios from 'axios';

const API= " http://127.0.0.1:3003/users"

const getUsers = (users) => ({
     type: types.GET_USERS,
     payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER,

});

const userAdded = () => ({
    type: types.ADD_USER,

});

const userUpdated = () => ({
    type: types.UPDATE_USER,

});

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,

});

export const loadUsers = () => {
    return function (dispatch) {
        Axios
        .get(`${API}`)
        .then((resp) => {
            console.log("resp",resp);
            dispatch (getUsers(resp.data));
           
        })
        .catch(error => console.log(error));
    };
};

export const deleteUsers = (id) => {
    return function (dispatch) {
        Axios
        .delete(`${API}/${id}`)
        .then((resp) => {
            console.log("resp",resp);
            dispatch (userDeleted());
            dispatch (loadUsers());
        })
        .catch(error => console.log(error));
    };
};

export const addUsers = (user) => {
    return function (dispatch) {
        Axios
        .post(`${API}`, user)
        .then((resp) => {
            console.log("resp",resp);
            dispatch (userAdded());
            dispatch (loadUsers());
        })
        .catch(error => console.log(error));
    };
};
export const getSingleUser = (id) => {
    return function (dispatch) {
        Axios
        .get(`${API}/${id}`)
        .then((resp) => {
            console.log("resp",resp);
            dispatch (getUser(resp.data));
        })
        .catch(error => console.log(error));
    };
};

export const updateUser = (user,id) => {
    return function (dispatch) {
        Axios
        .put(`${API}/${id}`,user)
        .then((resp) => {
            console.log("resp",resp);
            dispatch (userUpdated());
        })
        .catch(error => console.log(error));
    };
};