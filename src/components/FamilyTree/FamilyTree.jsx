import React from "react";
import Grandpa from "./Grandpa";

const FamilyTree = () => {
    const asset = "Diamond";

    return (
        <div id="family-tree" className="text-center text-green-600">
            <h2 className="text-4xl">Fmaily Tree</h2>
            <Grandpa asset={asset}></Grandpa>
        </div>
    );
};

export default FamilyTree;
