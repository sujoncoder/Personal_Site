
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-sm md:text-base">
                        ©২০২৫ হাসিব বিন মোহাম্মদ | Developed by{' '}
                        <a
                            href="https://sujon-sheikh.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition duration-300"
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