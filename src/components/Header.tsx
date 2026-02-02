import { Link, useLocation } from "react-router-dom";
import imgLinkIntegrate from "@/assets/bdcedcd64a148ce17e04736baaa149e03bb5f5bf.png";
import { MobileMenu } from "./MobileMenu";


function LogoLink() {
    return (
        <Link to="/" className="h-[40px] relative shrink-0 w-[188.23px]" data-name="Link → Integrate">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Integrate BPD Logo" className="absolute left-0 max-w-none size-full top-0" src={imgLinkIntegrate} />
            </div>
        </Link>
    );
}

function NavLink({ to, label }: { to?: string, label: string }) {
    const location = useLocation();
    const isActive = to ? location.pathname === to : false;

    if (!to) {
        return (
            <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c7c93] text-[14px] whitespace-nowrap">
                    <p className="leading-[20px]">{label}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c7c93] text-[14px] whitespace-nowrap">
                <Link
                    to={to}
                    className={`leading-[20px] transition-colors ${isActive ? 'text-[#f07142]' : 'hover:text-[#5865f2]'}`}
                >
                    {label}
                </Link>
            </div>
        </div>
    );
}

function DesktopNav() {
    return (
        <div className="hidden lg:flex gap-[32px] items-center relative shrink-0" data-name="Nav">
            <NavLink label="How It Works" to="/how-it-works" />
            <NavLink label="Results" to="/results" />
            <NavLink label="About" to="/about" />
            <NavLink label="Contact Us" to="/contact" />
        </div>
    );
}

function LoginButton() {
    return (
        <div className="content-stretch hidden lg:flex h-[36px] items-center justify-center px-[16px] relative rounded-[10px] shrink-0" data-name="Client Login">
            <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c7c93] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">Client Login</p>
            </div>
        </div>
    );
}

function GetStartedButton() {
    return (
        <div className="hidden lg:flex h-[40px] items-center justify-center overflow-clip px-[20px] py-[8px] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Get Started" style={{ backgroundImage: "linear-gradient(135.04deg, rgb(238, 95, 43) 0%, rgb(242, 130, 90) 100%)" }}>
            <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[20px]">Get Started</p>
            </div>
        </div>
    );
}

function ActionButtons() {
    return (
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
            <LoginButton />
            <GetStartedButton />
        </div>
    );
}

function HeaderContent() {
    return (
        <div className="content-stretch flex justify-between w-full h-[80px] items-center relative shrink-0" data-name="Container">
            <LogoLink />
            <DesktopNav />
            <ActionButtons />
        </div>
    );
}

function HeaderContainer() {
    return (
        <div className="w-full max-w-[1400px] mx-auto relative shrink-0" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] min-w-0 px-4 sm:px-6 lg:px-8 relative">
                <HeaderContent />
            </div>
        </div>
    );
}

export function Header() {
    return (
        <div className="fixed backdrop-blur-[2px] bg-[rgba(248,250,252,0.95)] content-stretch flex flex-col items-center left-0 right-0 pb-px px-4 sm:px-6 lg:px-8 top-0 w-full z-50" data-name="Header">
            <MobileMenu />
            <div aria-hidden="true" className="absolute border-[#dfe5ec] border-b border-solid inset-0 pointer-events-none" />
            <HeaderContainer />
        </div>
    );
}
