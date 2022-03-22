import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection-page/collection-page.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {

    componentDidMount() {
        this.props.fetchCollectionsStart();
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
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);   