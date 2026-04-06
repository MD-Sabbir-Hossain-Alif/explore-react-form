import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = ({ asset }) => {
    return (
        <div>
            <h2 className="text-3xl text-blue-600">Grandpa</h2>
            <section className="text-purple-600 text-2xl flex justify-between">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;
