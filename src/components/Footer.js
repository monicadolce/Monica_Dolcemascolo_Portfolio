import React from 'react';
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='text-center'>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        < TwitterShareButton
                            url={'https://twitter.com/MonicaDolcemas2'}
                        >
                            <TwitterIcon className='mx-3' size={36} />
                        </TwitterShareButton>
                        < LinkedinShareButton
                            url={'https://www.linkedin.com/in/monica-d-a3213921b/'}
                        >
                            <LinkedinIcon className='mx-3' size={36} />
                        </LinkedinShareButton>
                    </div>
                    <p className='pt-3 text-center'>© 2022 Monica's Portfolio Copyright </p>
                </div>
            </div>
        </div>
    )
}

export default Footer