"use client";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
  XIcon,
} from "@/_components/icon";

import { Container } from "@/_components/layouts";
import Image from "next/image";

const teamMembers = [
  {
    name: "Deepak Vishwakarma",
    role: "Founder, Full Stack Developer",
    image: "/images/team/deepak.png",
    social: [
      { icon: GithubIcon, url: "https://github.com/deepak", label: "GitHub" },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/deepak",
        label: "LinkedIn",
      },
      {
        icon: WhatsAppIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
      {
        icon: InstagramIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
      {
        icon: XIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
    ],
    quote: "Innovation starts with a single thought.",
  },
  {
    name: "Siddharth Singh",
    role: "Full Stack Developer, Content Creator",
    image: "/images/team/Siddharth.jpg",
    social: [
      {
        icon: GithubIcon,
        url: "https://github.com/siddharth",
        label: "GitHub",
      },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/siddharth",
        label: "LinkedIn",
      },
      {
        icon: WhatsAppIcon,
        url: "https://whatsapp.com/in/siddharth",
        label: "WhatsApp",
      },
      {
        icon: InstagramIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
      {
        icon: XIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
    ],
    quote: "Code, Create, Conquer!",
  },
  {
    name: "Angad Kanojia",
    role: "UI/UX Improver & Feature Contributor",
    image: "/images/team/angad.jpg",
    social: [
      { icon: GithubIcon, url: "https://github.com/angad", label: "GitHub" },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/angad",
        label: "LinkedIn",
      },
      {
        icon: WhatsAppIcon,
        url: "https://whatsapp.com/in/angad",
        label: "WhatsApp",
      },
      {
        icon: InstagramIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
      {
        icon: XIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
    ],
    quote: "Design is intelligence made visible.",
  },
  {
    name: "Simran Vishwakarma",
    role: "Graphic Designer, Website Designer",
    image: "/images/team/simran.png",
    social: [
      { icon: GithubIcon, url: "https://github.com/simran", label: "GitHub" },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/simran",
        label: "LinkedIn",
      },
      {
        icon: WhatsAppIcon,
        url: "https://whatsapp.com/in/simran",
        label: "WhatsApp",
      },
      {
        icon: InstagramIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
      {
        icon: XIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
    ],
    quote: "Creativity is nothing but a mind set free.",
  },
  {
    name: "Pankaj Gupta",
    role: "Mobile App Developer",
    image: "/images/team/pankaj.jpg",
    social: [
      { icon: GithubIcon, url: "https://github.com/pankaj", label: "GitHub" },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/pankaj",
        label: "LinkedIn",
      },
      {
        icon: WhatsAppIcon,
        url: "https://whatsapp.com/in/pankaj",
        label: "WhatsApp",
      },
      {
        icon: InstagramIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
      {
        icon: XIcon,
        url: "https://whatsapp.com/in/deepak",
        label: "WhatsApp",
      },
    ],
    quote: "Apps make life easier, one tap at a time.",
  },
];

const MeetTheTeam = () => {
  return (
    <div className="py-20 text-white">
      <Container>
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform hover:-translate-y-2"
            >
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-600">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile picture`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-xl text-black font-bold">{member.name}</p>
                <p className="text-sm text-black">{member.role}</p>
                <p className="text-sm text-black italic mt-2">
                  &quot;{member.quote}&quot;
                </p>
                <div className="flex justify-center gap-1 mt-4">
                  {member.social.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name}'s ${social.label}`}
                      className="text-gray-300 hover:text-black focus:ring focus:ring-gray-400 rounded-full p-1"
                    >
                      <social.icon aria-label={social.label} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MeetTheTeam;
