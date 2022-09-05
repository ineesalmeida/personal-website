import "./sass/main.scss";
import moment from "moment";
import { useState } from "react";

const tag_color = {
  Code: "#386FA4",
  Paper: "#DE7254",
  Misc: "#67a286",
};

function BackToTheTop() {
  return (
    <li className="back-to-the-top hidden" id="back-to-the-top">
      <a href="#header" />
    </li>
  );
}

function NavBar({ items }) {
  let links = Object.keys(items)
    .reverse()
    .map((key, i) => (
      <li key={i} className="navbar__item">
        <a href={items[key]}>{key}</a>
      </li>
    ));

  return (
    <ul className="navbar">
      {links}
      <BackToTheTop />
    </ul>
  );
}

function SocialMedia({ keywork, icon, link }) {
  return (
    <div className="social__icon">
      <a href={link} target="_blank" rel="noreferrer">
        <i className={icon} title={keywork} aria-label={"Go to " + keywork} />
      </a>
    </div>
  );
}

function Header() {
  let social_media = [
    {
      keywork: "Email",
      icon: "fas fa-envelope-square",
      link: "mailto:alwoods@utexas.edu",
    },
    {
      keywork: "LinkedIn",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/woods-aaron/",
    },
    {
      keywork: "Github",
      icon: "fab fa-github",
      link: "https://github.com/guitarbeat",
    },
    {
      keywork: "ORCID",
      icon: "fab fa-orcid",
      link: "https://orcid.org/0000-0001-6786-9243",
    },
    {
      keywork: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/guitarbeat/",
    },
    {
      keywork: "Twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/WoodsResearch",
    },
    {
      keywork: "ResearchGate",
      icon: "fab fa-researchgate",
      link: "https://www.researchgate.net/profile/Aaron-Woods-7",
    },
    {
      keywork: "CV",
      icon: "fas fa-file-alt",
      link: "/cv.pdf",
    },
  ];

  return (
    <div className="container" id="header">
      <div className="container__content">
        <div className="header">
          <img
            src={process.env.PUBLIC_URL + "/profile.png"}
            className="header__picture"
            alt="me"
          />
          <div className="header__text">
            <h1>Aaron </h1>
            <h1>Lorenzo </h1> <h1>Woods</h1>
            <br />
            <h2>Engineer</h2>
            <h2> | </h2>
            <h2>Artist</h2>
            <h2> | </h2>
            <h2>Scientist</h2>
            <br />
            <h3>Biomedical Engineering Doctoral Student</h3>
            <div className="social tooltip">
              {social_media.map((s) => (
                <SocialMedia key={s.keywork} {...s} />
              ))}
              <span className="tooltiptext">Email: alwoods@utexas.edu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container" id="about">
      <div className="container__content">
        <div className="about-me">
          <div className="about-me__img">
            <img src="guitar.png" alt="Guitar" />
          </div>
          <h2>About Me</h2>
          <p>
            I grew up in El Paso, TX. I find that it&apos;s very easy for me to
            get into a lot of things. Entrepreneurship, astronomy, music
            creation, and artistry were all potential career paths for me.
          </p>
          <p>
            The one that won out, with the integration of the others, was
            becoming a scientist. I am currently in the
            <a href="https://foil.bme.utexas.edu/">FOIL lab</a>, mentored by Dr.
            Andrew Dunn. This lab creates and implements imaging technologies to
            examine blood flow and neurovascular anatomy.&nbsp;
          </p>
          <p>
            As someone who strongly identifies as an artist and engineer, I feel
            I picked this career because it blends both aspects of that
            identity. I get to spend my time learning new things, and as a
            scientist, I get to creatively apply that knowledge to benefit
            people.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, content, slug, link, keyword, date }) {
  let _link = link ? (
    <div className="projects__card__label projects__card__link">Link</div>
  ) : null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="projects__card"
      key={slug}
    >
      <div className="projects__card__keywords">
        {_link}
        <div
          className="projects__card__label"
          style={{ backgroundColor: tag_color[keyword] }}
        >
          {keyword}
        </div>
      </div>
      <h3>{title}</h3>
      <p style={{ fontStyle: "italic", color: "LightSteelBlue" }}>{date}</p>
      <p>{content}</p>
    </a>
  );
}

