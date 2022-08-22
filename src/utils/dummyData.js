import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import USA from "../assets/Flags/USA.png";
import Ellipse from "../assets/Ellipse.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import City1 from "../assets/City1.png";
import City2 from "../assets/City2.png";

const HeroData = [
    {
        minimg: Ellipse2,
        title: "Entrepreneurship",
        description: "We will focus on the development of present and future executives, entrepreneurs and leaders throug business development projects, training and educational programs.",
        bigimage: Ellipse,
        minSlideImg: "Ellipse2",
        toparticle: "Top article:",
        article: " Transhumancë of Albania to UNESCO"
    },
    {
        minimg: Ellipse2,
        title: "Entrepreneurship",
        description: "We will focus on the development of present and future executives, entrepreneurs and leaders throug business development projects, training and educational programs.",
        bigimage: Ellipse,
        slideimg: "Ellipse",
        toparticle: "Top article:",
        article: " Transhumancë of Albania to UNESCO"
    },
    {
        minimg: Ellipse2,
        title: "Entrepreneurship",
        description: "We will focus on the development of present and future executives, entrepreneurs and leaders throug business development projects, training and educational programs.",
        bigimage: Ellipse,
        slideimg: "Ellipse",
        toparticle: "Top article:",
        article: " Transhumancë of Albania to UNESCO"
    }
];


const IconData = [
    {
        icon: <AiOutlineSearch />,
        class: "hidden md:flex pl-16 text-xl text-[#272A5F]",

    },
    {
        icon: <AiOutlineUser />,
        class: "pl-16 text-xl text-[#272A5F]",

    },
    {
        icon: <HiMenuAlt4 />,
        class: "flex md:hidden pl-16 text-xl px-4 text-[#272A5F]",

    },
    {
        icon: <img src={USA} alt="eng" />,
        class: "hidden md:flex pl-16 text-xl px-4 text-[#272A5F] h-4",

    },

]
const StatisticData = [
    {
        number: "62",
        descripton: " Projects in total",
    },
    {
        number: "35",
        descripton: "Projects ongoing",
    },
    {
        number: "950",
        descripton: "businesses have been assisted",
    },
    {
        number: "$80M",
        descripton: "increase in property value in BID/TID Areas",
    }
];

const SlideData = [
    { image: City2 },
    { image: City2 },
    { image: City1 },
    { image: City2 },
    { image: City2 },
    { image: City2 },
    { image: City2 }];

const Programs = [
    {
        title: "Leadership Development",
        description: "Providing talented young professionals, the opportunity to study, work with and influence decision makers and public policy and the highest level"
    },
    {
        title: `Education and Sustainable Development`,
        description: "Introducing new models and curricula, while improving trust and transparency in the education system"
    },
    {
        title: "Entrepreneurship",
        description: "Eight of Albania most important historic centers have been transformed and revitalized following the Business Improvement District model"
    },
    {
        title: "Support for Cultural and Eco-Tourism",
        description: "Transforming Albania’s main cultural heritage sites into financially self-sustainable institutions to serve as engines of local development and growth"
    }
]

export { StatisticData, IconData, HeroData, SlideData, Programs };
