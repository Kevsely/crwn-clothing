import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection-page/collection-page.component";

const ShopPage = () => {
    return (
    <div className="shop-page">  
        <Routes>
            <Route path="/" element={<CollectionsOverview />} />
            <Route path=":collectionId" element={<CollectionPage />} />
        </Routes>
    </div>
)}

export default ShopPage;   