import React from "react";
import Special from "./Special";

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h2>{name}</h2>
            {name === "Talha" && (
                <Special name={"Prio"} asset={asset}></Special>
            )}
        </div>
    );
};

export default Cousin;
