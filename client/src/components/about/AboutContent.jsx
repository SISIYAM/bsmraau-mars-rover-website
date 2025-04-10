import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import TopContent from "../home/TopContent";

function AboutContent() {
  const topContentData = {
    title: `Mars Rover – AAUB`,
    description: `Get inspired and explore new frontiers with the Mars Rover Project at  Aviation and Aerospace University Bangladesh (AAUB). This initiative aims to develop an advanced prototype rover designed for planetary exploration, focusing on autonomous navigation, obstacle detection, and environmental data collection.

Our project integrates cutting-edge technologies from aeronautical engineering and avionics, showcasing the potential for space exploration. The Mars Rover features solar-powered modules, terrain analysis systems, and a remote-control interface powered by Python and ROS (Robot Operating System).

Pioneered by the Aeronautical Engineering Avionics 3rd Batch, this project is a step towards building sustainable technology for interplanetary missions. Explore this innovation along with other academic resources, including semester PDFs from BSMRAAU and beyond, designed to inspire the next generation of aerospace engineers.`,
    imageUrl: "/assets/images/NASA_Mars_Rover.webp",
    ytLink: "https://youtu.be/o0lcpDvPoP0?si=vwK9SWKaaqSyV6p8",
  };
  return (
    <div className="bg-light">
      <TopContent
        title={topContentData.title}
        description={topContentData.description}
        imageUrl={topContentData.imageUrl}
        ytLink={topContentData.ytLink}
      />
      <Container className="py-5">
        {/* Motivation Section */}
        <SectionWithDecorators title="Motivation">
          <p className="text-justify">
            The Rover-71 project, driven by AAUB university students, is an
            opportunity to inspire, innovate, and educate. The project promotes
            STEM education through robotics and aerospace engineering, aiming to
            advance space exploration and inspire future generations. The
            website is a hub to highlight student achievements, portray the
            team's journey, and promote community engagement. It supports
            fundraising efforts, attracts sponsors, and prepares the team for
            global competitions. Beyond competition, the project aims to share
            knowledge, build career portfolios, and connect students and other
            personnel with specialized industry professionals through
            collaboration. Ultimately, this initiative reflects a long-term
            vision to contribute to space exploration while inspiring future
            generations to reach for the stars.
          </p>
        </SectionWithDecorators>

        {/* Vision Section */}
        <SectionWithDecorators title="Vision">
          <p className="text-justify">
            Our website is the digital home of our passionate and innovative
            Rover-71 team. It showcases our journey, engineering breakthroughs,
            and competition milestones as we push the boundaries of autonomous
            exploration. Through real-time updates, project insights, and a
            behind-the-scenes look at our design and testing process, we aim to
            inspire future engineers and engage with the global robotics
            community. Whether you're a fellow competitor, a supporter, or an
            aspiring rover builder, our platform connects you to the excitement
            of next-generation planetary exploration.
          </p>
        </SectionWithDecorators>

        {/* Competitions Section */}
        <SectionWithDecorators title="Competitions">
          <Row className="g-4">
            <Col lg={6}>
              <CompetitionCard
                title="Anatolian Rover Competition"
                venue="Turkey"
                icon="bi bi-geo-alt-fill text-danger"
                description="The Anatolian Rover Competition is a prestigious competition organized by the Space Exploration Society (UKET) for university teams to explore robotics and space exploration by designing and building rovers for challenging terrains. It serves as a platform for providing hands-on experiences that enhance skills in engineering, programming, and problem-solving while promoting teamwork, creativity, and technical expertise. Aligning with STEM education, the competition aims to unite rover enthusiast teams from across the globe, encouraging international collaboration and shared innovation. The narrated Moon and Mars missions set the Anatolian Rover Challenge apart, distinguishing it from other competitions."
                timeline={[
                  {
                    activity: "Beginning of the Application Submission",
                    date: "15.02.2025",
                  },
                  {
                    activity: "Beginning of the Report Submission",
                    date: "01.03.2025",
                  },
                  {
                    activity: "Early Application Due Date",
                    date: "15.03.2025",
                  },
                  {
                    activity: "Beginning of Late Application",
                    date: "16.04.2025",
                  },
                  {
                    activity: "Report Submission Due Date",
                    date: "15.04.2025",
                  },
                  {
                    activity: "Announcement of the Finalists",
                    date: "20.05.2025",
                  },
                  { activity: "ARC'25 Orientation Day", date: "23.07.2025" },
                  { activity: "ARC'25 Day 1", date: "24.07.2025" },
                  { activity: "ARC'25 Day 2", date: "25.07.2025" },
                  { activity: "ARC'25 Day 3", date: "26.07.2025" },
                ]}
              />
            </Col>
            <Col lg={6}>
              <CompetitionCard
                title="Canadian International Rover Challenge (CIRC)"
                venue="Alberta, Canada"
                icon="bi bi-geo-alt-fill text-primary"
                description="The Canadian International Rover Challenge (CIRC) is an annual robotics competition organized by the University of Saskatchewan Space Design Team (USST). Held every August in the Badlands of Alberta, Canada, it challenges global student teams to design and operate planetary rovers in Martian-like terrain. Over four days, participants tackle missions such as autonomous navigation, scientific analysis, and equipment deployment, simulating real extraterrestrial exploration. With a strong emphasis on innovation and problem-solving, CIRC serves as a premier platform for aspiring engineers and roboticists, pushing the boundaries of space technology."
                timeline={[
                  {
                    activity: "Beginning of the Application Submission",
                    date: "Until late 2024",
                  },
                  {
                    activity: "Safety Report Submissions Due Date",
                    date: "19.06.2025",
                  },
                  { activity: "Event Briefing/Kick-Off", date: "08.08.2025" },
                  { activity: "Night Task Start", date: "08.08.2025" },
                  { activity: "Day Task Start", date: "09.08.2025" },
                  { activity: "All Task End", date: "11.08.2025" },
                ]}
              />
            </Col>
            <Col lg={6}>
              <CompetitionCard
                title="University Rover Challenge"
                venue="Mars Desert Research Station, Hanksville, Utah, USA"
                icon="bi bi-geo-alt-fill text-success"
                description="The University Rover Challenge (URC) is the world's premier robotics competition for university teams, organised by the Mars Society. Held annually at the Mars Desert Research Station (MDRS) in Utah, USA, the competition challenges students to design and build next-generation Mars rovers capable of performing real-world tasks. Competing rovers must demonstrate excellence in mobility, autonomous navigation, science exploration, and equipment servicing. URC fosters innovation in planetary robotics, pushing students to develop technologies suited for future space exploration. With teams from leading universities worldwide, the competition is a platform for aspiring engineers and scientists to showcase their expertise. The final competition is typically held in late May or early June, with proposal and system acceptance deadlines occurring months in advance."
                timeline={[
                  { activity: "Registration Deadline", date: "30.10.2024" },
                  { activity: "Design Submission", date: "04.12.2024" },
                  { activity: "Accepted Teams list", date: "28.02.2025" },
                  { activity: "SAR Submission Deadline", date: "28.02.2025" },
                  {
                    activity: "Finals at Mars Desert Research Station",
                    date: "28.05.2025 - 31.05.2025",
                  },
                ]}
              />
            </Col>
            <Col lg={6}>
              <CompetitionCard
                title="European Rover Challenge"
                venue="AGH University of Science and Technology in Krakow, Poland"
                icon="bi bi-geo-alt-fill text-warning"
                description="The European Rover Challenge 2025 (ERC) is an exciting and prestigious competition that invites university students and young engineers to design and operate Mars-mimicking rovers. The ERC 2025 is a magnet for the brightest engineers, roboticists, and space experts to push the boundaries of interplanetary exploration. The competitors will experience real-world situations that imitate the circumstances that would be faced by future human missions to Mars, including operating on the extreme and unexplored terrain of the Red Planet. ERC 2025 is not just about building a rover; it's about building the next generation of scientists, engineers, and innovators who will create the next space technology. The competition is a platform for students to demonstrate their capability to build cutting-edge technology, solve crucial problems, and work as part of a multidisciplinary team."
                timeline={[
                  { activity: "Registration", date: "Feb 10th -March 10th" },
                  { activity: "ERC day 1", date: "29.08.2025" },
                  { activity: "ERC day 2", date: "30.08.2025" },
                  { activity: "ERC day 3", date: "31.08.2025" },
                ]}
              />
            </Col>
          </Row>
        </SectionWithDecorators>

        {/* Achievements Section */}
        <SectionWithDecorators title="Achievement">
          <Row className="g-4">
            <Col md={4}>
              <AchievementCard
                icon="bi bi-star-fill text-warning"
                title="Presentation to Air Chief Marshal"
                description="The rover-71 project was briefed to the former Chief of Air Staff of Bangladesh Air Force Air Chief Marshal Shaikh Abdul Hannan BBP, BUP, nswc, fawc, psc on AAUB 5th raising day 28 February 2024."
              />
            </Col>
            <Col md={4}>
              <AchievementCard
                icon="bi bi-file-earmark-text-fill text-info"
                title="IEEE Conference Publication"
                description="The rover-71 published a conference paper titled 'Electro-mechanical Design Analysis and Implementation of an Indigenous Mars Rover' in the prestigious journal IEEE TENSYMP in New Delhi, India."
              />
            </Col>
            <Col md={4}>
              <AchievementCard
                icon="bi bi-display-fill text-primary"
                title="Demonstration for Current Air Chief"
                description="A practical demonstration of the rover was given in front of our current Chief of Air Staff of Bangladesh Air Force Air Chief Marshal Hasan Mahmood Khan BBP, OSP, GUP, nswc, pscz."
              />
            </Col>
          </Row>
        </SectionWithDecorators>

        {/* Why Join Us Section */}
        <SectionWithDecorators title="Why Join Us?">
          <Row className="g-4">
            <Col md={6} lg={3}>
              <FeatureCard
                icon="bi bi-cpu-fill"
                title="Hands-on experience with Cutting-Edge Tech"
                content="Work with robotics, AI, computer vision, and autonomous navigation. Gain practical experience in mechanical design, embedded systems, and software development."
                color="primary"
              />
            </Col>
            <Col md={6} lg={3}>
              <FeatureCard
                icon="bi bi-lightbulb-fill"
                title="Challenge Yourself & Solve Real-World Problems"
                content="Design, build, and program a rover capable of tackling extreme terrain. Improve problem-solving, teamwork, and project management skills."
                color="success"
              />
            </Col>
            <Col md={6} lg={3}>
              <FeatureCard
                icon="bi bi-graph-up-arrow"
                title="Boost Your Career & Network with Industry Leaders"
                content="Get noticed by aerospace, robotics, and tech companies through different competitions. Work alongside passionate engineers and innovators."
                color="info"
              />
            </Col>
            <Col md={6} lg={3}>
              <FeatureCard
                icon="bi bi-people-fill"
                title="Be Part of an Elite, Passion-Driven Team"
                content="Join a group of like-minded people who share your passion for space and robotics. Collaborate, learn, and grow together on the team that follows your passion."
                color="warning"
              />
            </Col>
          </Row>

          <div className="mt-5">
            <h4 className="text-center mb-4">The teams available are:</h4>
            <Row className="g-4">
              <Col md={6} lg={4}>
                <TeamCard
                  title="Electronics and Power System Team"
                  description="If you want to design, innovate and power the rover's various systems then the Electronics and Power System team can be your choice. Where every circuit you design and build will help to drive a mission forward."
                  icon="bi bi-lightning-charge-fill"
                  color="danger"
                />
              </Col>
              <Col md={6} lg={4}>
                <TeamCard
                  title="Control and Communication Team"
                  description="Passionate about coding and controlling complex systems? Join us on the Control and Communication Team to connect, command, and innovate. Here software meets seamless communication, and every line of your code will bring the rover to operation."
                  icon="bi bi-code-slash"
                  color="primary"
                />
              </Col>
              <Col md={6} lg={4}>
                <TeamCard
                  title="Mechanical Team"
                  description="Want to design, build and innovate various structures of the rover then the Mechanical team can be your choice. This is where creativity meets engineering and every mechanism that you build can drive the rover closer to its goal."
                  icon="bi bi-gear-fill"
                  color="info"
                />
              </Col>
              <Col md={6} lg={4}>
                <TeamCard
                  title="Science and Environment Team"
                  description="Want to unravel the secrets that remain buried in the landscape? Then choose the Science and Environment team where you will uncover the secrets buried in the soil through various experiments."
                  icon="bi bi-flower1"
                  color="success"
                />
              </Col>
              <Col md={6} lg={4}>
                <TeamCard
                  title="Management Team"
                  description="Driven by strategy and sustainability? Then the Management Team has a place for you. Manage budgets, secure funding and ensure every achievement is well-documented for mission success."
                  icon="bi bi-lightbulb-fill"
                  color="warning"
                />
              </Col>
            </Row>
          </div>
        </SectionWithDecorators>

        {/* Why Sponsor Us Section */}
        <SectionWithDecorators title="Why Sponsor Us">
          <p className="text-justify mb-4">
            Success in any industry depends on recognizing and seizing
            opportunities, whether through market expansion or strategic
            partnerships. Partnering with the Rover-71 team offers organizations
            numerous benefits and various growth opportunities. Such as:
          </p>

          <Row className="g-4">
            <Col md={4}>
              <SponsorBenefitCard
                icon="bi bi-globe"
                title="Exposure to a new market"
                content="As the Rover-71 team competes in multiple countries, our sponsors gain valuable exposure to international markets and customers, enhancing their brand visibility and expanding their global reach."
                color="primary"
              />
            </Col>
            <Col md={4}>
              <SponsorBenefitCard
                icon="bi bi-building"
                title="Strengthening presence in an existing market"
                content="The Rover-71 team competes in international competitions, gaining recognition from various media outlets for representing the country. This exposure not only promotes the team but also enhances the visibility of its sponsors, boosting their presence in the local market."
                color="success"
              />
            </Col>
            <Col md={4}>
              <SponsorBenefitCard
                icon="bi bi-heart-fill"
                title="Supporting a noble cause"
                content="Sponsoring the Rover-71 team goes beyond just branding—it's an opportunity to support innovation, education, and the pursuit of excellence. By investing in this initiative, organizations contribute to the growth of young talent and the advancement of technology, making a lasting impact on the community."
                color="danger"
              />
            </Col>
          </Row>
        </SectionWithDecorators>
      </Container>
    </div>
  );
}

