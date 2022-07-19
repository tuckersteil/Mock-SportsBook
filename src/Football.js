import React, {useEffect, useState} from "react";

function Football({nfl}){
    
    function handleclick(e){
        console.log(e)
    }
    return (
        <div>
            <h1>Football Lines:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Teams</th>
                        <th>Spread</th>
                        <th>Moneyline</th>
                        <th>Over/Under</th>
                    </tr>
                </thead>
                {nfl.map((game, id) => (
                <tbody key={id}>
                    <tr>
                        <th>{game.homeTeam.team}</th>
                        <td><button>{game.homeTeam.spread}</button></td>
                        <td><button>{game.homeTeam.moneyline}</button></td>
                        <td><button>{game.homeTeam.overunder}</button></td>
                    </tr>
                    <tr>
                        <th>{game.awayTeam.team}</th>
                        <td><button>{game.awayTeam.spread}</button></td>
                        <td><button>{game.awayTeam.moneyline}</button></td>
                        <td><button>{game.awayTeam.overunder}</button></td>
                    </tr>
                    <tr id="blank">
                        <th>{}</th>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                
                </tbody>
                ))}
            </table>
        </div>
    );
}

export default Football;