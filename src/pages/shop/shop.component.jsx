import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection-page/collection-page.container";

class ShopPage extends React.Component {

    unsuscribeFromSnapshot = null;
    
    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }

    render() {
        return (
        <div className="shop-page">  
            <Routes>
                <Route path="/" element={<CollectionsOverviewContainer />} />
                <Route path=":collectionId" element={<CollectionPageContainer />} />
            </Routes>
        </div> )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);   