// Reusable Components

const SectionWithDecorators = ({ title, children }) => (
  <section className="position-relative py-5 mb-5">
    <div className="position-relative">
      <h2 className="text-center mb-5">
        <span className="px-3">{title}</span>
      </h2>
      {children}
    </div>
  </section>
);

const CompetitionCard = ({ title, venue, description, timeline, icon }) => (
  <Card className="h-100 border-0 shadow-sm">
    <Card.Header className="bg-light border-0">
      <div className="d-flex align-items-center">
        <i className={`${icon} fs-4 me-2`}></i>
        <div>
          <h3 className="h5 mb-0">{title}</h3>
          <small className="">{venue}</small>
        </div>
      </div>
    </Card.Header>
    <Card.Body>
      <p className="text-justify">{description}</p>

      <h5 className="h6 mt-4 mb-3">Key Dates</h5>
      <ul className="list-unstyled">
        {timeline.map((item, index) => (
          <li
            key={index}
            className="d-flex justify-content-between mb-2 pb-2 border-bottom"
          >
            <span>{item.activity}</span>
            <span className="">{item.date}</span>
          </li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

const AchievementCard = ({ icon, title, description, date }) => (
  <Card className="h-100 border-0 shadow-sm">
    <Card.Body className="text-center p-4">
      <div className="icon-xl bg-light rounded-circle mb-3 mx-auto">
        <i className={`${icon} fs-3`}></i>
      </div>
      <h4 className="h5">{title}</h4>
      <p className="">{description}</p>
      {date && <small className="text-primary fw-bold">{date}</small>}
    </Card.Body>
  </Card>
);

const FeatureCard = ({ icon, title, content, color = "primary" }) => (
  <Card className="h-100 border-0 shadow-sm">
    <Card.Body className="text-center p-4">
      <div
        className={`icon-lg bg-${color} bg-opacity-10 text-${color} rounded-circle mb-3 mx-auto`}
      >
        <i className={`${icon} fs-3`}></i>
      </div>
      <h4 className="h5">{title}</h4>
      <p className=" mb-0">{content}</p>
    </Card.Body>
  </Card>
);

const TeamCard = ({ icon, title, description, color = "primary" }) => (
  <Card className="h-100 border-0 shadow-sm">
    <Card.Body className="text-center p-4">
      <div
        className={`icon-lg bg-${color} bg-opacity-10 text-${color} rounded-circle mb-3 mx-auto`}
      >
        <i className={`${icon} fs-3`}></i>
      </div>
      <h4 className="h5">{title}</h4>
      <p className=" mb-0">{description}</p>
    </Card.Body>
  </Card>
);

const SponsorBenefitCard = ({ icon, title, content, color = "primary" }) => (
  <Card className="h-100 border-0 shadow-sm">
    <Card.Body className="p-4">
      <div className="d-flex align-items-center mb-3">
        <div
          className={`icon-md bg-${color} bg-opacity-10 text-${color} rounded-circle me-3`}
        >
          <i className={`${icon} fs-4`}></i>
        </div>
        <h4 className="h5 mb-0">{title}</h4>
      </div>
      <p className=" mb-0">{content}</p>
    </Card.Body>
  </Card>
);

export default AboutContent;
