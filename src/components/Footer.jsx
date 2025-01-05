import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4 fixed w-full z-40">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Ahasan's World</p>
            </aside>
        </footer>
    );
};

export default Footer;