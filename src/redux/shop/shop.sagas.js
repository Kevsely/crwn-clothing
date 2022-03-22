import { takeLatest, call, put } from "redux-saga/effects";
import { firestore, convertSnapshotCollectionToObject } from "../../firebase/firebase.utils";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.actions";

import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertSnapshotCollectionToObject, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch(err) {
        yield put(fetchCollectionsFailure(err.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}