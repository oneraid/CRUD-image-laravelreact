import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        // Navigate to the product management page when "Learn More" is clicked
        navigate('/pictures');
    };

    return (
        <div id='home' className="home w-full h-screen  bg-cover px-5 lg:px-[72px]">
            <div className='h-screen max-w-[700px] flex flex-col justify-center gap-y-5'>
                <h1 className="font-bold text-brown text-[30px]">
                    WELCOME TO OUR IMAGE GALLERY
                </h1>
                <h1 className="font-bold text-5xl"> 
                    Let's Explore and Store Your Favorite Images
                </h1>
                <p className='max-w-[500px]'>
                    Our gallery app allows you to easily store and manage your favorite images. Organize your memories and enjoy the convenience of accessing them anytime.
                </p>
                <div>
                    <button onClick={handleLearnMoreClick}
                        className='pc-6 lg:px-8 py-2 bg-lightbrown text-black outline-none rounded-full hover:bg-brown hover:text-white'>
                        Start Now!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
