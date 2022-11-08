import React, { useEffect, useState } from "react";
import { Button } from '../components/Button';
import { HeaderTxt, Points, PreviousButton, RankList, RankHeader } from '../assets/styles/RankStyle';

function Rank() {

    // setting ranks as the current state
    // setRanks is a function that updates the state
    // using the getItem to get the player ranks from ...
    // localStorage to get the value from the passed keys and helps return the data
    const [rank, setRanks] = useState(JSON.parse(localStorage.getItem('rank')));
    const [ranksSorted, setRanksStored] = useState([])

    // using the useEffect hook
    useEffect(() => {
        setRanksStored(rank.points.sort(function(a, b) {
            return b - a;
        }))
    }, [rank]) // adding the ranks variable here

    return (
        <>
            <PreviousButton>
                <Button to='/'>Previous</Button>
            </PreviousButton>

            <RankList>
                <RankHeader>
                    <HeaderTxt>Game Ranking: </HeaderTxt>
                
                {
                    ranksSorted.map((points, index) => {
                        return <Points key={index}>{index + 1}. {points} points</Points>
                    })
                }
                </RankHeader>
            </RankList>
        </>
    )
}

export default Rank