import React from "react";

function Motivation() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-center mb-5">Motivation</h2>

            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <p className="card-text">
                  The Rover-71 project, driven by AAUB university students, is
                  an opportunity to inspire, innovate, and educate. The project
                  promotes STEM education through robotics and aerospace
                  engineering, aiming to advance space exploration and inspire
                  future generations. The website is a hub to highlight student
                  achievements, portray the team's journey, and promote
                  community engagement. It supports fundraising efforts,
                  attracts sponsors, and prepares the team for global
                  competitions. Beyond competition, the project aims to share
                  knowledge, build career portfolios, and connect students and
                  other personnel with specialized industry professionals
                  through collaboration. Ultimately, this initiative reflects a
                  long-term vision to contribute to space exploration while
                  inspiring future generations to reach for the stars.
                </p>
              </div>
            </div>

            <h3 className="text-center mb-4">Vision</h3>
            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <p className="card-text">
                  Our website is the digital home of our passionate and
                  innovative Rover-71 team. It showcases our journey,
                  engineering breakthroughs, and competition milestones as we
                  push the boundaries of autonomous exploration. Through
                  real-time updates, project insights, and a behind-the-scenes
                  look at our design and testing process, we aim to inspire
                  future engineers and engage with the global robotics
                  community. Whether you're a fellow competitor, a supporter, or
                  an aspiring rover builder, our platform connects you to the
                  excitement of next-generation planetary exploration.
                </p>
              </div>
            </div>

            <h3 className="text-center mb-4">Competitions</h3>

            {/* Anatolian Rover Competition */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4>Anatolian Rover Competition</h4>
                <p className="mb-0">Venue: Turkey</p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Activities</th>
                        <th>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Beginning of the Application Submission</td>
                        <td>15.02.2025</td>
                      </tr>
                      <tr>
                        <td>Beginning of the Report Submission</td>
                        <td>01.03.2025</td>
                      </tr>
                      <tr>
                        <td>Early Application Due Date</td>
                        <td>15.03.2025</td>
                      </tr>
                      <tr>
                        <td>Beginning of Late Application</td>
                        <td>16.04.2025</td>
                      </tr>
                      <tr>
                        <td>Report Submission Due Date</td>
                        <td>15.04.2025</td>
                      </tr>
                      <tr>
                        <td>Announcement of the Finalists</td>
                        <td>20.05.2025</td>
                      </tr>
                      <tr>
                        <td>ARC'25 Orientation Day</td>
                        <td>23.07.2025</td>
                      </tr>
                      <tr>
                        <td>ARC'25 Day 1</td>
                        <td>24.07.2025</td>
                      </tr>
                      <tr>
                        <td>ARC'25 Day 2</td>
                        <td>25.07.2025</td>
                      </tr>
                      <tr>
                        <td>ARC'25 Day 3</td>
                        <td>26.07.2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">
                  The Anatolian Rover Competition is a prestigious competition
                  organized by the Space Exploration Society (UKET) for
                  university teams to explore robotics and space exploration by
                  designing and building rovers for challenging terrains. It
                  serves as a platform for providing hands-on experiences that
                  enhance skills in engineering, programming, and
                  problem-solving while promoting teamwork, creativity, and
                  technical expertise. Aligning with STEM education, the
                  competition aims to unite rover enthusiast teams from across
                  the globe, encouraging international collaboration and shared
                  innovation. The narrated Moon and Mars missions set the
                  Anatolian Rover Challenge apart, distinguishing it from other
                  competitions.
                </p>
              </div>
            </div>

            {/* Canadian International Rover Challenge */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4>Canadian International Rover Challenge (CIRC)</h4>
              </div>
              <div className="card-body">
                <p>
                  The Canadian International Rover Challenge (CIRC) is an annual
                  robotics competition organized by the University of
                  Saskatchewan Space Design Team (USST). Held every August in
                  the Badlands of Alberta, Canada, it challenges global student
                  teams to design and operate planetary rovers in Martian-like
                  terrain. Over four days, participants tackle missions such as
                  autonomous navigation, scientific analysis, and equipment
                  deployment, simulating real extraterrestrial exploration. With
                  a strong emphasis on innovation and problem-solving, CIRC
                  serves as a premier platform for aspiring engineers and
                  roboticists, pushing the boundaries of space technology.
                </p>
                <div className="table-responsive mt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Activities</th>
                        <th>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Beginning of the Application Submission</td>
                        <td>Until late 2024</td>
                      </tr>
                      <tr>
                        <td>Safety Report Submissions Due Date</td>
                        <td>19.06.2025</td>
                      </tr>
                      <tr>
                        <td>Event Briefing/Kick-Off</td>
                        <td>08.08.2025</td>
                      </tr>
                      <tr>
                        <td>Night Task Start</td>
                        <td>08.08.2025</td>
                      </tr>
                      <tr>
                        <td>Day Task Start</td>
                        <td>09.08.2025</td>
                      </tr>
                      <tr>
                        <td>All Task End</td>
                        <td>11.08.2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* University Rover Challenge */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white">
                <h4>University Rover Challenge</h4>
                <p className="mb-0">
                  Venue: Mars Desert Research Station, Hanksville, Utah, USA
                </p>
              </div>
              <div className="card-body">
                <p>
                  The University Rover Challenge (URC) is the world's premier
                  robotics competition for university teams, organised by the
                  Mars Society. Held annually at the Mars Desert Research
                  Station (MDRS) in Utah, USA, the competition challenges
                  students to design and build next-generation Mars rovers
                  capable of performing real-world tasks. Competing rovers must
                  demonstrate excellence in mobility, autonomous navigation,
                  science exploration, and equipment servicing. URC fosters
                  innovation in planetary robotics, pushing students to develop
                  technologies suited for future space exploration. With teams
                  from leading universities worldwide, the competition is a
                  platform for aspiring engineers and scientists to showcase
                  their expertise. The final competition is typically held in
                  late May or early June, with proposal and system acceptance
                  deadlines occurring months in advance.
                </p>
                <div className="table-responsive mt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Activities</th>
                        <th>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Registration Deadline</td>
                        <td>30.10.2024</td>
                      </tr>
                      <tr>
                        <td>Design Submission</td>
                        <td>04.12.2024</td>
                      </tr>
                      <tr>
                        <td>Accepted Teams list</td>
                        <td>28.02.2025</td>
                      </tr>
                      <tr>
                        <td>SAR Submission Deadline</td>
                        <td>28.02.2025</td>
                      </tr>
                      <tr>
                        <td>Finals at Mars Desert Research Station</td>
                        <td>28.05.2025 - 31.05.2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* European Rover Challenge */}
            <div className="card shadow-sm mb-5">
              <div className="card-header bg-primary text-white">
                <h4>European Rover Challenge</h4>
                <p className="mb-0">
                  AGH University of Science and Technology in Krakow, Poland.
                </p>
              </div>
              <div className="card-body">
                <p>
                  The European Rover Challenge 2025 (ERC) is an exciting and
                  prestigious competition that invites university students and
                  young engineers to design and operate Mars-mimicking rovers.
                  The ERC 2025 is a magnet for the brightest engineers,
                  roboticists, and space experts to push the boundaries of
                  interplanetary exploration. The competitors will experience
                  real-world situations that imitate the circumstances that
                  would be faced by future human missions to Mars, including
                  operating on the extreme and unexplored terrain of the Red
                  Planet.
                </p>
                <p>
                  ERC 2025 is not just about building a rover; it's about
                  building the next generation of scientists, engineers, and
                  innovators who will create the next space technology. The
                  competition is a platform for students to demonstrate their
                  capability to build cutting-edge technology, solve crucial
                  problems, and work as part of a multidisciplinary team.
                </p>
                <p>
                  Through ERC 2025, student groups will be tested to construct
                  rovers that can fully function and execute tasks involving
                  terrain mobility, remote sensing and scientific data
                  collection, among others. All these tasks represent actual
                  challenges the robotic explorers and astronauts on Mars will
                  be facing, hence giving participants actual hands-on
                  experience in cutting-edge technologies involved in space
                  exploration.
                </p>
                <div className="table-responsive mt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Activities</th>
                        <th>Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Registration</td>
                        <td>Feb 10th - March 10th</td>
                      </tr>
                      <tr>
                        <td>ERC day 1</td>
                        <td>29.08.2025</td>
                      </tr>
                      <tr>
                        <td>ERC day 2</td>
                        <td>30.08.2025</td>
                      </tr>
                      <tr>
                        <td>ERC day 3</td>
                        <td>31.08.2025</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h3 className="text-center mb-4">Achievement</h3>
            <div className="card shadow-sm mb-5">
              <div className="card-body">
                <ul>
                  <li className="mb-2">
                    The rover-71 project was briefed to the former Chief of Air
                    Staff of Bangladesh Air Force Air Chief Marshal Shaikh Abdul
                    Hannan BBP, BUP, nswc, fawc, psc on AAUB 5th raising day 28
                    February 2024.
                  </li>
                  <li className="mb-2">
                    The rover-71 published a conference paper titled
                    "Electro-mechanical Design Analysis and Implementation of an
                    Indigenous Mars Rover" in the prestigious journal IEEE
                    TENSYMP in New Delhi, India.
                  </li>
                  <li>
                    A practical demonstration of the rover was given in front of
                    our current Chief of Air Staff of Bangladesh Air Force Air
                    Chief Marshal Hasan Mahmood Khan BBP, OSP, GUP, nswc, pscz
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-center mb-4">Why Join Us?</h3>
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5>Hands-on experience with Cutting-Edge Tech</h5>
                <ul>
                  <li>
                    Work with robotics, AI, computer vision, and autonomous
                    navigation.
                  </li>
                  <li>
                    Gain practical experience in mechanical design, embedded
                    systems, and software development.
                  </li>
                </ul>

                <h5 className="mt-4">
                  Challenge Yourself & Solve Real-World Problems
                </h5>
                <ul>
                  <li>
                    Design, build, and program a rover capable of tackling
                    extreme terrain.
                  </li>
                  <li>
                    Improve problem-solving, teamwork, and project management
                    skills.
                  </li>
                  <li>Compete at an International Level</li>
                </ul>

                <h5 className="mt-4">
                  Boost Your Career & Network with Industry Leaders
                </h5>
                <ul>
                  <li>
                    Get noticed by aerospace, robotics, and tech companies
                    through different competitions.
                  </li>
                  <li>Work alongside passionate engineers and innovators.</li>
                  <li>Be Part of an Elite, Passion-Driven Team</li>
                </ul>

                <p className="mt-4">
                  Join a group of like-minded people who share your passion for
                  space and robotics. Collaborate, learn, and grow together on
                  the team that follows your passion. The teams available are:
                </p>

                <div className="row mt-4">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5>1. Electronics and Power System Team</h5>
                        <p>
                          If you want to design, innovate and power the rover's
                          various systems then the Electronics and Power System
                          team can be your choice. Where every circuit you
                          design and build will help to drive a mission forward.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5>2. Control and Communication Team</h5>
                        <p>
                          Passionate about coding and controlling complex
                          systems? Join us on the Control and Communication Team
                          to connect, command, and innovate. Here software meets
                          seamless communication, and every line of your code
                          will bring the rover to operation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5>3. Mechanical Team</h5>
                        <p>
                          Want to design, build and innovate various structures
                          of the rover then the Mechanical team can be your
                          choice. This is where creativity meets engineering and
                          every mechanism that you build can drive the rover
                          closer to its goal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5>4. Science and Environment Team</h5>
                        <p>
                          Want to unravel the secrets that remain buried in the
                          landscape? Then choose the Science and Environment
                          team where you will uncover the secrets buried in the
                          soil through various experiments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5>5. Management Team</h5>
                        <p>
                          Driven by strategy and sustainability? Then the
                          Management Team has a place for you. Manage budgets,
                          secure funding and ensure every achievement is
                          well-documented for mission success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-center mb-4">Why Sponsor Us</h3>
            <div className="card shadow-sm">
              <div className="card-body">
                <p>
                  Success in any industry depends on recognizing and seizing
                  opportunities, whether through market expansion or strategic
                  partnerships. Partnering with the Rover-71 team offers
                  organizations numerous benefits and various growth
                  opportunities. Such as:
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Exposure to a new market:</strong> As the Rover-71
                    team competes in multiple countries, our sponsors gain
                    valuable exposure to international markets and customers,
                    enhancing their brand visibility and expanding their global
                    reach.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Strengthening presence in an existing market:
                    </strong>{" "}
                    The Rover-71 team competes in international competitions,
                    gaining recognition from various media outlets for
                    representing the country. This exposure not only promotes
                    the team but also enhances the visibility of its sponsors,
                    boosting their presence in the local market.
                  </li>
                  <li>
                    <strong>Supporting a noble cause:</strong> Sponsoring the
                    Rover-71 team goes beyond just branding—it's an opportunity
                    to support innovation, education, and the pursuit of
                    excellence. By investing in this initiative, organizations
                    contribute to the growth of young talent and the advancement
                    of technology, making a lasting impact on the community.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
