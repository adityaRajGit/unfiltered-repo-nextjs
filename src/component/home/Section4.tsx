import Link from "next/link"

function Section4() {
    return (
        <div className="py-16 px-6 bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                What Unfiltered Offers You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="border border-gray-200 rounded-xl p-6 transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <div className="text-[#00C28C] mb-3">
                        <i className="fas fa-user-friends text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                        Personalized Matching
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Find the right therapist based on your needs and preferences.
                    </p>
                    <Link
                        className="text-[#00C28C] font-medium text-sm transition duration-200 hover:bg-[#00C28C] hover:text-white hover:shadow-lg active:scale-95"
                        href={"/"}
                    >
                        Match with a therapist →
                    </Link>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <div className="text-[#00C28C] mb-3">
                        <i className="fas fa-lock text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                        Secure & Private Sessions
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Your privacy is our top priority. Sessions are confidential and
                        secure.
                    </p>
                    <Link
                        className="text-[#00C28C] font-medium text-sm transition duration-200 hover:bg-[#00C28C] hover:text-white hover:shadow-lg active:scale-95"
                        href={"/"}
                    >
                        Learn about security →
                    </Link>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <div className="text-[#00C28C] mb-3">
                        <i className="fas fa-comment-dots text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                        Flexible Session Options
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Choose from video, phone, or chat sessions that fit your schedule.
                    </p>
                    <Link
                        className="text-[#00C28C] font-medium text-sm transition duration-200 hover:bg-[#00C28C] hover:text-white hover:shadow-lg active:scale-95"
                        href={"/"}
                    >
                        Explore options →
                    </Link>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <div className="text-[#00C28C] mb-3">
                        <i className="fas fa-users text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Supportive Community</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Connect with others on similar journeys in our moderated forums.
                    </p>
                    <Link
                        className="text-[#00C28C] font-medium text-sm transition duration-200 hover:bg-[#00C28C] hover:text-white hover:shadow-lg active:scale-95"
                        href={"/"}
                    >
                        Join the community →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section4