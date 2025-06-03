"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
    {
        text: "I can actually see progress in my mental health which is something I haven't been able to say in 15 years and it's thanks to her.",
        author: "S.A.",
        therapist: "John Ramsey (LCSW)",
        image: '/people/people1.jpg',
    },
    {
        text: "Therapy helped me feel heard for the first time. I'm finally making progress.",
        author: "T.M.",
        therapist: "Ankit Sharma (PhD)",
        image: '/people/people2.jpg',
    },
    {
        text: "I never thought I'd feel normal again. This has changed my life.",
        author: "R.L.",
        therapist: "David Kim (LPC)",
        image: '/people/people3.jpg',
    },
    {
        text: "Arya is amazing in her insights and conversational approach. I am so glad and blessed to have found her and started healing with her guidance.",
        author: "J.B.",
        therapist: "Arya Raj (LCSW)",
        image: '/people/people4.jpg',
    },
    {
        text: "This is the support I didn’t know I needed. Thank you for everything.",
        author: "M.C.",
        therapist: "Dr. Vijay (PhD)",
        image: '/people/people5.jpg',
    },
];

function Section3() {
    const [current, setCurrent] = useState(0);
    const total = reviews.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

    return (
        <div className="w-full py-16 bg-gradient-to-b from-teal-50 to-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Stats Section */}
                <div className="mb-20 text-center">
                    <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-teal-800 bg-teal-200 rounded-full">
                        Our Impact
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Making a Difference, Worldwide
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-12">
                        We&apos;re committed to transforming mental healthcare accessibility
                        and helping people find their path to wellness.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow-md border border-teal-50">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <span className="text-xl font-bold text-teal-800">100k+</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Lives Touched</h3>
                            <p className="text-gray-600">Across 20+ countries globally</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border border-teal-50">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <span className="text-xl font-bold text-teal-800">500+</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Therapists</h3>
                            <p className="text-gray-600">Certified professionals available</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md border border-teal-50">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                <span className="text-xl font-bold text-teal-800">98%</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Rate</h3>
                            <p className="text-gray-600">Positive user feedback score</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 to-cyan-500"></div>

                    <div className="py-12 px-6 md:px-16">
                        <div className="flex justify-center mb-8">
                            <div className="bg-teal-100 p-4 rounded-full">
                                <FaQuoteLeft className="text-3xl text-teal-600" />
                            </div>
                        </div>

                        <div className="relative h-56 md:h-48">
                            <div className="text-center">
                                <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed max-w-3xl mx-auto">
                                    {reviews[current].text}
                                </p>

                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-center gap-4 mb-3">
                                        <Image
                                            src={reviews[current].image}
                                            width={300}
                                            height={300}
                                            alt={reviews[current].author}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-teal-500"
                                        />
                                        <div className="text-left">
                                            <p className="font-semibold text-gray-900">{reviews[current].author}</p>
                                            <p className="text-sm text-gray-600">for {reviews[current].therapist}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center mt-8">
                            {/* Dots */}
                            <div className="flex justify-center gap-2">
                                {reviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-teal-600" : "bg-gray-300"}`}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className="flex gap-4">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-200 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <Link
                                href="/testimonials"
                                className="inline-flex items-center px-6 py-3 border border-teal-600 text-teal-700 font-medium rounded-full hover:bg-teal-50 transition-colors"
                            >
                                Read more success stories
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;