function Projects() {
  let projects = [
    {
      title: "Personal website",
      slug: "personal-website",
      date: "2022",
      keyword: "Code",
      link: null,
      content:
        "Random creative endeavor with a slew of features left to come. I prefer to take advantage of these opportunities to experiment with new tools and practice. Sass, flexbox, CSS animations, and React were all used. This project would not have been possible without Ines Almeida's help.",
    },
    {
      title: "Calibration of liquid crystal variable retarders",
      slug: "Publication",
      date: "2018",
      keyword: "Paper",
      link: "https://opg.optica.org/ao/fulltext.cfm?uri=ao-59-34-10673&id=443588",
      content:
        "I contributed to this paper by writing MATLAB and C++ code that enabled the LCVR to be calibrated using a common-path interferometer.",
    },
    {
      title: "Data Collection for US Army NETCOM",
      slug: "Capston Project",
      date: "2020",
      keyword: "Misc",
      link: "https://www.youtube.com/watch?v=3L-qHfODnI4",
      content:
        "I was the project manager for this undergraduate senior capstone project. Our task was to improve a military data collection tool for network convergence. We used formative evaluation methods and usability testing to determine the best way to design the database and GUI.",
    },
    {
      title: "Made a song every day",
      slug: "Music",
      date: "2017",
      keyword: "Misc",
      link: "https://nini.bandcamp.com/",
      content:
        "When I first started making music, I set a goal of writing a song every day during my undergraduate degree's winter break. It was a difficult challenge, and some of the songs were terrible, but I learned a lot. I'm not particularly proud of any of the songs that resulted from this project, but rather, I'm proud of the process as a whole. Every day, I recorded, edited, mastered, and distributed songs. I haven't been as musically productive since.",
    },
  ];

  let project_cards = projects
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map((props) => <ProjectCard key={props.slug} {...props} />);

  return (
    <div className="container" id="projects">
      <div className="container__content">
        <h1>Some of my Projects</h1>
        <div className="projects">
          <div className="projects__cards_container">{project_cards}</div>
        </div>
      </div>
    </div>
  );
}

function TimelineBar({ first_year, job_bars, bar_height, bar_start }) {
  let sub_bars = job_bars.map((bar) => {
    return (
      <div
        className="work__timeline__subbar"
        style={{ height: bar[0] + "%", bottom: bar[1] + "%" }}
      />
    );
  });

  return (
    <div className="work__timeline">
      <p className="work__timeline__now">Now</p>
      <p className="work__timeline__start">{first_year}</p>
      {sub_bars}
      <div
        className="work__timeline__bar"
        style={{ height: bar_height + "%", bottom: bar_start + "%" }}
      />
    </div>
  );
}

