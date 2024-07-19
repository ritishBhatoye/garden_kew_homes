import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";




export const navItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Homes", href: "/homes" },
  { label: "Process", href: "/process" },
  {label:  "Stories",href:"/stories"},
  { label: "Display Homes", href: "/display_homes" },
  { label: "Contact", href: "/contact" },
];

// index.jsx

const imageLinks = {
  CalukeCI: {
    image1: "https://i.imgur.com/HDcYWVv.jpg",
    image2: "https://i.imgur.com/6eOsR13.jpg",
    image3: "https://i.imgur.com/s6k6MnG.jpeg",
    image4: "https://i.imgur.com/s6k6MnG.jpeg",
    image5: "https://i.imgur.com/2YY0hL1.jpeg",
    image6: "https://i.imgur.com/DCROFtI.jpeg",
    image7: "https://i.imgur.com/Z97owHO.jpeg",
    image8: "https://i.imgur.com/nGeiyCn.jpeg",
    image9: "https://i.imgur.com/AEY3mQF.jpeg",
    image10: "https://i.imgur.com/P7yuTRX.jpeg",
    image11: "https://i.imgur.com/VmDO7lx.jpeg",
    image12: "https://i.imgur.com/R0rwU3P.jpeg",
    image13: "https://i.imgur.com/697BkPC.jpeg",
    image14: "https://i.imgur.com/6JYl9pp.jpeg",
    image15: "https://i.imgur.com/6J4ibA1.jpeg",
    image16: "https://i.imgur.com/JwynARp.jpeg",
    image17: "https://i.imgur.com/dTmenM5.jpeg",
    image18: "https://i.imgur.com/V26a9ZN.jpeg",
    image19: "https://i.imgur.com/eoknYjg.jpeg",
    image20: "https://i.imgur.com/2YY0hL1.jpeg",
    image21: "https://i.imgur.com/NJpop60.jpeg",
    image22: "https://i.imgur.com/Hmoa4gN.jpeg",
    image23: "https://i.imgur.com/ZsmQpwJ.jpeg",
    image24: "https://i.imgur.com/4X8vFB7.jpeg",
    image25: "https://i.imgur.com/8jm9c2m.jpeg",
    image26: "https://i.imgur.com/EL804lj.jpeg",
    
  },
  anotherCategory: {
    image1: "https://i.imgur.com/YN6aSFD.jpeg",
    image2: "https://i.imgur.com/XGHCPKt.jpeg",
    image3: "https://i.imgur.com/Zxa0Oa9.jpeg",
    image4: "https://i.imgur.com/a6rTBId.jpeg",
    image5: "https://i.imgur.com/3oYEoGj.jpeg",
    image6: "https://i.imgur.com/wrKEeoY.jpeg",
    image7: "https://i.imgur.com/0UBfxJs.jpeg",
    image8: "https://i.imgur.com/IQoHjP8.jpeg",
    image9: "https://i.imgur.com/eH70198.jpeg",
    image10: "https://i.imgur.com/7cthU3m.jpeg",
    image11: "https://i.imgur.com/eAy5ci6.jpeg",
    image12: "https://i.imgur.com/LdnJkA6.jpeg",
    image13: "https://i.imgur.com/QypRCvd.jpeg",
    image14: "https://i.imgur.com/oRqDWsF.jpeg",
    // Add more images here
  },
  SeedingPL: {
    image1: "https://i.imgur.com/HPfpCTK.jpeg",
    image2: "https://i.imgur.com/KX8ctuM.jpeg",
    image3: "https://i.imgur.com/W5jsPn7.jpeg",
    image4: "https://i.imgur.com/dfnBMcO.jpeg",
    image5: "https://i.imgur.com/yT5GEfS.jpeg",
    image6: "https://i.imgur.com/ojNVT1y.jpeg",
    image7: "https://i.imgur.com/I80WfAM.jpeg",
    image8: "https://i.imgur.com/K7v803v.jpeg",
    image9: "https://i.imgur.com/k2SfiMp.jpeg",
    image10: "https://i.imgur.com/B2P2a4M.jpeg",
    image11: "https://i.imgur.com/7xwb7Dy.jpeg",
    image12: "https://i.imgur.com/mFfkygH.jpeg",
    image13: "https://i.imgur.com/B96E9dJ.jpeg",
    image14: "https://i.imgur.com/smf2AoX.jpeg",
    image15: "https://i.imgur.com/svyUrw9.jpeg",
    planImage: "https://i.imgur.com/OwucEfR.jpeg",
    // Add more images here
  },
  TowerSt: {
    image1: "https://i.imgur.com/StiERdE.jpeg",
    image2: "https://i.imgur.com/G0YdZd5.jpeg",
    image3: "https://i.imgur.com/8MLUHR8.jpeg",
    image4: "https://i.imgur.com/I0246Uo.jpeg",
    image5: "https://i.imgur.com/QbG5Cqn.jpeg",
    image6: "https://i.imgur.com/fYDBYVj.jpeg",
    image7: "https://i.imgur.com/63dBxCi.jpeg",
    image8: "https://i.imgur.com/AkZE3yv.jpeg",
    image9: "https://i.imgur.com/2hAcj5P.jpeg",
    image10: "https://i.imgur.com/7VSQj9v.jpeg",
    image11: "https://i.imgur.com/gvef0dk.jpeg",
    image12: "https://i.imgur.com/WgtEGnb.jpeg",
    image13: "https://i.imgur.com/9s30iQt.jpeg",
    image14: "https://i.imgur.com/NJZZkqV.jpeg",
    image15: "https://i.imgur.com/VypSquH.jpeg",
    image16: "https://i.imgur.com/0VIVK9l.jpeg",
    image17: "https://i.imgur.com/3SxYAAs.jpeg",
    image18: "https://i.imgur.com/UsRl6tT.jpeg",
    image19: "https://i.imgur.com/2bmDCRv.jpeg",
    image20: "https://i.imgur.com/hFZiSTw.jpeg",
    image21: "https://i.imgur.com/pHmfSro.jpeg",
    image22: "https://i.imgur.com/U3QJJmv.jpeg",
    image23: "https://i.imgur.com/irTn9e7.jpeg",
    image24: "https://i.imgur.com/B4KfOeJ.jpeg",
  },
  WaterSedgeCover: {
    image1: "https://i.imgur.com/ryjXl2a.jpeg",
    image2: "https://i.imgur.com/IR1vzKk.jpeg",
    image3: "https://i.imgur.com/B7KJslE.jpeg",
    image4: "https://i.imgur.com/k3k9svO.jpeg",
    image5: "https://i.imgur.com/THZeMfL.jpeg",
    image6: "https://i.imgur.com/NbIRvbX.jpeg",
    image7: "https://i.imgur.com/UQ8OByc.jpeg",
    image8: "https://i.imgur.com/x0Vf29q.jpeg",
    image9: "https://i.imgur.com/bvN3tMt.jpeg",
    image10: "https://i.imgur.com/7kkvHrP.jpeg",
    image11: "https://i.imgur.com/7z8oWkK.jpeg",
    image12: "https://i.imgur.com/UVksgkg.jpeg",
    image13: "https://i.imgur.com/cB1WtKR.jpeg",
    image14: "https://i.imgur.com/gWxO9hi.jpeg",
    image15: "https://i.imgur.com/rm4xICk.jpeg",
    image16: "https://i.imgur.com/I0jhNx1.jpeg",
    image17: "https://i.imgur.com/4xwJeqQ.jpeg",
    image18: "https://i.imgur.com/Oc0Bb99.jpeg",
    image19: "https://i.imgur.com/MVlvSb7.jpeg",
    image20: "https://i.imgur.com/bHP6622.jpeg",
    droneImage1: "https://i.imgur.com/dqZD3Sg.jpeg",
    droneImage2: "https://i.imgur.com/7tQ0HTJ.jpeg",
    droneImage3: "https://i.imgur.com/1iEh2SA.jpeg",
    
  },
  Logo: {
    image: "https://i.imgur.com/vVUWpzG.png",
   
  },
  
};

