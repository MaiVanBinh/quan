import { useSelector, useDispatch } from 'react-redux';
// import {
//     getApi,
//     getApiAuth,
//     getOptionsApiAuth,
//     getOptionsApi
// } from './apiConfig';



/*
Using:
import ApiFetching from './{...}/utilities/apiFetching';

Then:
const {
    getUsers
} = ApiFetching();

*/

const ApiFetching = () => {
    const infoProfile = useSelector(state => state.infoProfile);
    const dispatch = useDispatch();

    const getUsers = () => {
        // dispatch({type: 'INIT_PROFILE_DATA', payload: {id: 11}})

        // fetching here

        // uncomment apiConfig to use constants
    }
    return {
        getUsers
    }
}

export default ApiFetching;