import Image from 'next/image';
import Link from 'next/link';
import { FaUserFriends, FaLightbulb, FaHandshake, FaHeart, FaChartLine, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-cyan-600 py-20 md:py-32 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission: Mental Wellness Without Barriers
              </h1>
              <p className="text-xl text-teal-100 mb-8 max-w-2xl">
                At StayUnfiltered, we&apos;re building a world where everyone has access to compassionate, 
                personalized mental healthcare that fits their life and needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="px-8 py-3 bg-white text-teal-700 font-medium rounded-full hover:bg-gray-100 transition-colors">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                  Contact Our Team
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="" 
                  alt="Team discussion" 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-teal-800 bg-teal-200 rounded-full">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Vision to Reality
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              How a shared passion for mental health accessibility became a platform transforming lives worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 mt-8" />
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-72" />
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mt-8" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-teal-600">2018</div>
                <p className="text-sm text-gray-600">Founded in Bangalore</p>
              </div>
            </div>
            
            <div>
              <p className="text-gray-700 mb-6">
                StayUnfiltered was born from a simple observation: too many people were struggling with 
                mental health challenges without access to quality, affordable care. Our founders, a team 
                of mental health professionals and technologists, saw an opportunity to bridge this gap 
                through technology.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small initiative to connect therapists with clients in underserved areas 
                has grown into a comprehensive platform serving over 100,000 users across 20+ countries. 
                Our journey has been fueled by a shared commitment to breaking down barriers to mental 
                healthcare.
              </p>
              <p className="text-gray-700">
                Today, we&apos;re proud to be at the forefront of the digital mental health revolution, but 
                our mission remains the same: to make compassionate, personalized mental healthcare 
                accessible to everyone, everywhere.
              </p>
              
              <div className="mt-10 flex items-center gap-6">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-teal-600">100k+</div>
                  <div className="text-gray-600">Lives Touched</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-teal-600">20+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-gray-600">Expert Therapists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-teal-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-teal-800 bg-teal-200 rounded-full">
              Our Core Beliefs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              These values shape every decision we make and every interaction we have
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUserFriends className="text-3xl text-teal-600" />,
                title: "Compassion First",
                description: "We approach every interaction with empathy, understanding, and genuine care for the individual."
              },
              {
                icon: <FaLightbulb className="text-3xl text-teal-600" />,
                title: "Innovative Solutions",
                description: "We continuously explore new ways to make mental healthcare more accessible and effective."
              },
              {
                icon: <FaHandshake className="text-3xl text-teal-600" />,
                title: "Integrity Always",
                description: "We maintain the highest ethical standards in everything we do, especially regarding privacy."
              },
              {
                icon: <FaHeart className="text-3xl text-teal-600" />,
                title: "Inclusive Care",
                description: "We believe mental wellness is a universal right, regardless of background or circumstance."
              },
              {
                icon: <FaChartLine className="text-3xl text-teal-600" />,
                title: "Evidence-Based",
                description: "Our approaches are grounded in scientific research and clinical best practices."
              },
              {
                icon: <FaGlobe className="text-3xl text-teal-600" />,
                title: "Global Perspective",
                description: "We embrace diverse cultural approaches to mental health and healing."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-teal-800 bg-teal-200 rounded-full">
              Meet Our Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Visionaries Behind StayUnfiltered
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              A diverse team united by a passion for mental health innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                title: "Founder & CEO",
                bio: "Clinical psychologist with 15+ years experience. Passionate about tech-enabled mental health solutions.",
                image: ''
              },
              {
                name: "Rajiv Mehta",
                title: "CTO",
                bio: "Tech innovator focused on creating secure, accessible platforms for healthcare delivery.",
                image: ''
              },
              {
                name: "Ananya Patel",
                title: "Clinical Director",
                bio: "Oversees therapist network and ensures clinical excellence across all services.",
                image: ''
              },
              {
                name: "Sanjay Kumar",
                title: "Head of Community",
                bio: "Builds and nurtures our global community of users and mental health advocates.",
                image: ''
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative h-72">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-teal-300 text-sm">{member.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-teal-600 hover:text-teal-800">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-teal-600 hover:text-teal-800">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors"
            >
              Meet Our Full Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-teal-800 bg-teal-200 rounded-full">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Milestones Along the Way
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Key moments that have shaped our growth and impact
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-300"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "Founding Vision",
                  description: "StayUnfiltered founded in Bangalore with a mission to democratize mental healthcare"
                },
                {
                  year: "2019",
                  title: "Platform Launch",
                  description: "First version of our platform launched, serving 500 users in the first month"
                },
                {
                  year: "2020",
                  title: "Global Expansion",
                  description: "Expanded services to 5 countries during the pandemic mental health crisis"
                },
                {
                  year: "2021",
                  title: "Series A Funding",
                  description: "Secured $8M to expand our therapist network and technology platform"
                },
                {
                  year: "2022",
                  title: "Mobile App Launch",
                  description: "Launched iOS and Android apps with 100k downloads in the first quarter"
                },
                {
                  year: "2023",
                  title: "100k Members",
                  description: "Reached milestone of 100,000 active users across 20+ countries"
                }
              ].map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                      <div className="text-teal-600 font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission to Transform Mental Healthcare
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Whether you&apos;re seeking support, looking to join our team, or want to partner with us, 
            we&apos;d love to connect with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="px-8 py-3 bg-white text-teal-700 font-medium rounded-full hover:bg-gray-100 transition-colors">
              Create Your Account
            </Link>
            <Link href="/careers" className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              Explore Careers
            </Link>
            <Link href="/partners" className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;