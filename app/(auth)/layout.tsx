import Logo from "@/components/logo";
import Footer from "@/components/footer";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({
    children
}: AuthLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <nav className="h-[60px]">
                <div className="max-w-7xl mx-auto w-full h-full px-3 flex items-center">
                    <Logo />
                </div>
            </nav>
            {children}
            <Footer />
        </div>
    )
};

export default AuthLayout;