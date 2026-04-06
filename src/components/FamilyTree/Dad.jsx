import React from "react";
import Myself from "./Myself";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = ({ asset }) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="text-xl text-cyan-700 flex justify-between">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;
