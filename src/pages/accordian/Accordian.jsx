import React  from 'react'
import "./accordian.scss";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Accordian = () => {

  

  return (
    <div className='acco'>
        <div className="acco_main">
            <div className="acco_main_1">
              <div className="acco_main_1_heading">
                <p>What’s on your mind</p>
                <h1>Ask Questions</h1>
              </div>

            </div>
            <div className="acco_main_2">

              <div className="acco_main_accordian">
                <Accordion className='accordian' >
                  <AccordionSummary
                    expandIcon={ <AddRoundedIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='accordian_heading' >Do you offer freelancers ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='accordian_detail' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='accordian' >
                  <AccordionSummary
                    expandIcon={<AddRoundedIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='accordian_heading' >What’s the guarantee that I will be satisfied
with the hired talent ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='accordian_detail' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='accordian' >
                  <AccordionSummary
                    expandIcon={<AddRoundedIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='accordian_heading' >Can I hire multiple talents at once ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='accordian_detail' >
                    If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='accordian' >
                  <AccordionSummary
                    expandIcon={<AddRoundedIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='accordian_heading' >Why should I not go to an agency directly ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='accordian_detail' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className='accordian' >
                  <AccordionSummary
                    expandIcon={<AddRoundedIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography className='accordian_heading' >Who can help me pick a right skillset
and duration for me ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='accordian_detail' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

              </div>
                
            </div>

        </div>

    </div>
  )
}

export default Accordian