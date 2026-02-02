import imgChart from "@/assets/chart.png";

function StatCard({ percentage, title, description }: { percentage: string, title: string, description: string }) {
    return (
        <div className="bg-white p-6 rounded-[20px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(0,0,0,0.05)] border border-[rgba(223,229,236,0.5)] flex flex-col gap-4 w-full sm:w-[320px]">
            <div className="flex items-center justify-center size-[60px] rounded-full bg-[#eff6ff] text-[#5865f2] font-['Poppins:Bold',sans-serif] text-[20px]">
                {percentage}
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#141d29]">{title}</h4>
                <p className="font-['Poppins:Regular',sans-serif] text-[#6c7c93] text-[14px] leading-[24px]">{description}</p>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <div className="bg-[#11233b] relative w-full flex flex-col items-center justify-center py-24 sm:py-32 lg:py-40">
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left gap-6 max-w-[600px]">
                    <h1 className="font-['Poppins:SemiBold',sans-serif] text-[14px] sm:text-[16px] text-[#f8fafc] tracking-[0.1em] uppercase">
                        Results
                    </h1>
                    <h2 className="font-['Poppins:Medium',sans-serif] text-[#f8fafc] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-tight">
                        Impact driven with <span className="text-[#5865f2]">Proven Outcomes</span>
                    </h2>
                    <p className="font-['Poppins:Regular',sans-serif] text-[rgba(248,250,252,0.8)] text-[16px] sm:text-[18px] leading-[1.6]">
                        Our community is dedicated to recovery. With our evidence-based approach and structured program, we help you build a life worth living.
                    </p>
                </div>

                {/* Right Cards */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <StatCard
                        percentage="73%"
                        title="Symptom Improvement"
                        description="Clients experienced significant symptom reduction after completing the 12-week program."
                    />
                    <StatCard
                        percentage="79%"
                        title="Inner Growth"
                        description="Achieved meaningful personal growth and better emotional regulation skills over time."
                    />
                </div>
            </div>
        </div>
    );
}

function CaseStudyCard({ name, stats, chartImage }: { name: string, stats: { label: string, value: string }[], chartImage: string }) {
    return (
        <div className="bg-white p-6 sm:p-8 rounded-[32px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[#dfe5ec] flex flex-col gap-6 w-full h-full justify-between">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="size-[48px] sm:size-[60px] rounded-full bg-[#11233b]" />
                        <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#11233b] leading-tight">{name}</h3>
                    </div>
                    <span className="self-start px-4 py-2 bg-[#f07142] text-white text-[10px] font-['Poppins:SemiBold',sans-serif] rounded-full uppercase tracking-wider">
                        High Risk Profile
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#dfe5ec]">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <span className="font-['Poppins:SemiBold',sans-serif] text-[10px] text-[#6c7c93] uppercase tracking-wide">{stat.label}</span>
                            <span className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#141d29]">{stat.value}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#11233b]">BPD Score Progression</h4>
                    {/* Chart Image */}
                    <div className="w-full bg-[#eff6ff] rounded-[16px] p-4 flex items-end h-[200px]">
                        <img src={chartImage} alt="Chart showing BPD score progression" className="w-full h-full object-contain object-bottom" />
                    </div>
                </div>
            </div>

            <button className="w-full mt-4 py-3 border border-[#5865f2] text-[#5865f2] hover:bg-[#5865f2] hover:text-white font-['Poppins:SemiBold',sans-serif] rounded-full transition-all">
                View Case Study
            </button>
        </div>
    );
}

function CaseStudies() {
    return (
        <div className="w-full bg-[#f8fafc] py-20 sm:py-32 px-4 sm:px-6 lg:px-8 flex flex-col gap-12 items-center">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[#11233b] text-[32px] sm:text-[40px] text-center">
                Real Patient Results
            </h2>
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <CaseStudyCard
                    name="J* Martin Case Study"
                    stats={[
                        { label: "Duration", value: "12 Weeks" },
                        { label: "Starting Score", value: "45/50 (Severe)" },
                        { label: "Ending Score", value: "12/50 (Mild)" },
                        { label: "Outcome", value: "Remission" },
                    ]}
                    chartImage={imgChart}
                />
                <CaseStudyCard
                    name="B* Kirby Case Study"
                    stats={[
                        { label: "Duration", value: "16 Weeks" },
                        { label: "Starting Score", value: "42/50 (Severe)" },
                        { label: "Ending Score", value: "15/50 (Mild)" },
                        { label: "Outcome", value: "Remission" },
                    ]}
                    chartImage={imgChart}
                />
                <CaseStudyCard
                    name="D* Sanders Case Study"
                    stats={[
                        { label: "Duration", value: "10 Weeks" },
                        { label: "Starting Score", value: "48/50 (Critical)" },
                        { label: "Ending Score", value: "18/50 (Moderate)" },
                        { label: "Outcome", value: "Significant Improvement" },
                    ]}
                    chartImage={imgChart}
                />
            </div>
        </div>
    );
}

function SectionContact() {
    return (
        <div className="bg-[#11233b] py-24 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[#f8fafc] text-[32px] sm:text-[40px]">We are here for you</h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[rgba(248,250,252,0.8)] text-[16px] sm:text-[18px] max-w-[600px]">
                Whether you need immediate assistance, crisis support, or simply have questions about our program, our team is here to help you with the information and care you need.
            </p>
            <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#f07142] hover:bg-[#d65d30] text-white font-['Poppins:SemiBold',sans-serif] rounded-full transition-colors">
                    Get Started
                </button>
                <button className="px-8 py-3 bg-transparent border border-[rgba(248,250,252,0.3)] hover:bg-[rgba(248,250,252,0.1)] text-white font-['Poppins:SemiBold',sans-serif] rounded-full transition-colors">
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default function Results() {
    return (
        <div className="bg-[#f8fafc] w-full min-h-screen">
            <Hero />
            <CaseStudies />
            <SectionContact />
        </div>
    );
}
