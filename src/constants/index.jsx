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
  {label:"Stories",href:"/stories"},
  { label: "Display Homes", href: "/display_homes" },
  { label: "Contact", href: "/contact" },
];

// index.jsx

const imageLinks = {
  CalukeCI: {
    image1: "https://i.imgur.com/HDcYWVv.jpeg",
    image2: "https://i.imgur.com/6eOsR13.jpeg",
    image3: "https://i.imgur.com/s6k6MnG.jpeg",
    image4: "https://i.imgur.com/s6k6MnG.jpeg",
    image5: "https://i.imgur.com/IJxhDAl.jpg",
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
    image1: "https://example.com/another_image1.jpg",
    image2: "https://example.com/another_image2.jpg",
    // Add more images here
  },
  // Add more categories and images as needed
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
