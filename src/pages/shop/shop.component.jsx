import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";

import { firestore, convertSnapshotCollectionToObject } from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions"

class ShopPage extends React.Component {
    unsuscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection("collections");

        collectionRef.onSnapshot(snapshot => {
            updateCollections(convertSnapshotCollectionToObject(snapshot));
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

const mapStateToProps = dispatch => ({
    updateCollections: collection => dispatch(updateCollections(collection))
})

export default connect(null, mapStateToProps)(ShopPage);   