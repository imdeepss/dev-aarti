import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
  XIcon,
} from "@/_components/icon";

import { Container } from "@/_components/layouts";
import { IconProps } from "@/type/index";
import Image from "next/image";
import Link from "next/link";

type SocialType = {
  icon?: React.ComponentType<IconProps> | undefined;
  url: string;
  label: string;
};

type TeamDetailsType = {
  name: string;
  role: string;
  image: string;
  social: SocialType[];
};

const teamMembers: TeamDetailsType[] = [
  {
    name: "Deepak Vishwakarma",
    role: "Founder, Full Stack Developer",
    image: "/images/team/deepak.png",
    social: [
      { icon: GithubIcon, url: "https://github.com/imdeepss", label: "GitHub" },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/imdeepss",
        label: "LinkedIn",
      },
      {
        icon: WhatsAppIcon,
        url: "https://wa.me/+917972352852",
        label: "WhatsApp",
      },
    ],
  },
  {
    name: "Siddharth Singh",
    role: "Full Stack Developer, Content Creator",
    image: "/images/team/Siddharth.jpg",
    social: [
      {
        icon: GithubIcon,
        url: "https://github.com/imsidd02",
        label: "GitHub",
      },
      {
        icon: WhatsAppIcon,
        url: "https://wa.me/+918169116096",
        label: "WhatsApp",
      },
      {
        icon: LinkedinIcon,
        url: "https://www.linkedin.com/in/siddharth-s-singh/",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Angad Kanojia",
    role: "UI/UX Improver & Feature Contributor",
    image: "/images/team/angad.jpg",
    social: [
      {
        icon: GithubIcon,
        url: "https://github.com/angadkanojia",
        label: "GitHub",
      },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/angad-kanojia-64022ab2",
        label: "LinkedIn",
      },
    ],
  },
  // {
  //   name: "Simran Vishwakarma",
  //   role: "Graphic Designer, Website Designer",
  //   image: "/images/team/simran.png",
  //   social: [],
  // },
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
        url: "https://wa.me/+918080104933",
        label: "WhatsApp",
      },
      {
        icon: InstagramIcon,
        url: "https://www.instagram.com/pankaj",
        label: "Instagram",
      },
      {
        icon: XIcon,
        url: "https://twitter.com/pankaj",
        label: "Twitter",
      },
    ],
  },
];

const MeetTheTeam = () => {
  return (
    <div className="py-20 text-white">
      <Container>
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:gap-5 gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-3 md:p-5 rounded-xl shadow-lg transform transition-transform flex flex-col gap-3 ease-in-out"
            >
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-600 shrink-0">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile picture`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-center text-secondary">
                <h2 className="text-lg font-bold">{member.name}</h2>
                <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
                <p className="text-base mb-2">{member.role}</p>
                <div className="flex justify-center gap-2 items-center">
                  {member?.social.map((social, i) => (
                    <Link
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${member.name}'s ${social.label}`}
                      className="text-gray-300"
                    >
                      {social.icon && <social.icon aria-label={social.label} />}
                    </Link>
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
