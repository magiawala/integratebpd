import { Link } from "react-router-dom";
import imgIntegrate from "@/assets/5402555b754bc317d46ff14ba54fee2dadc3b87b.png";
import imgInput from "@/assets/5c60c7c76941ca9dfaba2707e2a4ab395c21ed2e.png";
import svgPaths from "../imports/svg-qxyq0s3r5u";

// Reusable Components
function FooterHeading({ text }: { text: string }) {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] w-full">
                <p className="leading-[24px] whitespace-pre-wrap">{text}</p>
            </div>
        </div>
    );
}

function FooterLink({ text, href = "#" }: { text: string, href?: string }) {
    return (
        <div className="content-stretch flex flex-col items-start pb-[1.25px] pt-[2.75px] relative shrink-0 w-full group cursor-pointer">
            <Link to={href} className="content-stretch flex items-start relative shrink-0">
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(248,250,252,0.7)] whitespace-nowrap group-hover:text-white transition-colors">
                    <p className="leading-[20px] text-[14px]">{text}</p>
                </div>
            </Link>
        </div>
    );
}

function SocialIcon({ path }: { path: string }) {
    return (
        <div className="contents">
            <div className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-80 transition-opacity">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g>
                        <path d={path} stroke="var(--stroke-0, #5865F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

function SubscribeButton() {
    return (
        <div className="content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[99px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundImage: "linear-gradient(135.04deg, rgb(238, 95, 43) 0%, rgb(242, 130, 90) 100%)" }}>
            <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                <p className="leading-[24px]">Subscribe</p>
            </div>
        </div>
    );
}

function NewsletterForm() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[rgba(248,250,252,0.1)] content-stretch flex gap-[12px] h-[48px] items-center justify-between overflow-clip pl-[20px] pr-[4px] relative rounded-[99px] shrink-0 w-full">
                <div className="content-stretch flex flex-1 items-start relative shrink-0">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent border-none outline-none text-[16px] text-white placeholder-[rgba(248,250,252,0.5)] w-full font-['Poppins:Regular',sans-serif]"
                    />
                </div>
                <SubscribeButton />
            </div>
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[24px] items-start pt-[4px] relative shrink-0 w-[24px]">
                    <div className="relative shrink-0 size-[20px]">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgInput} />
                        </div>
                    </div>
                </div>
                <div className="content-stretch flex flex-1 flex-col items-start relative shrink-0">
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.7)] w-full">
                        <p className="leading-[20px] whitespace-pre-wrap">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Columns

function LinksColumn() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[190.67px]">
            <FooterHeading text="Links" />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <FooterLink text="Home" href="/" />
                <FooterLink text="About Us" href="/about" />
                <FooterLink text="Results" href="#" />
                <FooterLink text="Client Login" href="#" />
            </div>
        </div>
    );
}

function ResourcesColumn() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[190.67px]">
            <FooterHeading text="Resources" />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <FooterLink text="Blog" />
                <FooterLink text="FAQ" />
                <FooterLink text="Support" />
                <FooterLink text="Community" />
            </div>
        </div>
    );
}

function LegalColumn() {
    return (
        <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[190.67px]">
            <FooterHeading text="Legal" />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <FooterLink text="Terms of Service" />
                <FooterLink text="Privacy Policy" />
                <FooterLink text="Cookie Policy" />
                <FooterLink text="Accessibility" />
            </div>
        </div>
    );
}

function BrandColumn() {
    return (
        <div className="content-stretch flex flex-1 flex-col gap-[24px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="h-[48px] relative shrink-0 w-[225.88px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="Integrate Logo" className="absolute left-0 max-w-none size-full top-0" src={imgIntegrate} />
                    </div>
                </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(248,250,252,0.7)] w-full">
                    <p className="leading-[24px] whitespace-pre-wrap">Empowering individuals on their journey to mental wellness through structured, evidence-based therapy.</p>
                </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                {/* Replaced invalid icon path with valid ones or placeholders */}
                <SocialIcon path={svgPaths.pd04fc00} />
            </div>
        </div>
    );
}


function FooterTop() {
    return (
        <div className="content-stretch flex gap-[64px] items-start justify-center relative shrink-0 w-full">
            <BrandColumn />
            <div className="content-stretch flex gap-[32px] items-start justify-center relative self-stretch shrink-0 w-[636px]">
                <LinksColumn />
                <ResourcesColumn />
                <LegalColumn />
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-[400px]">
                <div className="content-stretch flex flex-col items-start min-w-[325px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] w-full">
                        <p className="leading-[24px] whitespace-pre-wrap">Subscribe to our newsletter for the latest updates on BPD research and treatment.</p>
                    </div>
                </div>
                <NewsletterForm />
            </div>
        </div>
    );
}

function ContactInfoItem({ title, value }: { title: string, value: string }) {
    return (
        <div className="relative shrink-0 w-[429.33px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.5)] w-full">
                        <p className="leading-[20px] whitespace-pre-wrap">{title}</p>
                    </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[16px] w-full">
                        <p className="leading-[24px] whitespace-pre-wrap">{value}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FooterMiddle() {
    return (
        <div className="content-stretch flex gap-[24px] items-start justify-center pb-[32px] pt-[33px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(248,250,252,0.1)] border-solid border-t inset-0 pointer-events-none" />
            <ContactInfoItem title="Phone Inquiries" value="(800) 123-4567" />
            <ContactInfoItem title="Our Address" value="123 Therapy Lane, Wellness City, WC 12345" />
            <ContactInfoItem title="Hours of Operation" value="Monday-Friday 9AM-6PM EST" />
        </div>
    );
}

function CopyrightBar() {
    return (
        <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[rgba(248,250,252,0.1)] border-solid border-t inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start pb-[24px] pt-[25px] px-[62px] relative w-full">
                <div className="relative shrink-0 w-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">
                                <p className="leading-[20px]">© 2024 Integrate BPD. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(248,250,252,0.6)] whitespace-nowrap">
                                <p className="leading-[20px]">*Integrate is a structured program and platform for those with BPD, not a substitute for medical treatment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <div className="bg-[#11233b] content-stretch flex flex-col items-center relative shrink-0 w-full px-4 sm:px-6 lg:px-8" data-name="Footer">
            <div className="w-full max-w-[1400px] mx-auto relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-[48px] items-start max-w-[inherit] min-w-0 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[80px] relative w-full">
                    <FooterTop />
                    <FooterMiddle />
                </div>
            </div>
            <CopyrightBar />
        </div>
    );
}
