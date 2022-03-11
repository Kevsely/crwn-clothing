import "./collection-page.styles.scss";

import React from "react";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
    const params = useParams();
    console.log(params);
    return (
    <div className="collection-page">
        <h2>COLLECTION PAGE</h2>
    </div>
)}

export default CollectionPage;