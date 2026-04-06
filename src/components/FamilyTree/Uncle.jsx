import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex justify-between text-xl text-orange-400">
                <Cousin name="Jahid"></Cousin>
                <Cousin name="Shila"></Cousin>
                <Cousin name="Hasnat"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
