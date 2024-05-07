import React from 'react';
import "./home.scss";

import image from "../../assets/image/image 32618.png";
import rocket from '../../assets/image/Frame.png';
import spark from "../../assets/image/spark.png";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
// import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='home' >
        <div className="home_heading">
            <p>Success stories</p>
            <h1>Every success journey <br /> we’ve encountered.</h1>

            <div className="home_middle">
                <div className="home_middle_img">
                    <img src={image} alt="" />

                    <div className="middle_10days">
                        <div className="a10days_img">
                            <img src={rocket} alt="" />

                        </div>
                        <div className="a10days_content">
                            <h1>10 days</h1>
                            <p>Staff Deployment</p>
                        </div>
                        
                    </div>

                    <div className="middle_40">
                        <img src={spark} alt="" />
                        <h1>40%</h1>
                        <p>Achieved reduction in <br /> project execution time <br /> by optimising team <br /> availability</p>
                    </div>

                    <div className="middle_05">
                        <h1>$0.5 <span>MILLION</span> </h1>
                        <p>Reduced client expenses <br /> by saving on hiring and <br /> employee costs.</p>

                    </div>

                </div>

                <div className="home_middle_action">
                    <h1>Enhance fortune 50 <br /> company’s insights <br /> teams research <br /> capabilities</h1>

                    <div className="dots">
                        <div className="dot"><FiberManualRecordIcon className='dot1' /></div>
                        <div className="dot"><FiberManualRecordIcon className='dot2' /></div>
                        <div className="dot"><FiberManualRecordIcon className='dot3' /></div>
                    </div>

                    <button>Explore More <ArrowForwardRoundedIcon className='icon5' /> </button>

                </div>

            </div>



        </div>

    </div>
  )
}

export default Home