import React, { useEffect, useState } from "react";
import Banner from "../components/teams/Banner";
import Card from "../components/teams/Card";
import axios from "axios";
import baseUrl from "../components/Myconst";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTeams();
    window.scrollTo(0, 0);
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${baseUrl}/fetch/teams`);
      if (response.data) {
        setTeams(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div style={{ paddingTop: "50px" }}>
      <Banner />
      <section className="pt-4">
        <div className="container">
          <div className="row g-4">
            {teams.map((value, index) => (
              <div className="col-md-6" key={index}>
                <Link to={`/team/${value._id}`}>
                  <Card
                    image={value.image}
                    name={value.teamName}
                    slug={value._id}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;
