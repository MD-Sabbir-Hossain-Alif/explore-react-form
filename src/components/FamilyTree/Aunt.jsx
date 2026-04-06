import React from "react";
import Cousin from "./Cousin";

const Aunt = ({ asset }) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className="flex justify-between text-xl text-lime-500">
                <Cousin name="Sahid"></Cousin>
                <Cousin name="Talha" asset={asset}></Cousin>
                <Cousin name="Jannatun"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;
