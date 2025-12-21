'use client'

import Image from "next/image";
import { Twitter, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Jonathan Archer",
    role: "Strategy Director",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sarah Malik",
    role: "Lead Analyst",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Michael Smith",
    role: "Financial Consultant",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ivan Lee",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Jennifer Wong",
    role: "Change Specialist",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="container max-w-7xl pt-8 pb-8 md:pb-20 mx-auto">
      <h5 className="text-sky-700 font-semibold mb-1 uppercase text-xs tracking-wide text-center">OUR TEAM</h5>
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8 text-center">Meet Our Smart People</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center bg-white dark:bg-card rounded-2xl shadow-md p-4">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-sky-100"
              />
            </div>
            <h4 className="font-semibold text-lg text-black dark:text-white mb-1">{member.name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
            <div className="flex gap-2">
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4 text-sky-500 hover:text-sky-700" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4 text-sky-500 hover:text-sky-700" /></a>
              <a href="#" aria-label="Mail"><Mail className="h-4 w-4 text-sky-500 hover:text-sky-700" /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}