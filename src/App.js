import './sass/main.scss';
import moment from 'moment';
import { useState } from "react";

const tag_color = {
  Code: '#386FA4',
  Paper: '#DE7254',
  Misc: '#67a286',
}

function BackToTheTop() {
  return <li className='back-to-the-top hidden' id='back-to-the-top'><a href='#header' /></li>
}

function NavBar({ items }) {
  let links = Object.keys(items).reverse().map((key, i) => <li key={i} className="navbar__item"><a href={items[key]}>{key}</a></li>);

  return (<ul className="navbar">
    {links}
    <BackToTheTop />
  </ul>)
}

function SocialMedia({ keywork, icon, link }) {
  return (
    <div className="social__icon">
      <a href={link} target="_blank" rel="noreferrer">
        <i className={icon} title={keywork} aria-label={"Go to " + keywork} />
      </a>
    </div>
  )
}

function Header() {

  let social_media = [
    {
      keywork: 'Email',
      icon: 'fas fa-envelope-square',
      link: 'mailto:alwoods@utexas.edu',
    },
    {
      keywork: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/woods-aaron/',
    },
    {
      keywork: 'Github',
      icon: 'fab fa-github',
      link: 'https://github.com/guitarbeat',
    },
    {
      keywork: 'ORCID',
      icon: 'fab fa-orcid', 
      link: 'https://orcid.org/0000-0001-6786-9243',
    },
    {
      keywork: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/guitarbeat/',
    },
    {
      keywork: 'Twitter',
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/WoodsResearch',
    },
    {
      keywork: 'ResearchGate',
      icon: 'fab fa-researchgate',
      link: 'https://www.researchgate.net/profile/Aaron-Woods-7',
    },
    {
      keywork: 'CV',
      icon: 'fas fa-file-alt',
      link: '/cv.pdf',
    },
  ]

  return (
    <div className='container' id='header'>
      <div className='container__content'>
        <div className='header'>
          <img src={process.env.PUBLIC_URL + '/profile.png'} className="header__picture" alt="me" />
          <div className="header__text">
            <h1>Aaron</h1><h1> Lorenzo</h1><h1> Woods</h1>
            <br />
            <h2>Biomedical Engineer</h2><h2> | </h2><h2>Artist</h2><h2> | </h2><h2>Scientist</h2>
            <br />
            <div className="social tooltip">
              {social_media.map(s => <SocialMedia key={s.keywork} {...s} />)}
              <span className="tooltiptext">Email: alwoods@utexas.edu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className='container' id='about'>
      <div className='container__content'>
        <div className='about-me'>
          <div className='about-me__img'>
            <img src="guitar.png" alt="Guitar" />
          </div>
          <p><strong>About Me</strong></p>
          <p>I grew up in El Paso, TX. I find that it&apos;s very easy for me to get into a lot of things. Entrepreneurship, astronomy, music creation, and artistry were all potential career paths for me.</p>
          <p>The one that won out, with the integration of the others, was becoming a scientist. I am currently in the <a href="https://foil.bme.utexas.edu/">FOIL lab, mentored by Dr. Andrew Dunn</a>. This lab creates and implements imaging technologies to examine blood flow and neurovascular anatomy.&nbsp;</p>
          <p>As someone who strongly identifies as an artist and engineer, I feel I picked this career because it blends both aspects of that identity. I get to spend my time learning new things, and as a scientist, I get to apply that knowledge artistically to benefit people.</p>
          <p><strong>Welcome to my personal website.</strong></p>
        </div>
      </div>
    </div >
  )
}

function ProjectCard({ title, content, slug, link, keyword, date }) {

  let _link = link ? <div className="projects__card__label projects__card__link">Link</div> : null;

  return (
    <a href={link} target="_blank" rel="noreferrer" className='projects__card' key={slug} >
      <div className="projects__card__keywords">
        {_link}
        <div className="projects__card__label" style={{ backgroundColor: tag_color[keyword] }}>{keyword}</div>
      </div>
      <h3>{title}</h3>
      <p style={{ fontStyle: "italic", color: "LightSteelBlue" }}>{date}</p>
      <p>{content}</p>
    </a >
  )
}

