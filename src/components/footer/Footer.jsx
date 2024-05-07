import React from 'react'
import "./footer.scss"

import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';


const Footer = () => {
  return (
    <div className="footer_main">
      <div className='footer'>
            <p> <CopyrightRoundedIcon className='icon'/> Talup 2023. All rights reserved</p>

            <div className="footer_terms">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>

            </div>

          </div>
    </div>
    
  )
}

export default Footer