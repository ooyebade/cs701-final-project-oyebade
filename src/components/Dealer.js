import React from "react";
import { Card } from "../assets/styles/Card";
import ReverseStyle from "./ReverseStyle";

function Dealer({dealerCurrHand, isReversed}) {

    return (
        <>
            {
                dealerCurrHand.length === 2 ? (
                    <>
                        <Card cardImg={dealerCurrHand[0].image} />
                        <ReverseStyle cardImg={dealerCurrHand[1].image} isReversed={isReversed} />
                    </>
                ) : (
                    dealerCurrHand.map((card, index) => (
                        <Card key={index} cardImg={card.image} />
                    ))
                )
            }
        </>
    )
}

export default Dealer