import React, { use } from "react";
import Special from "./Special";
import { MoneyContext } from "./FamilyTree";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h2>{name}</h2>
            {name === "Talha" && (
                <Special name={"Prio"} asset={asset}></Special>
            )}
            {name === "Hasnat" && (
                <button
                    onClick={() => setMoney(money + 1000)}
                    className="btn btn-info"
                >
                    Add 1000Tk
                </button>
            )}
            {name === "Jahid" && <Friend></Friend>}
            {name === "Jannatun" && (
                <button
                    onClick={() => setMoney(money + 5000)}
                    className="btn btn-info"
                >
                    Add 5000Tk
                </button>
            )}
            {name === "Shila" && <p>Family have: {money}</p>}
            {name === "Sahid" && <p>Family have: {money}</p>}
        </div>
    );
};

export default Cousin;
