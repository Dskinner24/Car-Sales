export const ADD_ITEM = 'ADD_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = featureObject => {
    return {
        type: ADD_ITEM,
        payload: featureObject
    }
} 

export const removeItem = featureObject => {
    return {
        type: REMOVE_ITEM,
        payload: featureObject
    }
}