require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const TeamMember = require('../models/TeamMember');
const Event = require('../models/Event');

const teamMembers = [
  {
    name: 'Tejas Pawar',
    role: 'CEO',
    image: '/team/tejas_pawar.jpeg',
    linkedin: 'https://www.linkedin.com/in/tejas-pawar-theLazyWolf/',
    order: 1,
  },
  {
    name: 'Arnav Tripathi',
    role: 'CFO Head & Marketing Head',
    image: '/team/arnav_tripathi.jpeg',
    linkedin: 'https://www.linkedin.com/in/arnav-tripathi-174150197',
    order: 2,
  },
  {
    name: 'Soham Dugade',
    role: 'Networking Head',
    image: '/team/soham_dugade.jpeg',
    linkedin: 'https://www.linkedin.com/in/soham-dugade-364520332/',
    order: 3,
  },
  {
    name: 'Ved Songire',
    role: 'CTO & Documentation Head',
    image: '/team/ved_songire.jpeg',
    linkedin: 'https://www.linkedin.com/in/ved-songire-768a9a32a/',
    order: 4,
  },
  {
    name: 'Kedar Sawant',
    role: 'CTO Head',
    image: '/team/kedar_sawant.jpeg',
    linkedin: 'https://www.linkedin.com/in/kedar-sawant-891968340/',
    order: 5,
  },
  {
    name: 'Pakhi Katre',
    role: 'CFO Co-Head',
    image: '/team/pakhi_katre.png',
    linkedin: 'https://www.linkedin.com/in/pakhi-katre-563536284/',
    order: 6,
  },
];

const events = [
  {
    title: 'Startup Spark 2026',
    description:
      'An intensive 48-hour hackathon where aspiring entrepreneurs build MVPs from scratch. Pitch to real investors, win seed funding, and launch your startup journey.',
    date: new Date('2026-05-15'),
    location: 'Vidyalankar Institute of Technology, Wadala, Mumbai',
    category: 'hackathon',
    isUpcoming: true,
    image: '',
  },
  {
    title: 'Ideathon: Think Beyond',
    description:
      'Present your innovative business ideas to a panel of industry veterans and VCs. Top 3 ideas receive mentorship and incubation support.',
    date: new Date('2026-06-10'),
    location: 'VIT Seminar Hall, Mumbai',
    category: 'competition',
    isUpcoming: true,
    image: '',
  },
  {
    title: 'Workshop: Building Scalable Products',
    description:
      'Learn how to take your product from 0 to 1 with expert-led sessions on lean methodology, user research, and technical architecture.',
    date: new Date('2026-04-20'),
    location: 'VIT Computer Lab, Mumbai',
    category: 'workshop',
    isUpcoming: true,
    image: '',
  },
  {
    title: 'Entrepreneurship Conclave 2025',
    description:
      'Our flagship annual event featuring keynotes from founders of unicorn startups, panel discussions on funding, and networking sessions.',
    date: new Date('2025-12-05'),
    location: 'VIT Auditorium, Mumbai',
    category: 'seminar',
    isUpcoming: false,
    image: '',
  },
  {
    title: 'Pitch Perfect',
    description:
      'A shark-tank style event where student founders pitch their startups to angel investors and successful entrepreneurs.',
    date: new Date('2025-10-22'),
    location: 'VIT Seminar Hall, Mumbai',
    category: 'competition',
    isUpcoming: false,
    image: '',
  },
  {
    title: 'FinTech Workshop',
    description:
      'Hands-on workshop on building fintech products, understanding regulatory compliance, and leveraging UPI/blockchain technology.',
    date: new Date('2025-09-14'),
    location: 'VIT Computer Lab, Mumbai',
    category: 'workshop',
    isUpcoming: false,
    image: '',
  },
];

const seedDB = async () => {
  try {
    await connectDB();

    // Clear existing data
    await TeamMember.deleteMany({});
    await Event.deleteMany({});

    // Insert seed data
    await TeamMember.insertMany(teamMembers);
    await Event.insertMany(events);

    console.log('Database seeded successfully!');
    console.log(`Inserted ${teamMembers.length} team members`);
    console.log(`Inserted ${events.length} events`);

    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error.message);
    process.exit(1);
  }
};

seedDB();