export default imageLinks;


// export const services = [
//   {
//     id: 1,
//     title: 'Corporate',
//     description: 'Apparently we had reached a great height in the atmosphere',
//     image: 'path_to_corporate_image.jpg', // Replace with the path to the corporate image
//   },
//   {
//     id: 2,
//     title: 'Wedding',
//     description: 'Apparently we had reached a great height in the atmosphere',
//     image: 'path_to_wedding_image.jpg', // Replace with the path to the wedding image
//   },
//   {
//     id: 3,
//     title: 'Event Planning',
//     description: 'Apparently we had reached a great height in the atmosphere',
//     image: 'path_to_event_planning_image.jpg', // Replace with the path to the event planning image
//   },
// ];

// export const ServiceCard = ({ title, description, image }) => (
//   <div className="flex flex-col items-center text-center">
//     <img src={image} alt={title} className="w-full h-auto mb-4" />
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-500">{description}</p>
//   </div>
// );
// export const testimonials = [
//   {
//     user: "John Doe",
//     company: "Stellar Solutions",
//     image: user1,
//     text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
//   },
//   {
//     user: "Jane Smith",
//     company: "Blue Horizon Technologies",
//     image: user2,
//     text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
//   },
//   {
//     user: "David Johnson",
//     company: "Quantum Innovations",
//     image: user3,
//     text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
//   },
//   {
//     user: "Ronee Brown",
//     company: "Fusion Dynamics",
//     image: user4,
//     text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
//   },
//   {
//     user: "Michael Wilson",
//     company: "Visionary Creations",
//     image: user5,
//     text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
//   },
//   {
//     user: "Emily Davis",
//     company: "Synergy Systems",
//     image: user6, 
//     text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
//   },
// ];

