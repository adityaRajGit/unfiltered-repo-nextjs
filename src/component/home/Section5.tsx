import Image from "next/image"
import Link from "next/link"

function Section5() {
    return (
        <div className="bg-[#F9F9F9] py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                Our Experienced Therapists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <Image
                        src='/people/people4.jpg'
                        width={300}
                        height={300}
                        alt="Dr. Anya Sharma"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="font-semibold text-lg">Dr. Anand Sharma</h3>
                        <p className="text-sm text-gray-600">Clinical Psychologist</p>
                        <p className="text-sm text-gray-600 mb-3">
                            Sessions Conducted: 345
                        </p>
                        <Link
                            className="bg-[#00C28C] text-white px-4 py-2 text-sm rounded-md transition duration-200 hover:bg-[#009f75] hover:shadow-lg active:scale-95"
                            href={"/"}
                        >
                            Schedule Session
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <Image
                        src='/people/people2.jpg'
                        width={300}
                        height={300}
                        alt="Dr. Ben Carter"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="font-semibold text-lg">Dr. Rahul Srivastav</h3>
                        <p className="text-sm text-gray-600">Licensed Therapist</p>
                        <p className="text-sm text-gray-600 mb-3">
                            Sessions Conducted: 520
                        </p>
                        <Link
                            className="bg-[#00C28C] text-white px-4 py-2 text-sm rounded-md transition duration-200 hover:bg-[#009f75] hover:shadow-lg active:scale-95"
                            href={"/"}
                        >
                            Schedule Session
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition duration-200 hover:scale-105 hover:shadow-2xl">
                    <Image
                        src='/people/people3.jpg'
                        width={300}
                        height={300}
                        alt="Dr. Chloe Davis"
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5">
                        <h3 className="font-semibold text-lg">Dr. Nidhi Rai</h3>
                        <p className="text-sm text-gray-600">Counseling Psychologist</p>
                        <p className="text-sm text-gray-600 mb-3">
                            Sessions Conducted: 480
                        </p>
                        <Link
                            className="bg-[#00C28C] text-white px-4 py-2 text-sm rounded-md transition duration-200 hover:bg-[#009f75] hover:shadow-lg active:scale-95"
                            href={"/"}
                        >
                            Schedule Session
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5