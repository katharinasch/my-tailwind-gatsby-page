import React from 'react';


import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { AnnotationIcon, AcademicCapIcon, LightningBoltIcon, CodeIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'The Full Stack Beginning',
    description:
      'What a beginning a year ago: after 3 months of Le Wagon Full Stack Bootcamp I almost immediately got my first job offer. It has been hard and it has been fun, frustraiting and rewarding. Endless Model-View-Controller cycle, SQL along with Bulma and Figma - what a mix! Even Coffee-Script! Not enough for me: by the end of 2020 bored due corona I started learning React and implementing it in the Quis Web App.',
    icon: LightningBoltIcon,
    tags: ['Ruby on Rails', 'Bulma', 'PostgreSQL', 'JS', 'ReactJS', 'Figma'],
    link: "https://quis.de/",
    linkname: ' ━━━━━━ QUIS.de'
  },
  {
    name: 'Education 3.0',
    description:
      'As teacher and mentor at MOINWORLD, Hackerstolz and a former team member of 42Heilbronn and 42Wofsburg, I can tell, I am totally into education. That is why when I discovered that edusiia was looking for a tech support for their WordPress page, I could not hold myself back. Part time job, along with teaching and a full time job? Why not!?',
    icon: AcademicCapIcon,
    tags: ['WordPress', 'CSS', 'JS' ],
    link: "https://edusiia.com/",
    linkname: ' ━━━━━━ edusiia'

  },
  {
    name: 'Sharing is caring',
    description:
      'Since I found my inspiration to become a coder listening and talking to women like me, very often career changers, since the day one after bootcamp I started to spread the word too. Not only by sharing my (back then very little) tech knowledge, but also by challenging modern education system and the gender roles in tech.',
    icon: AnnotationIcon,
    tags: ['HTML', 'CSS'],
    link: "https://quis.de/",
    linkname: ' ━━━━━━ MOINWORLD e.V.'
  },
  {
    name: 'React passion is born',
    description:
      'After almost a year of Rails, Javascript, Bulma, Wordpress, Figma, a bit of PHP, teaching, learning - I found my passion - React. Main thing about it, that it is so challenging for me (still), I just cannot put my hands of it. I want defeat and master it. Best way? Sure, on a job! Learning in a real life enviroment and exchanging with other developers. That is how I ended up by plancraft, redesigning and re-coding their blog page(which has not been deployed yet).',
    icon: CodeIcon,
    tags: ['Typescript', 'Styled Components', 'ReactJS'],
    link: "https://plancraft.de/",
    linkname: '━━━━━━ Plancraft'
  },
]


function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
		<Navbar />
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Crazy story of a wanna-be-hacker</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    A year like never before
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                One year full of night coding sessions, ask-stackoverflow-google-friend-or-a-stranger approach,
                fall, fall harder and still fall, dance, scream and jump cause it worked after days - YEAS I am a coder!
                </p>
                </div>

                <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative">
                        <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </dt>
                        <dd className="mt-2 ml-16 min-h-44 text-base text-gray-500">{feature.description}</dd>
                        <div className="mt-2 ml-16 flex flex-row flex-wrap">
                          {feature.tags.map((tag) => (
                            <span className="text-sm font-medium bg-gray-200 py-1 px-2 rounded text-gray-600 align-middle mr-2 mt-2 ">{tag}</span>
                          ))}
                        </div>
                        <div className="text-right mt-10">
                            <a href={feature.link}  target="_blank" style={{color: "#6466F1"}} >
                                {feature.linkname}
                            </a>
                        </div>
                        
                    </div>
                    ))}
                </dl>
                </div>
            </div>
            </div>
    	<Footer />
    </div>
  );
}
export default About;