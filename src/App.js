import './sass/main.scss';

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
      <a href={link} target="_blank" rel="noopener me">
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
      link: 'mailto:contact@ines-almeida.com',
    },
    {
      keywork: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/ines-de-almeida/',
    },
    {
      keywork: 'Github',
      icon: 'fab fa-github',
      link: 'https://github.com/ineesalmeida',
    },
    {
      keywork: 'Google Scholar',
      icon: 'fas fa-graduation-cap',
      link: 'https://scholar.google.com/citations?user=MDKePnkAAAAJ&hl=en',
    },
    {
      keywork: 'Instagram',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/inees_almeida/',
    },
  ]

  return (
    <div className='container' id='header'>
      <div className='container__content'>
        <div className='header'>
          <h1>Inês</h1><h1> Almeida</h1>
          <br />
          <h2>Software Engineer</h2><h2> | </h2><h2>Biomedical Engineer MSc</h2>
          <div className="social tooltip">
            {social_media.map(s => <SocialMedia key={s.keywork} {...s} />)}
            <span class="tooltiptext">Email: contact@ines-almeida.com</span>
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
            <img src="climbing.png" alt="Climbing" />
          </div>
          <p>
            Hi,
          </p>
          <p>
            Welcome!
            I am Inês: I like <b>bouldering</b>, <b>programming</b>, <b>cooking</b>, <b>kitesurfing</b> and doing all sorts of small artsy things.
          </p>
          <p>
            I'm also a <b>Software Engineer</b> with a Master's in <b>Biomedical Engineering</b>. I get quite excited about building pretty front-ends with <b>Sass</b>, <b>Javascript</b> and <b>React</b>, but I also do back-end programming (mostly <b>Django</b>).
          </p>
          <p>
            I've lived in 6 different countries in Europe; I've published two neuroscience papers; I was president of a non-profit organisation for 2 years while in uni; you can hear my voice in 3 music albums; I built a video game to teach kids about science; and I've dived in the baltic ocean in the winter.
          </p>
          <p>
            My most recent project is building a <b>VR video-game in Unity (C#)</b> with my <a target="_blank" href="https://www.diogo-cunha.com/">best-friend and partner</a> in my free time, which has been a lot of fun!
          </p>
          <p>
            Either way, welcome to my personal website.
          </p>
        </div>
      </div>
    </div >
  )
}

function ProjectCard({ title, content, slug, link, keyword, date }) {

  let _link = link ? <div className="projects__card__label projects__card__link">Link</div> : null;

  return (
    <a href={link} target="_blank" className='projects__card' key={slug} >
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
      title: "Hugo CV Template",
      slug: 'hugo',
      date: "2020",
      keyword: "Code",
      link: "https://github.com/ineesalmeida/almeida-cv",
      content: "I built an open-source Hugo template for an online PDF printable CV. Well, I built it for myself when I had the need to create a beautiful, easy to edit from anywhere CV for myself; I then shared it because why not! It's not easy to know how many people have used it, but so far, its repo has been started 30 times and forked 16.",
    },
    {
      title: "Is neural activity detected by ERP-based brain-computer interfaces task specific?",
      slug: 'paper2016',
      date: "2016",
      keyword: "Paper",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0165556",
      content: "I did a 2-month internship in Berlin at the Neurotechnology group of TU Berlin. This paper contains the results of that 2-month experiment.",

    },
    {
      title: "Using machine learning to reveal the population vector from EEG signals",
      slug: 'paper2020',
      date: "2020",
      keyword: "Paper",
      link: "https://iopscience.iop.org/article/10.1088/1741-2552/ab7490/meta",
      content: "For my Master's thesis, I researched using non-invasive brain signals to decode arm movement at the Institute of Neural Engineering in Graz (Austria). This paper was the result. I co-authored it with the PhD student that helped me with everything along the way.",
    },
    {
      title: "Who you talk to",
      slug: 'paper3',
      date: "2019",
      keyword: "Code",
      style: {
        backgroundColor: 'rgba(white, 0.5)',
      },
      content: "I had a question in mind: who are the friends I talk to the most in my Facebook chat? When do we talk the most? What were the words that were most specific to each friend? To answer that, I created an offline python tool that did all that processing from the information downloaded from the website. The results were quite fun to explore!",
    },
    {
      title: "Aussie BBQ Survival",
      slug: 'vrgame',
      date: "On going",
      keyword: "Code",
      link: null,
      content: "Me and my partner's latest project: to build a VR video game from scratch! We're using Unity (C#) and blender, and learning a bunch. We've been building it in our free time for a while now. We plan to release it by the end of 2021.",
    },
    {
      title: "Cell by Cell",
      slug: 'flowgame',
      date: "2018",
      keyword: "Code",
      link: "http://facilities.igc.gulbenkian.pt/flowcytometry/cell_by_cell_web/index.html",
      content: "While working at a research lab as a Flow Cytometry technician, I was given the challenge to create something to teach children and their parents about a science instrument - cell sorting. The result was a video game built in Unity where the player was sorting cells by their color. Unfortunately, I didn't have the time to polish it and add a tutorial to users. Before and while playing, we introduced some more scientific concepts.",
    },
    {
      title: "Warm Sweater",
      slug: 'sweater',
      date: "2020",
      keyword: "Misc",
      link: null,
      content: "I knitted a large warm sweater for my best-friend and partner. It took 55 hours and 700 meters of wool. I'm very proud of it :)",
    },
    {
      title: "Personal website",
      slug: 'personal-website',
      date: "2021",
      keyword: "Code",
      link: null,
      content: "Small weekend project. I like to take these chances to explore new tools and practice. I used sass, flexbox, CSS animations and React (not that it needed it, but it's more fun to use it!)",
    },
  ]

  let project_cards = projects.sort((a, b) => (a.date > b.date) ? -1 : 1).map((props) => <ProjectCard key={props.slug} {...props} />);

  return (
    <div className='container' id='projects'>
      <div className='container__content'>
        <h1>My Projects</h1>
        <div className='projects'>
          <div className='projects__cards_container'>
            {project_cards}
          </div>
        </div>
      </div>
    </div>
  )
}


function Work() {
  return (
    <div className='container' id='work'>
      <div className='container__content'>
        <h1>My career so far</h1>
        <div className='work'>
          <p>Under construction :)</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <div className="vignete-top" />
      <NavBar items={{ About: '#about', Projects: '#projects', Work: '#work' }} />
      <Header />
      <About />
      <Projects />
      <Work />
      <div className="vignete-bottom" />
    </div>
  );
}

export default App;
