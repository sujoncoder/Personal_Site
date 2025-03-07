
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-500 to-slate-600 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-sm md:text-base">
                        © {year} হাসিব বিন মোহাম্মদ | Developed by{' '}
                        <a
                            href="https://sujon-sheikh.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-200 hover:underline hover:text-blue-300 transition duration-300"
                        >
                            Sujon Sheikh
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;