// export const features = [
//   {
//     icon: exclusiveDesignIcon,
//     title: 'Exclusive Design',
//     description: 'Apparently we had reached a great height in the atmosphere',
//   },
//   {
//     icon: clientFocusedIcon,
//     title: 'Client Focused',
//     description: 'Apparently we had reached a great height in the atmosphere',
//   },
//   {
//     icon: freshIngredientsIcon,
//     title: 'Fresh Ingredients',
//     description: 'Apparently we had reached a great height in the atmosphere',
//   },
//   {
//     icon: diverseClientBaseIcon,
//     title: 'Diverse Client Base',
//     description: 'Apparently we had reached a great height in the atmosphere',
//   },
//   {
//     icon: responsibleSourcingIcon,
//     title: 'Responsible Sourcing',
//     description: 'Apparently we had reached a great height in the atmosphere',
//   },
//   {
//     icon: flexibleServicesIcon,
//     title: 'Flexible Services',
//     description: 'Apparently we had reached a great height in the atmosphere',
//   },
// ];

// export const checklistItems = [
//   {
//     title: "Code merge made easy",
//     description:
//       "Track the performance of your VR apps and gain insights into user behavior.",
//   },
//   {
//     title: "Review code without worry",
//     description:
//       "Track the performance of your VR apps and gain insights into user behavior.",
//   },
//   {
//     title: "AI Assistance to reduce time",
//     description:
//       "Track the performance of your VR apps and gain insights into user behavior.",
//   },
//   {
//     title: "Share work in minutes",
//     description:
//       "Track the performance of your VR apps and gain insights into user behavior.",
//   },
// ];

// export const pricingOptions = [
//   {
//     title: "Free",
//     price: "$0",
//     features: [
//       "Private board sharing",
//       "5 Gb Storage",
//       "Web Analytics",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Pro",
//     price: "$10",
//     features: [
//       "Private board sharing",
//       "10 Gb Storage",
//       "Web Analytics (Advance)",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Enterprise",
//     price: "$200",
//     features: [
//       "Private board sharing",
//       "Unlimited Storage",
//       "High Performance Network",
//       "Private Mode",
//     ],
//   },
// ];

// export const resourcesLinks = [
//   { href: "#", text: "Getting Started" },
//   { href: "#", text: "Documentation" },
//   { href: "#", text: "Tutorials" },
//   { href: "#", text: "API Reference" },
//   { href: "#", text: "Community Forums" },
// ];

// export const platformLinks = [
//   { href: "#", text: "Features" },
//   { href: "#", text: "Supported Devices" },
//   { href: "#", text: "System Requirements" },
//   { href: "#", text: "Downloads" },
//   { href: "#", text: "Release Notes" },
// ];

// export const communityLinks = [
//   { href: "#", text: "Events" },
//   { href: "#", text: "Meetups" },
//   { href: "#", text: "Conferences" },
//   { href: "#", text: "Hackathons" },
//   { href: "#", text: "Jobs" },
// ];
