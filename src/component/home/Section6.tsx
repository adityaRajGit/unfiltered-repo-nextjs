import Image from "next/image"
import Link from "next/link"

function Section6() {

    const services = [
        {
            title: "Individual Therapy",
            desc: "One-on-one sessions tailored to your unique challenges and goals.",
            img: '/therapy1.jpg',
            button: "Find an Individual Therapist",
        },
        {
            title: "Group Sessions",
            desc: "Join supportive groups for shared experiences and collective healing.",
            img: '/therapy2.jpg',
            button: "Explore Group Sessions",
        },
        {
            title: "Crisis Support",
            desc: "Immediate access to trained professionals for urgent support.",
            img: '/therapy3.jpg',
            button: "Get Crisis Help Now",
        },
    ]

    return (
        <div className="bg-[#F9F9F9] py-16 px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                Diverse Support Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl overflow-hidden shadow-sm transition duration-200 hover:scale-105 hover:shadow-2xl"
                    >
                        <Image
                            src={service.img}
                            width={300}
                            height={300}
                            alt={service.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                            <Link
                                className="text-[#00C28C] border border-[#00C28C] rounded-md px-4 py-1 text-sm font-medium transition duration-200 hover:bg-[#00C28C] hover:text-white hover:shadow-lg active:scale-95"
                                href={"/"}
                            >
                                {service.button}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section6