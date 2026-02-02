
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Placeholder icons (can be replaced with actual assets or icons)
const MapIcon = () => (
    <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const EmailIcon = () => (
    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


function InputField({ label, placeholder, type = "text", multiline = false }: { label: string, placeholder: string, type?: string, multiline?: boolean }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="font-['Poppins'] font-medium text-[#141d29] text-sm">{label}</label>
            {multiline ? (
                <textarea
                    placeholder={placeholder}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-blue-500 min-h-[160px] font-['Poppins'] text-gray-700"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full p-4 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-blue-500 font-['Poppins'] text-gray-700"
                />
            )}
        </div>
    );
}

export default function Contact() {
    useScrollReveal();

    return (
        <div className="bg-[#f8fafc] w-full min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-4 sm:px-8 lg:px-12">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* Left Column: Map & Info */}
                    <div className="flex flex-col gap-8 h-full">
                        {/* Map Placeholder */}
                        <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm relative shrink-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.887968393512!2d-74.08508568458797!3d40.96512307930514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fb9023472061%3A0xcf82498266491295!2s4%20Wilsey%20Square%2C%20Ridgewood%2C%20NJ%2007450!5e0!3m2!1sen!2sus!4v1676646700000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            ></iframe>
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-[#f1f4f8] p-8 rounded-2xl flex flex-col gap-6 flex-1">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-['Poppins'] font-semibold text-[#141d29] text-xl">Reach us by Phone</h3>
                                <div className="flex items-center mt-2">
                                    <PhoneIcon />
                                    <span className="font-['Poppins'] text-[#5865f2] text-lg">+1 (631) 867 2075</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="font-['Poppins'] font-semibold text-[#141d29] text-xl">Contact our Support Team</h3>
                                <div className="flex items-center mt-2">
                                    <EmailIcon />
                                    <span className="font-['Poppins'] text-[#5865f2] text-lg">support@integratebpd.com</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-2">
                                {/* Social Icons (Placeholders) */}
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-[#001c3e] flex items-center justify-center cursor-pointer hover:bg-[#5865f2] transition-colors">
                                        <div className="w-4 h-4 bg-white opacity-20" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-[#f1f4f8] p-8 sm:p-12 rounded-2xl flex flex-col justify-center">
                        <div className="mb-8">
                            <h1 className="font-['Poppins'] font-medium text-[#141d29] text-3xl sm:text-4xl leading-tight mb-4">
                                We look forward to hearing from you!
                            </h1>
                            <p className="font-['Poppins'] text-gray-500 text-base leading-relaxed">
                                Whether you have questions about our services, need support, or want to learn more about how Integrate BPD can assist you, please feel free to reach out to us. Our team is dedicated to providing you with the information and assistance you need.
                            </p>
                        </div>

                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <InputField label="Name" placeholder="Name" />
                            <InputField label="Email" placeholder="Email" type="email" />
                            <InputField label="Message" placeholder="Message" multiline />

                            <button
                                className="mt-4 w-full py-4 bg-[#001c3e] text-white font-['Poppins'] font-medium rounded-full hover:bg-[#5865f2] transition-colors shadow-lg"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                </div>
            </main>

            {/* <Footer /> */}
        </div>
    );
}
