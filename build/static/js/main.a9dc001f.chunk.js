(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(6),r=a.n(i),s=a(4),o=a(5),c=(a(11),a(2)),l=a.n(c),d=a(0),h="Code",m="Paper",b="Misc",u={Code:"#386FA4",Paper:"#DE7254",Misc:"#67a286"};function p(){return Object(d.jsx)("li",{className:"back-to-the-top hidden",id:"back-to-the-top",children:Object(d.jsx)("a",{href:"#header"})})}function j(e){var t=e.items,a=Object.keys(t).reverse().map((function(e,a){return Object(d.jsxs)("li",{className:"navbar__item",children:[" ",Object(d.jsxs)("a",{href:t[e],children:[" ",e," "]})]},a)}));return Object(d.jsxs)("ul",{className:"navbar",children:[" ",a," ",Object(d.jsx)(p,{})," "]})}function g(e){var t=e.keywork,a=e.icon,n=e.link;return Object(d.jsx)("div",{className:"network__icon",children:Object(d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:a,title:t,"aria-label":"Go to "+t})})})}function f(){return Object(d.jsx)("div",{className:"container",id:"header",children:Object(d.jsx)("div",{className:"container__content",children:Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("img",{src:"./me.jpg",className:"header__picture",alt:"me"}),Object(d.jsxs)("div",{className:"header__text",children:[Object(d.jsx)("h1",{children:" In\xeas "}),Object(d.jsx)("h1",{children:" Almeida"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:" Software Engineer "}),Object(d.jsx)("h2",{children:" | "}),Object(d.jsx)("h2",{children:" Biomedical Engineer MSc "}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"network tooltip",children:[" ",[{keywork:"Email",icon:"fas fa-envelope-square",link:"mailto:contact@ines-almeida.com"},{keywork:"LinkedIn",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/ines-de-almeida/"},{keywork:"Github",icon:"fab fa-github",link:"https://github.com/ineesalmeida"},{keywork:"Launchpad",icon:"fa fa-rocket",link:"https://launchpad.net/~ines-almeida"},{keywork:"Google Scholar",icon:"fas fa-graduation-cap",link:"https://scholar.google.com/citations?user=MDKePnkAAAAJ&hl=en"},{keywork:"Instagram",icon:"fab fa-instagram",link:"https://www.instagram.com/inees_almeida/"},{keywork:"CV",icon:"fas fa-file-alt",link:"./cv"}].map((function(e){return Object(d.jsx)(g,Object(o.a)({},e),e.keywork)})),Object(d.jsx)("span",{className:"tooltiptext",children:" Email: contact@ines-almeida.com "})]})]})]})})})}function w(){return Object(d.jsx)("div",{className:"container",id:"about",children:Object(d.jsx)("div",{className:"container__content",children:Object(d.jsxs)("div",{className:"about-me",children:[Object(d.jsx)("div",{className:"about-me__img",children:Object(d.jsx)("img",{src:"climbing.png",alt:"Climbing"})}),Object(d.jsx)("p",{children:"Hi! "}),Object(d.jsxs)("p",{children:["I'm a full-stack ",Object(d.jsx)("b",{children:"Software Engineer"})," with a Master's in ",Object(d.jsx)("b",{children:" Biomedical Engineering "}),". "]}),Object(d.jsxs)("p",{children:["I like ",Object(d.jsx)("b",{children:" bouldering"}),", ",Object(d.jsx)("b",{children:"programming"}),", ",Object(d.jsx)("b",{children:" cooking"}),", and ",Object(d.jsx)("b",{children:"graphic design"})," among other things. "]}),Object(d.jsx)("p",{children:"I've lived in 7 different countries in Europe; I've published two neuroscience papers; I was president of a non-profit organization for 2 years while in university; and I built a commercial VR video game with my partner from scratch - just to name a few adventures I've had in the past few years."}),Object(d.jsx)("p",{children:"Welcome to my personal website! "})]})})})}function k(e){var t=e.title,a=e.content,n=e.slug,i=e.link,r=e.keyword,s=e.date,o=i?Object(d.jsx)("div",{className:"projects__card__label projects__card__link",children:" Link "}):null;return Object(d.jsxs)("a",{href:i,target:"_blank",rel:"noreferrer",className:"projects__card",children:[Object(d.jsxs)("div",{className:"projects__card__keywords",children:[" ",o,Object(d.jsx)("div",{className:"projects__card__label",style:{backgroundColor:u[r]},children:r})]}),Object(d.jsxs)("h3",{children:[" ",t," "]}),Object(d.jsxs)("p",{style:{fontStyle:"italic",color:"LightSteelBlue"},children:[" ",s," "]}),Object(d.jsxs)("p",{children:[" ",a," "]})]},n)}function y(){var e=[{title:"Hugo CV Template",slug:"hugo",date:"2020",keyword:h,link:"https://github.com/ineesalmeida/almeida-cv",content:"I built an open-source Hugo template for an online PDF printable CV. I built it for myself when I had the need to create a beautiful, easy to edit from anywhere CV; I then shared it because why not! It's not easy to know how many people have used it, but so far, its repo has been started 110 times and forked 61 times."},{title:"Is neural activity detected by ERP-based brain-computer interfaces task specific?",slug:"paper2016",date:"2016",keyword:m,link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0165556",content:"I did a 2-month internship in Berlin at the Neurotechnology group of TU Berlin. This paper contains the results of that 2-month experiment."},{title:"Using machine learning to reveal the population vector from EEG signals",slug:"paper2020",date:"2020",keyword:m,link:"https://iopscience.iop.org/article/10.1088/1741-2552/ab7490/meta",content:"For my Master's thesis, I researched and analysed brain data using non-invasive signals to decode arm movement at the Institute of Neural Engineering in Graz (Austria). This paper was the result. I co-authored it with the PhD student that helped me with everything along the way."},{title:"Who you talk to",slug:"paper3",date:"2019",keyword:h,style:{backgroundColor:"rgba(white, 0.5)"},content:"I had a question in mind: who are the friends I talk to the most in my Facebook chat? When do we talk the most? What were the words that were most specific to each friend? To answer that (and to have an excuse to learn advanced python data analysis), I created an offline python tool that did all that processing from the information downloaded from the website. The results were quite fun to explore!"},{title:"THREE.js - Sandbox",slug:"three-js",date:"2024",keyword:h,link:"/three_sandbox",content:"Played around with new 3D interactions with THREE.js."},{title:"Beers & Boomerangs - VR Video Game",slug:"vrgame",date:"On going",keyword:h,link:"https://beersandboomerangs.com/#play-the-game",content:"Me and my partner's latest project: to build a VR video game from scratch! We're using Unity (C#) and blender, and learning a bunch. What started a free time project, grew into a proper game that is now released on 5 platforms!"},{title:"Cell by Cell - Video Game",slug:"flowgame",date:"2018",keyword:h,link:"http://facilities.igc.gulbenkian.pt/flowcytometry/cell_by_cell_web/index.html",content:"While working at a research lab as a Flow Cytometry technician, I was given the challenge to create something to teach children and their parents about a science instrument - cell sorting. The result was a video game built in Unity (C#) where the player sorts cells by their color. Unfortunately, I didn't have the time to polish it and add a tutorial to users. Before and while playing, we introduced some more scientific concepts."},{title:"Warm Sweater",slug:"sweater",date:"2020",keyword:b,link:null,content:"I knitted a large warm sweater for my best-friend and partner. It took 60 hours and 700 meters of wool. It was my first knitting project, and I'm very proud of it :)"},{title:"Personal website",slug:"personal-website",date:"2020",keyword:h,link:"https://github.com/ineesalmeida/personal-website",content:"Small weekend project that has still a bunch of features to add. I like to take these chances to explore new tools and practice. I used sass, flexbox, CSS animations and React."},{title:"Wood working - Learning Tower",slug:"ww-learntower",date:"2022",keyword:b,link:null,content:"I decided to try wood working, and for my first project I built a Learning Tower for my niece from scratch with the little tools I had available. It turned out pretty decent, and she loves it!"},{title:"President of a non-profit music organization",slug:"vicentuna",date:"2015",keyword:b,link:"https://soundcloud.com/user-749301859",content:"For 2 years during my University degree, I was president of a tradicional music group of 40 members that had several actvities throughout the year, including travel around Portugal and playing in music festivals."},{title:"Beers & Boomerangs website",slug:"web-design-bnb",date:"2022",keyword:h,link:"https://beersandboomerangs.com/",content:"Fully designed and build a small website to showcase the game we built with pure HTML, CSS and Javascript."}].sort((function(e,t){return e.date>t.date?-1:1})).map((function(e){return Object(d.jsx)(k,Object(o.a)({},e),e.slug)}));return Object(d.jsx)("div",{className:"container",id:"projects",children:Object(d.jsxs)("div",{className:"container__content",children:[Object(d.jsx)("h1",{children:" Some of my Projects "}),Object(d.jsx)("div",{className:"projects",children:Object(d.jsx)("div",{className:"projects__cards_container",children:e})})]})})}function x(e){var t=e.first_year,a=e.job_bars,n=e.bar_height,i=e.bar_start,r=a.map((function(e){return Object(d.jsx)("div",{className:"work__timeline__subbar",style:{height:e[0]+"%",bottom:e[1]+"%"}},"bar-"+e[2])}));return Object(d.jsxs)("div",{className:"work__timeline",children:[Object(d.jsx)("p",{className:"work__timeline__now",children:" Now "}),Object(d.jsxs)("p",{className:"work__timeline__start",children:[" ",t," "]}),r,Object(d.jsx)("div",{className:"work__timeline__bar",style:{height:n+"%",bottom:i+"%"}})]})}function v(){var e=this,t=[{title:"Software Engineer",company:"Canonical",place:"Zurich, CH",from:"03-2023",to:null,description:"I am currently part of a great team of software engineers that build and maintain Launchpad - a web application that allows users to develop and maintain software, particularly open-source software.",slug:"lp-swe"},{title:"VR Developer & Co-founder",company:"Witty Platypus",place:"Lisbon, PT/SE",from:"01-2021",to:null,description:"I was the lead developer of a VR game called 'Beers and Boomerangs' which was released in November 2022. The game was developed in C# (Unity) and featured a lot of physics based systems.",slug:"bnb-gdev"},{title:"Software Engineer",company:"Perspectum",place:"Oxford, UK",from:"01-2020",to:"03-2022",description:"I worked as a full-stack developer of a Django web portal with multiple integrated services. I also managed our team of 3, communication with stakeholders, and created individual python packages and tools to be used by other teams.",slug:"persp-swe"},{title:"Test Engineer",company:"Perspectum",place:"Oxford, UK",from:"03-2019",to:"01-2020",description:"Wrote BDD automated tests for a Django web portal using web scrapping tools. Created a few load tests that run hundreads of scenarios in parallel to test the portal robustness.",slug:"persp-sqa"},{title:"Flow Cytometry Technician",company:"Instituto Gulbenkian de Ci\xeancia",place:"Oeiras, PT",from:"01-2018",to:"03-2019",description:"Worked in maintaining a lab unit and teaching users how to use our tools. While in working there, I ended up re-working some of the institute's facilities websites, automatizing report creation in Python, and creating a video game to teach kids what we do in the lab. I ended up moving to a more software-oriented occupation after that since the software-related tasks were the most fun.",slug:"igc-flow"},{title:"Master's Thesis Research Intern",company:"Institute of Neural Engineering",place:"Graz, AT",from:"09-2016",to:"06-2017",description:"Designed and developed an experimental paradigm, and acquired and analysed data from brain signals while people moved their arm in a controlled environment. The results were then published in my Master's thesis and later worked into a paper released in 2020.",slug:"master-intern"},{title:"Biomedical Engineering Master Student",company:"Faculty of Sciences, University of Lisbon",place:"Lisbon, PT",from:"09-2015",to:"11-2017",description:"I did a Master's in Biomedical Engineering and Biophysics, with a focus on data and image processing.",slug:"master-student"},{title:"Bachelor's Thesis Research Intern",company:"Institute of Neural Engineering",place:"Berlin, DE",from:"06-2015",to:"09-2015",description:"At the end of my Bachelor's degree, I did this small neuroscience internship. I designed and conducted an experiment (with a lot of help from a PhD student). In the end, I wrote my Bachelor's thesis and a paper with the contents",slug:"bachelor-intern"}],a=Object(n.useState)(0),i=Object(s.a)(a,2),r=i[0],o=i[1],c=Object(n.useState)(0),h=Object(s.a)(c,2),m=h[0],b=h[1];function u(e){b(e.target.getAttribute("data-barstart")||e.target.parentElement.getAttribute("data-barstart")),o(e.target.getAttribute("data-barheight")||e.target.parentElement.getAttribute("data-barheight"))}var p=l()();t.forEach((function(e){var t=e.to?l()(e.to,"MM-YYYY"):l()(),a=l()(e.from,"MM-YYYY"),n=t.diff(a,"months");e.from=a.format("MMM YYYY"),e.to=e.to?t.format("MMM YYYY"):"Now",e._from=a,e._to=t,e.date=0===n?e.from:e.from+"-"+e.to,e.duration=0===n?1:n,p.diff(a)>0&&(p=a)}));var j=l()().diff(p,"months");t.forEach((function(e){e.bar_start=100*e._from.diff(p,"months")/j,e.bar_height=100*e.duration/j}));var g=t.map((function(e){return[e.bar_height,e.bar_start,e.slug]}));return Object(d.jsx)("div",{className:"container",id:"work",children:Object(d.jsxs)("div",{className:"container__content",children:[Object(d.jsx)("h1",{children:" My career so far "}),Object(d.jsxs)("div",{className:"work",children:[Object(d.jsx)(x,{first_year:p.format("YYYY"),job_bars:g,bar_height:r,bar_start:m}),Object(d.jsxs)("div",{className:"work__items",children:[" ",t.map((function(t){return Object(d.jsxs)("div",{className:"work__item","data-key":t.slug,onMouseEnter:u.bind(e),onTouchStart:u.bind(e),onClick:u.bind(e),"data-barstart":t.bar_start,"data-barheight":t.bar_height,children:[Object(d.jsxs)("p",{className:"work__item__place",children:[Object(d.jsx)("i",{className:"fa fa-map-marker-alt","aria-hidden":"true"})," ",t.place]}),Object(d.jsxs)("h2",{children:[" ",t.title," "]}),Object(d.jsxs)("h3",{children:[" ",t.company," "]}),Object(d.jsxs)("p",{className:"work__item__date",children:[" ",t.date," "]}),Object(d.jsxs)("p",{children:[" ",t.description," "]})]},t.slug)}))]})]})]})})}var _=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"vignete-top"}),Object(d.jsx)(j,{items:{About:"#about",Projects:"#projects",Work:"#work"}}),Object(d.jsx)(f,{}),Object(d.jsx)(w,{}),Object(d.jsx)(y,{}),Object(d.jsx)(v,{}),Object(d.jsx)("div",{className:"vignete-bottom"})]})};r.a.render(Object(d.jsx)(n.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a9dc001f.chunk.js.map