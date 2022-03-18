import shopActionTypes from "./shop.types";

import { firestore, convertSnapshotCollectionToObject } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fectchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());
    
        collectionRef.get().then(snapshot => {
            const collectionMap = convertSnapshotCollectionToObject(snapshot)
            dispatch(fetchCollectionsSuccess(collectionMap))
        }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
} 