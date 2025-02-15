import React from "react";
import { baseAssetsUrl } from "../Myconst";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="col-lg-10 col-xl-6">
      <Link to={`/team/${props.slug}`}>
        <div className="card shadow p-2">
          <div className="row g-0">
            {/* Image */}
            <div className="col-md-4">
              <img
                src={baseAssetsUrl + props.image}
                className="rounded-3"
                alt="..."
              />
            </div>
            {/* Card body */}
            <div className="col-md-8">
              <div className="card-body">
                {/* Title */}
                <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                  <div>
                    <h5 className="card-title mb-0">
                      <Link to={`/team/${props.slug}`}>{props.name}</Link>
                    </h5>
                  </div>
                </div>
                {/* Content */}
                <p className="text-truncate-2 mb-3">
                  Perceived end knowledge certainly day sweetness why cordially.
                  Ask a quick six seven offer see among.
                </p>
                {/* Info */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
