import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";

import { firestore, convertSnapshotCollectionToObject } from "../../firebase/firebase.utils"

class ShopPage extends React.Component {
    unsuscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection("collections");

        collectionRef.onSnapshot(snapshot => {
            convertSnapshotCollectionToObject(snapshot);
        })
    }

    render() {
        return (
        <div className="shop-page">  
            <Routes>
                <Route path="/" element={<CollectionsOverview />} />
                <Route path=":collectionId" element={<CollectionPage />} />
            </Routes>
        </div> )
    }
}

export default ShopPage;   