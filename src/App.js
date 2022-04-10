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
      icon: 'fas fa-graduation-cap', 
      link: 'https://orcid.org/0000-0001-6786-9243',
    },
    {
      keywork: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/guitarbeat/',
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
            <h1>Aaron</h1><h1> Woods</h1>
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
          <p>
            I like <b>data analysis</b>, <b>problem solving</b>, <b>research</b>, and <b>music making</b> among other things.
          </p>
          <p>
            I'm also a graduate researcher at <b>The University of Texas at Austin</b> with a Bachelor's in <b>Engingeering Leadership</b>.
          </p>
          <p>
          I will add more information about myself in the future.
          </p>
          <p>
            I like turtles.
          </p>
          <p>
            Welcome to my personal website.
          </p>
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
      content: "Small weekend project that has still a bunch of features to add. I like to take these chances to explore new tools and practice. I used sass, flexbox, CSS animations and React."
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
      'title': 'Software Engineer',
      'company': 'Perspectum',
      'place': 'Oxford, UK',
      'from': "01-2020",
      'to': null,
      'description': "I work mainly as a full-stack developer of a Django web portal with multiple integrated services. I also do some team management, communication with stakeholders, and create individual python packages and tools to be used by other teams.",
      'slug': 'persp-swe'
    },
    {
      'title': 'Test Engineer',
      'company': 'Perspectum',
      'place': 'Oxford, UK',
      'from': "03-2019",
      'to': "01-2020",
      'description': 'Wrote BDD automated tests for a Django web portal using web scrapping tools. Created a few load tests that run hundreads of scenarios in parallel to test the portal robustness.',
      'slug': 'persp-sqa'
    },
    {
      'title': 'Flow Cytometry Technician',
      'company': 'Instituto Gulbenkian de Ciência',
      'place': 'Oeiras, PT',
      'from': "01-2018",
      'to': "03-2019",
      'description': "Worked in maintaining a lab unit and teaching users how to use our tools. While in working there, I ended up re-working some of the institute's facilities websites, automatizing report creation in Python, and creating a video game to teach kids what we do in the lab. I ended up moving to a more software-oriented occupation after that since the software-related tasks were the most fun.",
      'slug': 'igc-flow'
    },
    {
      'title': "Master's in Biomedical Engineering",
      'company': 'Faculdade de Ciências da Universidade de Lisboa',
      'place': 'Lisbon, PT',
      'from': "09-2015",
      'to': "11-2017",
      'description': "",
      'slug': 'masters'
    },
    {
      'title': "Master's Thesis Research Intern",
      'company': 'Institute of Neural Engineering',
      'place': 'Graz, AT',
      'from': "09-2016",
      'to': "06-2017",
      'description': "Designed and developed an experimental paradigm, and acquired and analysed data from brain signals while people moved their arm in a controlled environment. The results were then published in my Master's thesis and later worked into a paper released in 2020.",
      'slug': 'master-intern'
    },
    {
      'title': 'Research Intern',
      'company': 'Institute of Neural Engineering',
      'place': 'Berlin, DE',
      'from': "06-2015",
      'to': "09-2015",
      'description': "At the end of my Bachelor's degree, I did this small neuroscience internship. I designed and conducted an experiment (with a lot of help from a PhD student). In the end, I wrote my Bachelor's thesis and a paper with the contents",
      'slug': 'bachelor-intern'
    }
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
