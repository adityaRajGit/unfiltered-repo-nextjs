import Image from "next/image"
import Link from "next/link"

function Section2() {

    const therapy = [
        {
            title: "Individual Therapy",
            desc: "One-on-one sessions to address personal challenges.",
            img: '/therapy1.jpg',
        },
        {
            title: "Couples Counseling",
            desc: "Work on communication and relationship dynamics.",
            img: '/therapy2.jpg',
        },
        {
            title: "Teen Therapy",
            desc: "Support for teens dealing with emotional challenges.",
            img: '/therapy3.jpg',
        },
        {
            title: "Family Therapy",
            desc: "Improve family dynamics and resolve conflicts.",
            img: '/therapy4.jpg',
        },
        {
            title: "Psychiatry and Medication",
            desc: "Professional medical support for mental health.",
            img: '/therapy5.jpg',
        },
    ]

    return (
        <div className="py-16 px-6 bg-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                Choose the therapy type to your needs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {therapy.map((therapy, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-sm overflow-hidden transition duration-200 hover:scale-105 hover:shadow-2xl"
                    >
                        <Image src={therapy.img} alt={therapy.title} width={500} height={500} className="w-full h-52 object-cover" />
                        <div className="p-5">
                            <h3 className="font-semibold text-lg mb-1">{therapy.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{therapy.desc}</p>
                            <Link
                                className="text-[#00C28C] border border-[#00C28C] rounded-md px-4 py-1 text-sm font-medium transition duration-200 hover:bg-[#00C28C] hover:text-white hover:shadow-lg active:scale-95"
                                href="/">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2