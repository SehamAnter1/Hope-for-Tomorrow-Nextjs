export default function Auth_Layout({children, className}) {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden">
            <div className={`flex items-center  justify-center p-6 md:p-16 ${className} `}>{children}</div>
            <div className="bg-primary hidden md:flex justify-center items-center">
                <img src="/auth-illustration.svg" alt="Illustration" className="w-[80%] object-contain" />
            </div>
        </div>
    );
}
