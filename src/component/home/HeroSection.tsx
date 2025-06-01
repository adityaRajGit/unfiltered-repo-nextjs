import Image from "next/image"


function HeroSection() {
    return (
        <>
            <div className="py-10 md:py-20 bg-teal-200">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                                    Find Your Unfiltered Voices
                                </h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                    Your story and struggles deserve to be heard.
                                    <br />
                                    Share them Unfiltered.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                                        100k+
                                    </p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">
                                        Lives
                                        <br />
                                        Touched
                                    </p>
                                </div>
                                <div className="hidden sm:block">
                                    <svg
                                        className="text-gray-400"
                                        width="16"
                                        height="39"
                                        viewBox="0 0 16 39"
                                        fill="none"
                                        stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line x1="0.72" y1="10.58" x2="15.72" y2="0.58"></line>
                                        <line x1="0.72" y1="17.58" x2="15.72" y2="7.58"></line>
                                        <line x1="0.72" y1="24.58" x2="15.72" y2="14.58"></line>
                                        <line x1="0.72" y1="31.58" x2="15.72" y2="21.58"></line>
                                        <line x1="0.72" y1="38.58" x2="15.72" y2="28.58"></line>
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                                        98%
                                    </p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">
                                        Positive
                                        <br />
                                        Feedback
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src="/dashboard.jpg" alt="Dashboard" className="w-full rounded-xl shadow-lg" width={600} height={600} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection