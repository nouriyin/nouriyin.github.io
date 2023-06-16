import self from "../img/self.png"
import codingquiz from "../img/codingquiz.png"
import code from "../img/code.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Courtney",
    lastName: "Clarke",
    initials: "cc",
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in North Carolina'
        },
        {
            emoji: "💼",
            text: "Currently looking for work"
        },
        {
            emoji: "📧",
            text: "courtneyy.noreen@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/nouriyin",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/courtney-noreen-clarke",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
    ],
    bio: "Hello! I'm Courtney. I just graduated from Georgia Tech's Full Stack Developer Bootcamp. I enjoy coding, reading novels at the beach, I believe that aliens exist and I also love sci-fi! Some of my favorites inculde: Alien, Battlestar Galactica, Star Wars, and even though it's not technically sci-fi, but fantasy, Lord of The Rings,",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5'],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'scifi movies/shows',
            emoji: '🎥'
        },
        {
            label: 'photography',
            emoji: '📷'
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://nouriyin.github.io/web-APIs-challenge-code-quiz/",
            source: "https://github.com/nouriyin/web-APIs-challenge-code-quiz",
            image: codingquiz
        },
        {
            title: "Project 2",
            live: "https://nouriyin.github.io/Mod-6-Weather-Dashboard/",
            source: "https://github.com/nouriyin/Mod-6-Weather-Dashboard",
            image: code
        },
    ]
}