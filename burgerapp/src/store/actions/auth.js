import * as actionType from './actionTypes';
import axios from 'axios';


// Sync Action Creators
export const authStart = () => {
    return {
        type: actionType.AUTH_STARTED
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionType.AUTH_SUCCESS,
        authData: authData
    }
};

export const authFailed = (error) => {
    return  {
        type: actionType.AUTH_FAIL,
        error: error
    }
};


// Async Action Creators

export const auth = (email, password) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA91Vv2M_QBPPAMRhkGGczq8MafSpPsO8s', authData)
            .then(response => {
                console.log('[AUTH-TOKEN-RESPONSE]',response)
                dispatch(authSuccess(response.data));
            })
            .catch (error => {
                console.log(error);
                dispatch(authFailed(error));
            })
    }
};