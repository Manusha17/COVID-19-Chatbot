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
        <p> Total Deaths :</p>
        <p> New Deaths :</p>
        <p> Hospitalized :</p>
      </div>
      <div className="column-right">
        <p>{stats.local_total_cases}</p>
        <p>{stats.local_new_cases}</p>
        <p>{stats.local_recovered}</p>
        <p>{stats.local_deaths}</p>
        <p>{stats.local_new_deaths}</p>
        <p>{stats.local_active_cases}</p>
      </div>
    </div>
  );
};

export default Statistics;
