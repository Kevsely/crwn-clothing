import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";

import { firestore, convertSnapshotCollectionToObject } from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsuscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection("collections");

        collectionRef.onSnapshot(snapshot => {
            updateCollections(convertSnapshotCollectionToObject(snapshot));
            this.setState({loading: false})
        })
    }

    render() {
        const {loading} = this.state;
        return (
        <div className="shop-page">  
            <Routes>
                <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={loading} />} />
                <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={loading} />} />
            </Routes>
        </div> )
    }
}

const mapStateToProps = dispatch => ({
    updateCollections: collection => dispatch(updateCollections(collection))
})

export default connect(null, mapStateToProps)(ShopPage);   