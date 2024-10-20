import React from "react";

import { useParams } from "react-router-dom";
import Card from "../teams/Card";

function TeamMembers() {
  const params = useParams();

  return (
    <section className="pt-5 pb-0">
      <div className="container">
        <div className="row g-0 g-lg-5 m-3">
          {/* Main content START */}
          <div className="col-lg-12">
            {/* Title */}
            <h5 className="mb-0">Welcome to </h5>
            <h1 className="mb-0">{params.teamName}</h1>

            {/* Content */}
            <p className="mt-4">
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do.
            </p>

            {/* Personal info */}
            <ul className="list-group list-group-borderless">
              <li className="list-group-item px-0">
                <span className="h6 fw-light">
                  <i className="fas fa-fw fa-map-marker-alt text-primary me-1 me-sm-3" />
                  Address:
                </span>
                <span>2002 Horton Ford Rd, Eidson, TN, 37731</span>
              </li>
              <li className="list-group-item px-0">
                <span className="h6 fw-light">
                  <i className="fas fa-fw fa-envelope text-primary me-1 me-sm-3" />
                  Email:
                </span>
                <span>example@gmail.com</span>
              </li>
              <li className="list-group-item px-0">
                <span className="h6 fw-light">
                  <i className="fas fa-fw fa-headphones text-primary me-1 me-sm-3" />
                  Phone number:
                </span>
                <span>+896-789-546</span>
              </li>
              <li className="list-group-item px-0">
                <span className="h6 fw-light">
                  <i className="fas fa-fw fa-globe text-primary me-1 me-sm-3" />
                  Website:
                </span>
              </li>
            </ul>

            {/* members START */}
            <div className="row g-4 mt-4">
              {/* Title */}
              <h2>Members</h2>
              {/* Card item START */}
              <Card />
              <Card />
              <Card />
              <Card />
              {/* Card item END */}
            </div>
            {/* Course END */}
          </div>
          {/* Main content END */}
        </div>
        {/* Row END */}
      </div>
    </section>
  );
}

export default TeamMembers;
