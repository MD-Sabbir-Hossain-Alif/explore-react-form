import React from "react";
import Special from "./Special";

const Myself = ({ asset }) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section>
                <Special asset={asset} name={"Prio"}></Special>
            </section>
        </div>
    );
};

export default Myself;
