import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios'
import { withFirebase } from './Firebase'
import { StatsTable } from "./Tables/StatsTable";
import './Home.css';
import './Stats.css'


function Stats() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //       const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
    //       setData(result.data);
    //     })();
    //   }, []);

    // const columns = useMemo(
    //     () => [
    //       {
    //         Header: "Player",
    //         // First group columns
    //         columns: [
    //           {
    //             Header: "Player",
    //             accessor: "show.name"
    //           },
    //           {
    //             Header: "Team",
    //             accessor: "show.type"
    //           }
    //         ]
    //       },
    //       {
    //         // Second group - Details
    //         Header: "Details",
    //         // Second group columns
    //         columns: [
    //           {
    //             Header: "Language",
    //             accessor: "show.language"
    //           },
    //           {
    //             Header: "Genre(s)",
    //             accessor: "show.genres"
    //           },
    //           {
    //             Header: "Runtime",
    //             accessor: "show.runtime"
    //           },
    //           {
    //             Header: "Status",
    //             accessor: "show.status"
    //           }
    //         ]
    //       }
    //     ],
    //     []
    //   );

    return (
        <div className="container">
            <h2>
                Stats
            </h2>
            {/* <StatsTable columns={columns} data={data} /> */}
            <div className="teamButtons">
                <button className="teamButton">Celtic Dragons</button>
                <button className="teamButton">Saracens Mavericks</button>
                <button className="teamButton">London Pulse</button>
                <button className="teamButton">Team Bath</button>
                <button className="teamButton">Loughborough Lightning</button>
                <button className="teamButton">Strathclyde Sirens</button>
                <button className="teamButton">Manchester Thunder</button>
                <button className="teamButton">Severn Stars</button>
                <button className="teamButton">Wasps Netball</button>
                <button className="teamButton">Surrey Storm</button>
            </div>
            <table>
                <tr>
                    <th>Player</th>
                    <th>Round One</th>
                    <th>Round Two</th>
                    <th>Round Three</th>
                    <th>Round Four</th>
                    <th>Round Five</th>
                    <th>Round Six</th>
                    <th>Total points</th>

                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </table>
        </div>
    );
}

export { Stats };