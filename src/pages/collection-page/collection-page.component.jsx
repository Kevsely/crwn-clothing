import "./collection-page.styles.scss";

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId))
    console.log(collection)
    return (
    <div className="collection-page">
        <h2>COLLECTION PAGE</h2>
    </div>
)}

export default CollectionPage;