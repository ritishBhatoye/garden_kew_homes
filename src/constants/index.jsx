import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import exclusiveDesignIcon from '../assets/whyus/exclusive-design.png'; 
import clientFocusedIcon from '../assets/whyus/client-focused.png';
import freshIngredientsIcon from '../assets/whyus/fresh-ingredients.png';
import diverseClientBaseIcon from '../assets/whyus/diverse-client-base.png';
import responsibleSourcingIcon from '../assets/whyus/responsible-sourcing.png';
import flexibleServicesIcon from '../assets/whyus/flexible-services.png';

import corporate from '../assets/services/corporate_image.png';
import planning from '../assets/services/planning_image.png';
import wedding from '../assets/services/wedding_image.png';



import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  {label:"Menu",href:"/menu"},
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: 1,
    title: 'Corporate',
    description: 'Apparently we had reached a great height in the atmosphere',
    image: 'path_to_corporate_image.jpg', // Replace with the path to the corporate image
  },
  {
    id: 2,
    title: 'Wedding',
    description: 'Apparently we had reached a great height in the atmosphere',
    image: 'path_to_wedding_image.jpg', // Replace with the path to the wedding image
  },
  {
    id: 3,
    title: 'Event Planning',
    description: 'Apparently we had reached a great height in the atmosphere',
    image: 'path_to_event_planning_image.jpg', // Replace with the path to the event planning image
  },
];

export const ServiceCard = ({ title, description, image }) => (
  <div className="flex flex-col items-center text-center">
    <img src={image} alt={title} className="w-full h-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6, 
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: exclusiveDesignIcon,
    title: 'Exclusive Design',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: clientFocusedIcon,
    title: 'Client Focused',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: freshIngredientsIcon,
    title: 'Fresh Ingredients',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: diverseClientBaseIcon,
    title: 'Diverse Client Base',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: responsibleSourcingIcon,
    title: 'Responsible Sourcing',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
  {
    icon: flexibleServicesIcon,
    title: 'Flexible Services',
    description: 'Apparently we had reached a great height in the atmosphere',
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
