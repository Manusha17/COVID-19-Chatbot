import React, { useState, useEffect } from "react";

import { getData } from "../data";

const Statistics = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      const stats = await getData();

      // const filteredFlights = flights.filter((item) => item.Status === null);

      setStats(stats);
    };
    getStats();
  }, []);

  return (
    <div className="stats">
      <div className="column-left">
        <p> Total Cases :</p>
        <p> New Cases :</p>
        <p> Recovered :</p>
        <p> Deaths :</p>
      </div>
      <div className="column-right">
        <p>{stats.global_total_cases}</p>
        <p>{stats.global_new_cases}</p>
        <p>{stats.global_recovered}</p>
        <p>{stats.global_deaths}</p>
      </div>
    </div>
  );
};

export default Statistics;
