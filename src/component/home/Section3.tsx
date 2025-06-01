"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const reviews = [
    {
        text: "I can actually see progress in my mental health which is something I haven't been able to say in 15 years and it's thanks to her.",
        author: "Written by S.A. for John Ramsey (LCSW)",
        image: '/people/people1.jpg',
    },
    {
        text: "Therapy helped me feel heard for the first time. I'm finally making progress.",
        author: "Written by T.M. for Ankit Sharma(PhD)",
        image: '/people/people2.jpg',
    },
    {
        text: "I never thought I'd feel normal again. This has changed my life.",
        author: "Written by R.L. for David Kim (LPC)",
        image: '/people/people3.jpg',
    },
    {
        text: "Arya is amazing in her insights and conversational approach. I am so glad and blessed to have found her and started healing with her guidance.",
        author: "Written by J.B. for Arya Raj (LCSW)",
        image: '/people/people4.jpg',
    },
    {
        text: "This is the support I didn’t know I needed. Thank you for everything.",
        author: "Written by M.C. for Dr. Vijay (PhD)",
        image: '/people/people5.jpg',
    },
];

function Section3() {
    const [current, setCurrent] = useState(0);
    const total = reviews.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);


    return (
        <div className="w-full h-auto flex flex-col">
            {/* Stats Section */}
            <div className="bg-[#F9F9F9] py-14 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                    Making a Difference, Worldwide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-[#00C28C] text-2xl font-bold mb-1">100k+</h3>
                        <p className="text-gray-600">Lives touched globally</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-[#00C28C] text-2xl font-bold mb-1">500+</h3>
                        <p className="text-gray-600">Certified Therapists Available</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-[#00C28C] text-2xl font-bold mb-1">98%</h3>
                        <p className="text-gray-600">Positive User Feedback Score</p>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-[#F9F9F9] py-16 px-4 text-center relative">
                <div className="max-w-4xl mx-auto px-4">
                    {/* <div className="text-green-700 text-5xl font-serif mb-4">“</div> */}
                    <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
                        {reviews[current].text}
                    </p>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Image
                            src={reviews[current].image}
                            width={300}
                            height={300}
                            alt={reviews[current].author}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <p className="text-sm text-gray-700">{reviews[current].author}</p>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mb-6">
                        {reviews.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-3 h-3 rounded-full ${idx === current ? "bg-green-700" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <Link
                        className="px-6 py-2 border border-green-700 text-green-800 font-medium rounded-full hover:bg-green-50 transition duration-200 hover:shadow-lg active:scale-95"
                        href="/"
                    >
                        More success stories
                    </Link>
                </div>

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-700 text-3xl"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-700 text-3xl"
                >
                    ›
                </button>
            </div>
        </div>
    )
}

export default Section3