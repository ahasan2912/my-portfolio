import errorpages from '../assets/errorpage.png'

const ErrorPages = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 h-screen px-6'>
            <h1 className='text-5xl font-bold text-gray-700 text-center'>Page Not Found 404!</h1>
            <img className='w-full md:w-[700px] rounded-lg' src={errorpages} alt="errorpages photo" />
        </div>
    );
};

export default ErrorPages;