import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types.js';
import axios from "axios";

// export const addFav = (character) => {
//     return {type: ADD_FAV, payload: character}
// };

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV, //type: 'ADD_FAV' ---> original
//              payload: data,
//           });
//        });
//     };
//  };

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

         if(!data.length) throw Error('No hay favoritos')
      
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message)
      } 
   };
};

// export const removeFav = (id) => {
//     return {type: REMOVE_FAV, payload: id}
// };

// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint)
//        .then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV, // type: 'REMOVE_FAV' ---> original
//              payload: data,
//        });
//        });
//     };
//  };

export const removeFav = (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
   return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint);
      
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      } catch (error) {
         console.log(error.message)
      }
   };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender}
}

export const orderCards = (order) => {
    return { type: ORDER,  payload: order}
}