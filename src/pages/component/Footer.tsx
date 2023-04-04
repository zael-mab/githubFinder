import {FaSlackHash} from 'react-icons/fa';

const Footer = () => {
    const footeryear = new Date().getFullYear();
  return (
    <footer className='footer p-3 bg-gray-600 footer-center'>
        <div className='p-1 text-white-100'>
            <FaSlackHash className='text-3xl text-indigo-400' />
            <p>
                Copyright
                <span className='text-indigo-400'> &copy; {footeryear} </span>
                All rights reserved
            </p>
        </div>
    </footer>
  );
};

export default Footer;
