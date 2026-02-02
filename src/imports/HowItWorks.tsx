import { useScrollReveal } from "../hooks/useScrollReveal";

// Icons (Placeholders using simple SVGs or Lucide if available later, for now using simple shapes)
function IconPlaceholder({ color = "#5865f2" }: { color?: string }) {
    return (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[${color}]/10`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
        </div>
    );
}

function Hero() {
    return (
        <div className="bg-[#11233b] relative w-full flex flex-col items-center justify-center py-24 sm:py-32 lg:py-40">
            <div className="w-full max-w-[1000px] px-4 sm:px-8 flex flex-col items-start text-left gap-6">
                <h1 className="font-['Poppins:SemiBold',sans-serif] text-[14px] sm:text-[16px] text-[#f8fafc] tracking-[0.1em] uppercase">
                    How It Works
                </h1>
                <h2 className="font-['Poppins:Medium',sans-serif] text-[#f8fafc] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.1] tracking-tight">
                    Welcome to the <span className="text-[#5865f2]">Integrate BPD Program</span>
                </h2>
                <p className="font-['Poppins:Regular',sans-serif] text-[rgba(248,250,252,0.8)] text-[16px] sm:text-[18px] leading-[1.6] max-w-[600px]">
                    Your journey toward understanding and healing from Borderline Personality Disorder (BPD) begins here. This guide will help you make the most of the tools and resources available to you.
                </p>
                <div className="mt-2">
                    <a
                        href="#step-1"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center justify-center px-8 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white font-['Poppins:SemiBold',sans-serif] text-[16px] rounded-full transition-all shadow-[0_4px_14px_0_rgba(88,101,242,0.39)] hover:shadow-[0_6px_20px_rgba(88,101,242,0.23)] hover:-translate-y-[1px]"
                    >
                        Explore
                    </a>
                </div>
            </div>
        </div>
    );
}

function StepSection({ number, title, children, id }: { number: string, title: string, children: React.ReactNode, id?: string }) {
    return (
        <div id={id} className="flex flex-col gap-8 py-12 border-b border-[#dfe5ec] last:border-0 relative">
            <div className="flex flex-col gap-2">
                <span className="font-['Poppins:Bold',sans-serif] text-[32px] sm:text-[40px] text-[#11233b]">
                    Step {number}
                </span>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] sm:text-[24px] text-[#141d29]">
                    {title}
                </h3>
            </div>
            <div className="flex flex-col gap-8">
                {children}
            </div>
        </div>
    );
}

function TextBlock({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-['Poppins:Regular',sans-serif] text-[#6c7c93] text-[16px] leading-[26px]">
            {children}
        </p>
    );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon?: React.ReactNode }) {
    return (
        <div className="bg-white p-6 rounded-[20px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05),0px_10px_15px_-3px_rgba(0,0,0,0.05)] border border-[rgba(223,229,236,0.5)] flex flex-col gap-4 h-full">
            {icon && <div className="mb-2">{icon}</div>}
            <h4 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#141d29]">
                {title}
            </h4>
            <p className="font-['Poppins:Regular',sans-serif] text-[#6c7c93] text-[14px] leading-[24px]">
                {description}
            </p>
        </div>
    );
}

function Content() {
    return (
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 py-12 sm:py-20 flex flex-col">
            {/* Step 1 */}
            <StepSection number="1" title="Get started with integration therapy" id="step-1">
                <TextBlock>
                    The core of the Integrate BPD Program is <strong className="text-[#141d29]">Reality Integration Therapy™ (RIT)</strong>, a unique approach designed to address the root causes of BPD by integrating fragmented object relations and identity diffusion. The program provides clear, step-by-step instructions to guide you through the therapy process.
                </TextBlock>
                <TextBlock>
                    To begin, familiarize yourself with the foundational concepts of RIT, which you can find on our platform.
                </TextBlock>
            </StepSection>

            {/* Step 2 */}
            <StepSection number="2" title="Explore Self-Administered Therapy">
                <TextBlock>
                    Integrate BPD offers a self-administered and self-paced therapy option, allowing you to work through the program on your own schedule.
                </TextBlock>
                <TextBlock>
                    Once you log in, you’ll have access to a series of therapeutic modules, reflective prompts, and video content. The platform is designed to be intuitive, making it easy to track your progress and revisit any sections as needed.
                </TextBlock>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <FeatureCard
                        title="Self-Administered"
                        description="Allowing full control over the healing process, fostering a deep sense of ownership and engagement."
                        icon={<IconPlaceholder color="#5865f2" />}
                    />
                    <FeatureCard
                        title="Root Cause Analysis"
                        description="Understanding the root cause of BPD, 'Identity Diffusion' (where a child's personality remains split and undeveloped), is key to our approach."
                        icon={<IconPlaceholder color="#5865f2" />}
                    />
                </div>
            </StepSection>

            {/* Step 3 */}
            <StepSection number="3" title="Utilize Our Measurement Tools">
                <TextBlock>
                    To help you better understand your journey and track your progress, Integrate BPD includes clinically validated and proprietary measurement tools tailored to individuals with BPD.
                </TextBlock>
                <TextBlock>
                    Access these tools between each module of the program to measure your progress from beginning to end, making sure that you have achieved true integration and healing.
                </TextBlock>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <FeatureCard
                        title="Measurement Tools"
                        description="Regular evaluations track progress and integration, highlighting areas needing improvement to ensure complete integration."
                        icon={<IconPlaceholder color="#36d399" />}
                    />
                    <FeatureCard
                        title="Access Tools Between Modules"
                        description="Measure your progress from beginning to end, making sure that you have achieved true integration and healing."
                        icon={<IconPlaceholder color="#36d399" />}
                    />
                </div>
            </StepSection>

            {/* Step 4 */}
            <StepSection number="4" title="Engage with Support Resources">
                <TextBlock>
                    Navigating BPD can be challenging, and having support is crucial. The Integrate BPD platform includes a variety of resources to help you along the way. From informative educational resources, videos, and community forums where you can connect with others on a similar journey, these resources are designed to offer support, education, and encouragement.
                </TextBlock>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <FeatureCard
                        title="Community Focused"
                        description="Our community-driven platform fosters collaboration, offering both peer and expert support throughout the healing process."
                        icon={<IconPlaceholder color="#f07142" />}
                    />
                </div>
            </StepSection>

            {/* Step 5 */}
            <StepSection number="5" title="Reach Out to Our Team">
                <TextBlock>
                    If you need additional guidance or support, our team is here to help. You can reach our to us through the platform and speak to an RIT specialist at any time.
                </TextBlock>
                <TextBlock>
                    Whether you have questions about the therapy process, need help with the platform or your personal struggles, or want to share your progress, we’re here to assist you every step of the way.
                </TextBlock>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <FeatureCard
                        title="Contact an RIT Specialist any time"
                        description="Our community-driven platform fosters collaboration, offering both peer and expert support throughout the healing process."
                        icon={<IconPlaceholder color="#5865f2" />}
                    />
                </div>
            </StepSection>

            {/* Step 6 */}
            <StepSection number="6" title="Stay Committed and Monitor Progress">
                <TextBlock>
                    Healing and integration are continuous processes, and staying committed to your therapy is key to achieving your goals. Use the program’s tracking features to monitor your progress and celebrate milestones.
                </TextBlock>
                <div className="bg-[#f8fafc] border border-[rgba(88,101,242,0.2)] rounded-[16px] p-6 mt-4">
                    <p className="font-['Poppins:Medium',sans-serif] text-[#141d29] text-[16px] mb-2">Remember</p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#6c7c93] text-[16px]">
                        The journey is <strong className="text-[#5865f2]">unique</strong> for everyone, so take your time and be patient with yourself.
                    </p>
                </div>
            </StepSection>

            {/* Step 7 */}
            <StepSection number="7" title="Embrace Your Growth">
                <TextBlock>
                    As you move through the Integrate BPD program, you’ll begin to notice changes in your thoughts, behaviors, and relationships. Embrace these changes as signs of your growth and progress. The program is designed to help you not only manage symptoms but also achieve a true lasting integration.
                </TextBlock>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <FeatureCard
                        title="Holistic Integration"
                        description="Our approach emphasizes the holistic integration of fragmented personality aspects, promoting full-spectrum healing."
                        icon={<IconPlaceholder color="#36d399" />}
                    />
                </div>
            </StepSection>

            {/* Conclusion */}
            <div className="py-12 flex flex-col gap-4">
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[32px] sm:text-[40px] text-[#11233b]">
                    Conclusion
                </h3>
                <h4 className="font-['Poppins:Medium',sans-serif] text-[20px] text-[#141d29]">
                    Your Path to Integration
                </h4>
                <TextBlock>
                    The Integrate BPD program is here to guide you on your journey toward healing and self-discovery. By following these steps and utilizing the resources available, you’ll be well on your way to integrating the fragmented parts of your identity and building a more cohesive and fulfilling life.
                </TextBlock>
                <TextBlock>
                    If you ever feel lost or need extra support, remember that you’re not alone and you can reach out to us at any time at <a href="mailto:support@RITAcademyBPD.com" className="text-[#5865f2] hover:underline">support@RITAcademyBPD.com</a>. Our team, resources, and community are here to support you every step of the way. Take it one step at a time, and trust in the process. Your journey toward integration and healing starts here.
                </TextBlock>
            </div>

        </div>
    );
}

export default function HowItWorks() {
    useScrollReveal();

    return (
        <div className="bg-white content-stretch flex flex-col items-start relative size-full overflow-x-hidden min-h-screen" data-name="How It Works Page">
            <Hero />
            <Content />
        </div>
    );
}