function Projects() {
  let projects = [

    {
      title: "Personal website",
      slug: 'personal-website',
      date: "2022",
      keyword: "Code",
      link: null,
      content: "Random creative endeavor with a slew of features left to come. I prefer to take advantage of these opportunities to experiment with new tools and practice. Sass, flexbox, CSS animations, and React were all used. This project would not have been possible without Ines Almeida's help.",
    },
    {
      title: "Calibration of liquid crystal variable retarders",
      slug: 'Publication',
      date: "2018",
      keyword: "Paper",
      link: "https://opg.optica.org/ao/fulltext.cfm?uri=ao-59-34-10673&id=443588",
      content: "I contributed to this paper by writing MATLAB and C++ code that enabled the LCVR to be calibrated using a common-path interferometer.",
    },
    {
      title: "Data Collection for US Army NETCOM",
      slug: 'Capston Project',
      date: "2020",
      keyword: "Misc",
      link: "https://www.youtube.com/watch?v=3L-qHfODnI4",
      content: "I was the project manager for this undergraduate senior capstone project. Our task was to improve a military data collection tool for network convergence. We used formative evaluation methods and usability testing to determine the best way to design the database and GUI.",
    },
  ]

  let project_cards = projects.sort((a, b) => (a.date > b.date) ? -1 : 1).map((props) => <ProjectCard key={props.slug} {...props} />);

  return (
    <div className='container' id='projects'>
      <div className='container__content'>
        <h1>Some of my Projects</h1>
        <div className='projects'>
          <div className='projects__cards_container'>
            {project_cards}
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineBar({ first_year, job_bars, bar_height, bar_start }) {

  let sub_bars = job_bars.map((bar) => {
    return <div className="work__timeline__subbar" style={{ height: bar[0] + "%", bottom: bar[1] + "%" }} />
  });

  return (
    <div className="work__timeline">
      <p className="work__timeline__now">Now</p>
      <p className="work__timeline__start">{first_year}</p>
      {sub_bars}
      <div className="work__timeline__bar" style={{ height: bar_height + "%", bottom: bar_start + "%" }} />
    </div>
  )
}


function Work() {

  let jobs = [
    {
      'title': 'Graduate Researcher',
      'company': 'Department of Biomedical Engineering | Advisor: Dr. Andrew Dunn',
      'place': 'Austin, TX',
      'from': "08-2021",
      'to': null,
      'description': "Developing microvasculature optical imaging techniques. Investigating digital image processing and quantification. Training on surgical craniotomies for biomedical imaging",
      'slug': 'persp-swe'
    },
    {
      'title': "Board Member",
      'company': 'Executive Coordinating Committee | ICC Austin',
      'place': 'Austin, TX',
      'from': "08-2021",
      'to': null,
      'description': "The primary purpose of the Executive Coordinating Committee (ECC) is to provide leadership to – and coordinate the activities of - the Board as a whole to ensure excellence in fulfilling high-level governance duties.",
      'slug': 'persp-swe'
    },
    {
      'title': 'Graduate Researcher',
      'company': 'Department of Biomedical Engineering | Advisor: Dr. Mia Markey',
      'place': 'El Paso, TX',
      'from': "05-2021",
      'to': "08-2021",
      'description': "Design of decision support system for breast cancer patients",
      'slug': 'persp-swe'
    },
    {
      'title': 'Graduate Researcher',
      'company': 'Department of Biomedical Engineering | Advisor: Dr. Evan Wang',
      'place': 'Austin, TX',
      'from': "08-2021",
      'to': "10-2021",
      'description': "Conducted EEG data acquisition and analysis. Created SOP for fabricating dry electrodes for long recordings",
      'slug': 'persp-swe'
    },
    {
      'title': "Community Outreach Specialist",
      'company': 'University of Texas at El Paso',
      'place': 'El Paso, TX',
      'from': "01-2020",
      'to': "07-2020",
      'description': "Develop comprehensive marketing programs for outreach/recruiting activities. Assist Program Manager in developing program curriculum and production of materials. Design methods that evaluate program success, making adjustments as appropriate quantifiably. Visit outreach sites and conduct program education and exhibit presentations to audiences",
      'slug': 'persp-swe'
    },
    {
      'title': "Undergraduate Researcher",
      'company': 'CREaTE Lab | Advisor: Dr. Peter Golding',
      'place': 'El Paso, TX',
      'from': "08-2019",
      'to': "12-2020",
      'description': "Innovated on engineering education regarding ethics and leadership. Programmed advising software to assist with course recommendation. Optimized the advising process to better falicitate faculty and student",
      'slug': 'persp-swe'
    },
    {
      'title': "Undergraduate Researcher",
      'company': 'Adult Neurology Ketogenic Diet Therapy Clinic | Advisor: Dr. Elizabeth Felton',
      'place': 'Madison, WI',
      'from': "05-2019",
      'to': "08-2019",
      'description': "Data visualization of patient data for clinical and dietary analysis. Managed HIPAA compliance, safety, and ethics for patient research. Shadowed doctor-patient relationship and treatment of epilepsy.",
      'slug': 'persp-swe'
    },
    {
      'title': "Undergraduate Researcher",
      'company': 'Biomedical Optics Lab | Advisor: Dr. Jeremy Rogers',
      'place': 'Madison, WI',
      'from': "05-2018",
      'to': "08-2018",
      'description': "Constructed an interferometer to measure phase delay.Programmed an automated calibration software for optical equipment. Inspected laboratory standards and practices for maintaining lab.",
      'slug': 'persp-swe'
    },
    {
      'title': "Amazon Prime Student Ambassador",
      'company': 'Riddle and Bloom | Amazon',
      'place': 'El Paso, TX',
      'from': "08-2017",
      'to': "10-2018",
      'description': "Increased brand awareness through coordinated events averaging 300+ student interactions. Developed and implemented digital, experiential, and peer-to-peer tactics for student events. Collaborated in positive interpersonal relationships within the school community",
      'slug': 'persp-swe'
    },
    {
      'title': "Undergraduate Teaching Assistant",
      'company': 'Department of Engineering Education and Leadership | Design Nature',
      'place': 'El Paso, TX',
      'from': "01-2018",
      'to': "05-2018",
      'description': "Coordinated the trainings of students to use a fabrication laboratory. Taught procedures on computer-aided design and simulation. Directed the development process to build working prototypes.",
      'slug': 'persp-swe'
    },
    {
      'title': "Project Analyst",
      'company': 'University of Texas at El Paso',
      'place': 'El Paso, TX',
      'from': "08-2018",
      'to': "12-2020",
      'description': "Extract and illustrate retention rates via visualization of historical enrollment data. Assist with in-person, online, and telephone inquiries for academic department operations. Iterative design of the department’s advising process and promotion for 200+ students. Mentorship of student staff for sustainability in future department data management and reporting",
      'slug': 'persp-swe'
    },
    {
      'title': "Sound Engineering Technician",
      'company': 'Beacon Hill Recording Studios',
      'place': 'El Paso, TX',
      'from': "10-2018",
      'to': "08-2019",
      'description': "Provided support in microphone position and placement for recording sound. Verified signal-flow patch bay configurations and outboard gear for editing and mixing. Extensive use of industry-standard DAWs, such as ProTools and Ableton for editing and mixing",
      'slug': 'persp-swe'
    },
    {
      'title': "Financial Project Engineer",
      'company': 'Sonora Bank',
      'place': 'Boerne, TX',
      'from': "05-2017",
      'to': "08-2017",
      'description': "Designed and formatted a personal financial statement for customer use. Practiced daily responsibilities from several departments, ranging from tellers to CFO. Trained in administering effective group meetings and presentations.",
      'slug': 'persp-swe'
    },
  ];

  const [barHeight, setbarHeight] = useState(0);
  const [barStart, setBarStart] = useState(0);

  function changebarHeight(event) {
    setBarStart(event.target.getAttribute('data-barstart') || event.target.parentElement.getAttribute('data-barstart'));

    setbarHeight(event.target.getAttribute('data-barheight') || event.target.parentElement.getAttribute('data-barheight'));
  }

  let first_date = moment();
  jobs.forEach(job => {
    let _to_moment = job.to ? moment(job.to, "MM-YYYY") : moment();
    let _from_moment = moment(job.from, "MM-YYYY");
    let _duration = _to_moment.diff(_from_moment, 'months');
    job['from'] = _from_moment.format("MMM YYYY");
    job['to'] = job.to ? _to_moment.format("MMM YYYY") : "Now";
    job['_from'] = _from_moment;
    job['_to'] = _to_moment;
    job['date'] = _duration === 0 ? job.from : job.from + "-" + job.to;
    job['duration'] = _duration === 0 ? 1 : _duration;

    if (first_date.diff(_from_moment) > 0) {
      first_date = _from_moment;
    }
  })
  let time_span = moment().diff(first_date, "months");
  jobs.forEach(job => {
    job['bar_start'] = 100 * job._from.diff(first_date, "months") / time_span;
    job['bar_height'] = 100 * job.duration / time_span;
  })

  let job_bars = jobs.map(job => [job.bar_height, job.bar_start]);

  return (
    <div className='container' id='work'>
      <div className='container__content'>
        <h1>My career so far</h1>
        <div className='work'>
          <TimelineBar first_year={first_date.format('YYYY')} job_bars={job_bars} bar_height={barHeight} bar_start={barStart} />
          <div className="work__items" >
            {jobs.map((job) => {
              return (
                <div className="work__item" key={job.slug} data-key={job.slug} onMouseEnter={changebarHeight.bind(this)} onTouchStart={changebarHeight.bind(this)}
                  onClick={changebarHeight.bind(this)} data-barstart={job.bar_start} data-barheight={job.bar_height}>
                  <p className="work__item__place"><i className="fa fa-map-marker-alt" aria-hidden="true" />  {job.place}</p>
                  <h2>{job.title}</h2>
                  <h3>{job.company}</h3>
                  <p className="work__item__date">{job.date}</p>
                  <p>{job.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () =>
  <div>
    <div className="vignete-top" />
    <NavBar items={{ About: '#about', Projects: '#projects', Work: '#work' }} />
    <Header />
    <About />
    <Projects />
    <Work />
    <div className="vignete-bottom" />
  </div>

export default App;
