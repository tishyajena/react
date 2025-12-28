
// import {ArrowRight} from 'lucide-react';

import Card from "./components/Card"

const App = () => {
  const jobRoles = [
  {
    jobTitle: "Web Design",
    description: "Designs clean, user-friendly websites.",
    tags: ["Landing Page", "Website", "One Page"],
    bgColor: "#D6E8FF",     // stronger pastel blue
    tagBgColor: "#AFCBFF"
  },
  {
    jobTitle: "Graphic Design",
    description: "Creates impactful visual designs.",
    tags: ["Branding", "Posters", "Social Media"],
    bgColor: "#FFE2CC",     // warm pastel peach
    tagBgColor: "#FFBFA3"
  },
  {
    jobTitle: "Developer",
    description: "Builds fast and scalable applications.",
    tags: ["Frontend", "Backend", "API"],
    bgColor: "#D8F3DC",     // fresh pastel green
    tagBgColor: "#A9E5BB"
  },
  {
    jobTitle: "Copywriting",
    description: "Writes persuasive and engaging content.",
    tags: ["SEO", "Ad Copy", "Blogs"],
    bgColor: "#E6D9FF",     // soft purple
    tagBgColor: "#C6B7FF"
  },
  {
    jobTitle: "UI/UX Design",
    description: "Designs intuitive user experiences.",
    tags: ["Wireframes", "Prototyping", "User Flow"],
    bgColor: "#FFE8B5",     // pastel yellow with contrast
    tagBgColor: "#FFD36E"
  },
  {
    jobTitle: "Digital Marketing",
    description: "Promotes brands through digital channels.",
    tags: ["Ads", "Analytics", "Campaigns"],
    bgColor: "#D4F1F4",     // pastel cyan
    tagBgColor: "#9ADDE6"
  },
  {
    jobTitle: "Content Creation",
    description: "Creates engaging online content.",
    tags: ["Reels", "Videos", "Posts"],
    bgColor: "#FFD6E8",     // pastel rose
    tagBgColor: "#FF9FCB"
  },
  {
    jobTitle: "SEO Specialist",
    description: "Improves website search visibility.",
    tags: ["Keywords", "On-Page", "Ranking"],
    bgColor: "#DDE4FF",     // soft indigo
    tagBgColor: "#B3C0FF"
  },
  {
    jobTitle: "Product Management",
    description: "Plans and guides product development.",
    tags: ["Roadmap", "Strategy", "Research"],
    bgColor: "#E3ECCF",     // muted olive
    tagBgColor: "#C7D9A5"
  }
];


  return (

    <div className="entire">
      {jobRoles.map(function (ele, idx) {
        return <div key = {idx}>
         <Card title = {ele.jobTitle} des = {ele.description} tag = {ele.tags} bg = {ele.bgColor} tc = {ele.tagBgColor}/>
        </div>
      })}
      
    </div>
  )
}

export default App