function Work() {
  let jobs = [
    {
      title: "Graduate Researcher",
      company:
        "Functional Optical Imaging Laboratory | Advisor: Dr. Andrew Dunn",
      place: "Austin, TX",
      from: "08-2021",
      to: null,
      description:
        "This is what I'm doing right now. I'm currently working on a project that will improve our understanding of how new blood vessels form, which could lead to new insights into stroke recovery and other diseases.",
      slug: "persp-swe",
    },
    {
      title: "Board Member",
      company: "Executive Coordinating Committee | ICC Austin",
      place: "Austin, TX",
      from: "08-2021",
      to: null,
      description:
        "Here, I help provide leadership to the board of directors of ICC Austin, a non-profit organization of student co-op housing, and I help coordinate the Board's activities as a whole to ensure that high-level governance duties are met.",
      slug: "persp-swe",
    },
    {
      title: "Rotation Student",
      company: "UT Biomedical Informatics Lab | Wang Research Group",
      place: "El Paso, TX",
      from: "05-2021",
      to: "10-2021",
      description:
        "During my first year rotations, I worked on the development of a decision support system for breast cancer patients, the acquisition and analysis of EEG data, and the fabrication of dry electrodes for long recordings.",
      slug: "persp-swe",
    },
    {
      title: "Community Outreach Specialist",
      company: "University of Texas at El Paso",
      place: "El Paso, TX",
      from: "08-2018",
      to: "07-2020",
      description:
        "Here, I created marketing programs and materials for student outreach, and I collaborated with the department chair to create the business acumen curriculum for a four-year B.S. program in engineering innovation and leadership. I used data visualization to assess the program's retention and recruitment health and then presented that information to make data-driven decisions.",
      slug: "persp-swe",
    } /*
    {
      'title': "Undergraduate Researcher",
      'company': 'CREaTE Lab | Advisor: Dr. Peter Golding',
      'place': 'El Paso, TX',
      'from': "08-2018",
      'to': "12-2020",
      'description': "Innovated on engineering education regarding ethics and leadership. Programmed advising software to assist with course recommendation. Optimized the advising process to better falicitate faculty and student",
      'slug': 'persp-swe'
    },*/,
    {
      title: "Clinical UG Researcher",
      company:
        "Adult Neurology Ketogenic Diet Therapy Clinic | Advisor: Dr. Elizabeth Felton",
      place: "Madison, WI",
      from: "05-2019",
      to: "08-2019",
      description:
        "In a hospital, I worked in a small lab to create data visualizations of patient data for clinical and dietary analysis and decision making, managed HIPAA compliance, safety, and ethics for patient research, and shadowed the doctor-patient relationship and epilepsy treatment.",
      slug: "persp-swe",
    },
    {
      title: "Optical UG Researcher",
      company: "Biomedical Optics Lab | Advisor: Dr. Jeremy Rogers",
      place: "Madison, WI",
      from: "05-2018",
      to: "08-2018",
      description:
        "This was my first exposure to biomedical engineering research, and it was the catalyst for me to pursue a Ph.D. I was working on an interferometer to measure phase delay here. I also wrote automated calibration software for optical equipment in a language I didn't even understand at the time!",
      slug: "persp-swe",
    },
    {
      title: "Amazon Prime Student Ambassador",
      company: "Riddle and Bloom | Amazon",
      place: "El Paso, TX",
      from: "08-2017",
      to: "10-2018",
      description:
        "I worked to represent and raise awareness of this brand through a series of coordinated events, averaging 300+ student interactions. It assisted me in becoming more comfortable with planning student events and networking.",
      slug: "persp-swe",
    },
    {
      title: "Undergraduate Teaching Assistant",
      company:
        "Department of Engineering Education and Leadership | Design Nature",
      place: "El Paso, TX",
      from: "01-2018",
      to: "05-2018",
      description:
        "I coordinated student trainings to use a fabrication laboratory, taught computer-aided design and simulation procedures, and directed the development process to build working prototypes.",
      slug: "persp-swe",
    } /*
    {
      'title': "Project Analyst",
      'company': 'University of Texas at El Paso',
      'place': 'El Paso, TX',
      'from': "08-2018",
      'to': "12-2020",
      'description': "Extract and illustrate retention rates via visualization of historical enrollment data. Assist with in-person, online, and telephone inquiries for academic department operations. Iterative design of the department’s advising process and promotion for 200+ students. Mentorship of student staff for sustainability in future department data management and reporting",
      'slug': 'persp-swe'
    },*/,
    {
      title: "Sound Engineering Technician",
      company: "Beacon Hill Recording Studios",
      place: "El Paso, TX",
      from: "10-2018",
      to: "08-2019",
      description:
        "I got a firsthand look at what it's like to work at a renowned music studio that has worked with artists such as Khalid, Kali Uchis, and French Kiwi Juice. I assisted with the recording process and learned about how songs are mixed and mastered in the music industry.",
      slug: "persp-swe",
    },
    {
      title: "Financial Project Engineer",
      company: "Sonora Bank",
      place: "Boerne, TX",
      from: "05-2017",
      to: "08-2017",
      description:
        "I designed and formatted a personal financial statement for customer use, practiced daily responsibilities from tellers to the CFO, and most importantly, I learned good money management.",
      slug: "persp-swe",
    },
  ];

  const [barHeight, setbarHeight] = useState(0);
  const [barStart, setBarStart] = useState(0);

  function changebarHeight(event) {
    setBarStart(
      event.target.getAttribute("data-barstart") ||
        event.target.parentElement.getAttribute("data-barstart")
    );

    setbarHeight(
      event.target.getAttribute("data-barheight") ||
        event.target.parentElement.getAttribute("data-barheight")
    );
  }

  let first_date = moment();
  jobs.forEach((job) => {
    let _to_moment = job.to ? moment(job.to, "MM-YYYY") : moment();
    let _from_moment = moment(job.from, "MM-YYYY");
    let _duration = _to_moment.diff(_from_moment, "months");
    job["from"] = _from_moment.format("MMM YYYY");
    job["to"] = job.to ? _to_moment.format("MMM YYYY") : "Now";
    job["_from"] = _from_moment;
    job["_to"] = _to_moment;
    job["date"] = _duration === 0 ? job.from : job.from + " - " + job.to;
    job["duration"] = _duration === 0 ? 1 : _duration;

    if (first_date.diff(_from_moment) > 0) {
      first_date = _from_moment;
    }
  });
  let time_span = moment().diff(first_date, "months");
  jobs.forEach((job) => {
    job["bar_start"] = (100 * job._from.diff(first_date, "months")) / time_span;
    job["bar_height"] = (100 * job.duration) / time_span;
  });

  let job_bars = jobs.map((job) => [job.bar_height, job.bar_start]);

  return (
    <div className="container" id="work">
      <div className="container__content">
        <h1>My career so far</h1>
        <div className="work">
          <TimelineBar
            first_year={first_date.format("YYYY")}
            job_bars={job_bars}
            bar_height={barHeight}
            bar_start={barStart}
          />
          <div className="work__items">
            {jobs.map((job) => {
              return (
                <div
                  className="work__item"
                  key={job.slug}
                  data-key={job.slug}
                  onMouseEnter={changebarHeight.bind(this)}
                  onTouchStart={changebarHeight.bind(this)}
                  onClick={changebarHeight.bind(this)}
                  data-barstart={job.bar_start}
                  data-barheight={job.bar_height}
                >
                  <p className="work__item__place">
                    <i className="fa fa-map-marker-alt" aria-hidden="true" />{" "}
                    {job.place}
                  </p>
                  <h2>{job.title}</h2>
                  <h3>{job.company}</h3>
                  <p className="work__item__date">{job.date}</p>
                  <p>{job.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const App = () => (
  <div>
    <div className="vignete-top" />
    <NavBar
      items={{
        About: "#about",
        Projects: "#projects",
        Work: "#work",
        CV: "/cv.pdf",
      }}
    />
    <Header />
    <About />
    <Projects />
    <Work />
    <div className="vignete-bottom" />
  </div>
);

export default App;
