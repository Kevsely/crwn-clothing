import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { fectchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { updateCollections } from "../../redux/shop/shop.actions"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    unsuscribeFromSnapshot = null;
    
    componentDidMount() {
        this.props.fectchCollectionsStartAsync();
    }

    render() {
        const {isCollectionFetching} = this.props;
        return (
        <div className="shop-page">  
            <Routes>
                <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />} />
                <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={isCollectionFetching} />} />
            </Routes>
        </div> )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fectchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);   