function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="mx-auto px-6 flex flex-col lg:flex-row justify-between">
                <div className="mb-6 lg:mb-0 w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                    <h2 className="text-2xl font-bold">I&apos;m excited. Tell me more.</h2>
                    <div className="flex mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="py-2 px-4 rounded-l-lg border border-gray-300"
                        />
                        <button className="bg-teal-500 text-white px-4 rounded-r-lg">
                            Submit
                        </button>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold">Have a question?</h3>
                        <p>Email us anytime: <a href="mailto:care@stayunfiltered.com" className="text-teal-500">care@stayunfiltered.com</a></p>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-teal-500">Instagram</a>
                        <a href="#" className="hover:text-teal-500">LinkedIn</a>
                        <a href="#" className="hover:text-teal-500">YouTube</a>
                        <a href="#" className="hover:text-teal-500">Medium</a>
                    </div>
                </div>

                <div className="mb-6 lg:mb-0 w-full lg:w-1/6 flex flex-col items-center lg:items-start">
                    <h3 className="font-semibold">Popular</h3>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>Mental Health</li>
                        <li>Men&apos;s Performance</li>
                        <li>Women&apos;s Health</li>
                        <li>For Business</li>
                        <li>Content Hub</li>
                    </ul>
                </div>

                <div className="mb-6 lg:mb-0 w-full lg:w-1/6 flex flex-col items-center lg:items-start">
                    <h3 className="font-semibold">Learn</h3>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>How It Works</li>
                        <li>About Us</li>
                        <li>Testimonials</li>
                        <li>Cancel Stigma</li>
                        <li>Our Medical Team</li>
                    </ul>
                </div>

                <div className="mb-6 lg:mb-0 w-full lg:w-1/6 flex flex-col items-center lg:items-start">
                    <h3 className="font-semibold">Connect</h3>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>WhatsApp</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

                <div className="mb-6 lg:mb-0 w-full lg:w-1/6 flex flex-col items-center lg:items-start">
                    <h3 className="font-semibold">Careers</h3>
                    <ul className="flex flex-col items-center lg:items-start">
                        <li>For Psychologists</li>
                        <li>For Doctors</li>
                        <li>Others</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-10">
                <p>All Rights Reserved | <a href="#terms" className="text-teal-500">Terms and Conditions</a> | <a href="#privacy" className="text-teal-500">Privacy Policy</a></p>
            </div>
        </footer>
    )
}

export default Footer