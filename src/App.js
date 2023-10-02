import './sass/main.scss';
import moment from 'moment';
import { useState } from "react";

const CODE = "Code";
const PAPER = "Paper";
const MISC = "Misc";
const tags = [CODE, PAPER, MISC]
const tag_color = {
    Code: '#386FA4',
    Paper: '#DE7254',
    Misc: '#67a286',
}

function BackToTheTop() {
    return <li className = 'back-to-the-top hidden' id='back-to-the-top' ><a href='#header'/></li>
}

function NavBar({ items }) {
    let links = Object.keys(items).reverse().map((key, i) => < li key = { i }
        className = "navbar__item" > < a href = { items[key] } > { key } </a></li > );

    return <ul className = "navbar" > { links } < BackToTheTop /> </ul>
}

function SocialMedia({ keywork, icon, link }) {
    return ( 
        <div className = "network__icon" >
            <a href = { link } target = "_blank" rel = "noreferrer" >
                <i className = { icon } title = { keywork } aria-label={ "Go to " + keywork }/> 
            </a> 
        </div>
    )
}

function Header() {

    let social_media = [{
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
            keywork: 'Launchpad',
            icon: 'fa fa-rocket',
            link: 'https://launchpad.net/~ines-almeida',
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
        {
            keywork: 'CV',
            icon: 'fas fa-file-alt',
            link: './cv',
        },
    ]

    return ( 
        <div className = 'container' id = 'header' >
            <div className = 'container__content' >
                <div className = 'header' >
                    <img src = { process.env.PUBLIC_URL + '/me.jpg' } className = "header__picture" alt = "me" />
                    <div className = "header__text" >
                        <h1 > Inês </h1><h1> Almeida</h1>
                        <br/>
                        <h2 > Software Engineer </h2><h2> | </h2> 
                        <h2> Biomedical Engineer MSc </h2> 
                        <br/>
                        <div className = "network tooltip" > { social_media.map(s => < SocialMedia key = { s.keywork } {...s } />)} 
                            <span className = "tooltiptext" > Email: contact@ines-almeida.com </span>
                        </div > 
                    </div> 
                </div> 
            </div> 
        </div>
    )
}

function About() {
    return ( 
        <div className = 'container' id = 'about'>
            <div className = 'container__content' >
                <div className = 'about-me' >
                    <div className = 'about-me__img' >
                        <img src = "climbing.png" alt = "Climbing" />
                    </div> 
                    <p>Hi! </p> 
                    <p>I'm a full-stack <b>Software Engineer</b> with a Master's in <b> Biomedical Engineering </b>. </p>
                    <p>I like <b> bouldering</b>, <b>programming</b>, <b> cooking</b>, and <b>graphic design</b > among other things. </p> 
                    <p>I've lived in 7 different countries in Europe; I've published two neuroscience papers; I was president of a non-profit organization
                        for 2 years while in university; and I built a commercial VR video game with my partner from scratch - just to name a few adventures I've had in the past few years.</p>
                    <p>Welcome to my personal website! </p>
                </div>
            </div>
        </div>
    )
}

function ProjectCard({ title, content, slug, link, keyword, date }) {

    let _link = link ? <div className = "projects__card__label projects__card__link" > Link </div> : null;

    return ( 
        <a href = { link } target = "_blank" rel = "noreferrer" className = 'projects__card' key = { slug }>
            <div className = "projects__card__keywords" > { _link } 
                <div className = "projects__card__label" style = {{ backgroundColor: tag_color[keyword] }} > 
                    { keyword } 
                </div> 
            </div> 
            <h3> { title } </h3> 
            <p style = {{ fontStyle: "italic", color: "LightSteelBlue" }} > { date } </p> 
            <p> { content } </p> 
        </a>
    )
}

function ProjectCardFilter() {
    let searchButtons = tags.map((tag) => {
        return (
            <div className = "projects__card__label" style={{ backgroundColor: tag_color[tag] }}>
                { tag }
            </div>
        )
    });
    return (
        <div className="project_filters">
            { searchButtons }
        </div>
    );
}

function Projects() {

    let projects = [
        {
            title: "Hugo CV Template",
            slug: 'hugo',
            date: "2020",
            keyword: CODE,
            link: "https://github.com/ineesalmeida/almeida-cv",
            content: "I built an open-source Hugo template for an online PDF printable CV. I built it for myself when I had the need to create a beautiful, easy to edit from anywhere CV; I then shared it because why not! It's not easy to know how many people have used it, but so far, its repo has been started 110 times and forked 61 times.",
        },
        {
            title: "Is neural activity detected by ERP-based brain-computer interfaces task specific?",
            slug: 'paper2016',
            date: "2016",
            keyword: PAPER,
            link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0165556",
            content: "I did a 2-month internship in Berlin at the Neurotechnology group of TU Berlin. This paper contains the results of that 2-month experiment.",
        },
        {
            title: "Using machine learning to reveal the population vector from EEG signals",
            slug: 'paper2020',
            date: "2020",
            keyword: PAPER,
            link: "https://iopscience.iop.org/article/10.1088/1741-2552/ab7490/meta",
            content: "For my Master's thesis, I researched and analysed brain data using non-invasive signals to decode arm movement at the Institute of Neural Engineering in Graz (Austria). This paper was the result. I co-authored it with the PhD student that helped me with everything along the way.",
        },
        {
            title: "Who you talk to",
            slug: 'paper3',
            date: "2019",
            keyword: CODE,
            style: {
                backgroundColor: 'rgba(white, 0.5)',
            },
            content: "I had a question in mind: who are the friends I talk to the most in my Facebook chat? When do we talk the most? What were the words that were most specific to each friend? To answer that (and to have an excuse to learn advanced python data analysis), I created an offline python tool that did all that processing from the information downloaded from the website. The results were quite fun to explore!",
        },
        {
            title: "Beers & Boomerangs - VR Video Game",
            slug: 'vrgame',
            date: "On going",
            keyword: CODE,
            link: "https://beersandboomerangs.com/#play-the-game",
            content: "Me and my partner's latest project: to build a VR video game from scratch! We're using Unity (C#) and blender, and learning a bunch. What started a free time project, grew into a proper game that is now released on 5 platforms!",
        },
        {
            title: "Cell by Cell - Video Game",
            slug: 'flowgame',
            date: "2018",
            keyword: CODE,
            link: "http://facilities.igc.gulbenkian.pt/flowcytometry/cell_by_cell_web/index.html",
            content: "While working at a research lab as a Flow Cytometry technician, I was given the challenge to create something to teach children and their parents about a science instrument - cell sorting. The result was a video game built in Unity (C#) where the player sorts cells by their color. Unfortunately, I didn't have the time to polish it and add a tutorial to users. Before and while playing, we introduced some more scientific concepts.",
        },
        {
            title: "Warm Sweater",
            slug: 'sweater',
            date: "2020",
            keyword: MISC,
            link: null,
            content: "I knitted a large warm sweater for my best-friend and partner. It took 60 hours and 700 meters of wool. It was my first knitting project, and I'm very proud of it :)",
        },
        {
            title: "Personal website",
            slug: 'personal-website',
            date: "2020",
            keyword: CODE,
            link: "https://github.com/ineesalmeida/personal-website",
            content: "Small weekend project that has still a bunch of features to add. I like to take these chances to explore new tools and practice. I used sass, flexbox, CSS animations and React."
        },
        {
            title: "Virtual Library",
            slug: 'flask-lib',
            date: "2019",
            keyword: CODE,
            link: null,
            content: "My mum was getting lost in all her thousands of books, and wanted to go through each and note down where it was. For her birthday, I created a DB with a nice front-end made in Flask and Material where she could, add, edit, query or remove book registries, and import and export them as CSVs to open in Excel.",
        },
        {
            title: "Wood working - Learning Tower",
            slug: 'ww-learntower',
            date: "2022",
            keyword: MISC,
            link: null,
            content: "I decided to try wood working, and for my first project I built a Learning Tower for my niece from scratch with the little tools I had available. It turned out pretty decent, and she loves it!",
        },
        {
            title: "President of a non-profit music organization",
            slug: 'vicentuna',
            date: "2015",
            keyword: MISC,
            link: "https://soundcloud.com/user-749301859",
            content: "For 2 years during my University degree, I was president of a tradicional music group of 40 members that had several actvities throughout the year, including travel around Portugal and playing in music festivals.",
        },
        {
            title: "Beers & Boomerangs website",
            slug: 'web-design-bnb',
            date: "2022",
            keyword: CODE,
            link: "https://beersandboomerangs.com/",
            content: "Fully designed and build a small website to showcase the game we built with pure HTML, CSS and Javascript.",
        },
    ]

    let project_cards = projects.sort((a, b) => (a.date > b.date) ? -1 : 1).map((props) => < ProjectCard key = { props.slug } {...props } />);

    return ( 
        <div className = 'container' id = 'projects' >
            <div className = 'container__content' >
                <h1> Some of my Projects </h1> 
                {/* <ProjectCardFilter /> */}
                <div className = 'projects' >
                    <div className = 'projects__cards_container' > 
                        { project_cards }
                    </div> 
                </div > 
            </div> 
        </div>
    )
}

function TimelineBar({ first_year, job_bars, bar_height, bar_start }) {

    let sub_bars = job_bars.map((bar) => {
        return <div key={ "bar-" + bar[2]} className = "work__timeline__subbar" style = {{ height: bar[0] + "%", bottom: bar[1] + "%" }}/>
    });

    return ( 
        <div className = "work__timeline" >
            <p className = "work__timeline__now" > Now </p> 
            <p className = "work__timeline__start" > { first_year } </p> 
            {sub_bars} 
            <div className = "work__timeline__bar" style = {{ height: bar_height + "%", bottom: bar_start + "%" }} /> 
        </div>
    )
}


function Work() {

    let jobs = [
        {
            'title': 'Software Engineer',
            'company': 'Canonical',
            'place': 'Zurich, CH',
            'from': "03-2023",
            'to': null,
            'description': "I am currently part of a great team of software engineers that build and maintain Launchpad - a web application that allows users to develop and maintain software, particularly open-source software.",
            'slug': 'lp-swe'
        },
        {
            'title': 'VR Developer & Co-founder',
            'company': 'Witty Platypus',
            'place': 'Lisbon, PT/SE',
            'from': "01-2021",
            'to': null,
            'description': "I was the lead developer of a VR game called 'Beers and Boomerangs' which was released in November 2022. The game was developed in C# (Unity) and featured a lot of physics based systems.",
            'slug': 'bnb-gdev'
        },
        {
            'title': 'Software Engineer',
            'company': 'Perspectum',
            'place': 'Oxford, UK',
            'from': "01-2020",
            'to': "03-2022",
            'description': "I worked as a full-stack developer of a Django web portal with multiple integrated services. I also managed our team of 3, communication with stakeholders, and created individual python packages and tools to be used by other teams.",
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
            'title': "Master's Thesis Research Intern",
            'company': 'Institute of Neural Engineering',
            'place': 'Graz, AT',
            'from': "09-2016",
            'to': "06-2017",
            'description': "Designed and developed an experimental paradigm, and acquired and analysed data from brain signals while people moved their arm in a controlled environment. The results were then published in my Master's thesis and later worked into a paper released in 2020.",
            'slug': 'master-intern'
        },
        {
            'title': "Bachelor's Thesis Research Intern",
            'company': 'Institute of Neural Engineering',
            'place': 'Berlin, DE',
            'from': "06-2015",
            'to': "09-2015",
            'description': "At the end of my Bachelor's degree, I did this small neuroscience internship. I designed and conducted an experiment (with a lot of help from a PhD student). In the end, I wrote my Bachelor's thesis and a paper with the contents",
            'slug': 'bachelor-intern'
        },
        {
            'title': "Biomedical Engineering Master Student",
            'company': 'Faculty of Sciences, University of Lisbon',
            'place': 'Lisbon, PT',
            'from': "09-2015",
            'to': "11-2017",
            'description': "I did a Master's in Biomedical Engineering and Biophysics, with a focus on data and image processing.",
            'slug': 'master-student'
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

    let job_bars = jobs.map(job => [job.bar_height, job.bar_start, job.slug]);

    return ( 
        <div className = 'container' id = 'work'>
            <div className = 'container__content'>
                <h1> My career so far </h1> 
                <div className = 'work'>
                    <TimelineBar first_year = { first_date.format('YYYY') } job_bars = { job_bars } bar_height = { barHeight } bar_start = { barStart }/> 
                    <div className = "work__items" > {
                        jobs.map((job) => {
                            return ( 
                                <div className = "work__item" key = { job.slug } data-key = { job.slug }
                                    onMouseEnter = { changebarHeight.bind(this) }
                                    onTouchStart = { changebarHeight.bind(this) }
                                    onClick = { changebarHeight.bind(this) }
                                    data-barstart = { job.bar_start }
                                    data-barheight = { job.bar_height } >
                                    <p className = "work__item__place"> 
                                        <i className = "fa fa-map-marker-alt" aria-hidden = "true" /> { job.place } 
                                    </p> 
                                    <h2> { job.title } </h2>
                                    <h3> { job.company } </h3>
                                    <p className = "work__item__date" > { job.date } </p> 
                                    <p> { job.description } </p> 
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )
}

const App = () => (
    <div>
        <div className = "vignete-top" />
        <NavBar items = {{ About: '#about', Projects: '#projects', Work: '#work' }}/> 
        <Header />
        <About />
        <Projects />
        <Work />
        <div className = "vignete-bottom" />
    </div>
)

export default App;