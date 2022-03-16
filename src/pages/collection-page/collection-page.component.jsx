import "./collection-page.styles.scss";

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const { items, title } = useSelector(selectCollection(collectionId))
    return (
    <div className="collection-page">
        <h2 className="title">{ title }</h2>
        <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
)}

export default CollectionPage;