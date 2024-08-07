import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className='container mx-auto px-4 py-3'>
                <div className='flex justify-between items-center'>
                    <Link href="/" className='text-xl font-bold'>
                        Oscar Karuga N
                    </Link>
                    <div className='space-x-4'>
                        <Link href="/" className='hover:text-gray-300'>Home</Link>
                        <Link href="/projects" className='hover:text-gray-300'>Projects</Link>
                        <Link href="/essays" className='hover:text-gray-300'>Essays</Link>
                    </div>
                </div>
           </div>
        </nav>
    );
};

export default Navbar;