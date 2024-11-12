import React,{useEffect, useState} from 'react';
import { CiSquarePlus } from "react-icons/ci";



const AppointmentDetails = () => {
    const [openSection, setOpenSection] = useState(null);


    const toggleAccordion = (section) => {
        console.log('Gi I ma bere')
        setOpenSection(openSection === section ? null : section); // Toggle section open/close
      };
      useEffect(()=>{
        console.log("The open section is : ",openSection)

      },[openSection])
    
    
  return (
    <div className='appointment-details-container'>

      <div className='doctor-details-container'>
        
        
        <div className='name-details'>
          <p>Atharv Adki</p>
          <p>ID:364858</p>
        </div>

        
        <div className='contact-details-container'>
            <div className='contact-details'>
              <p>Phone: 9322621450</p>
              <p>Email: micike4006@opposir.com</p>
            </div>
            <div className='personal-details'>
              <p>Gender: Male</p>
              <p>DOB: 8/23/2002</p>
            </div>
        </div>

        
        <div className='btn-container'>
          <button className='btn-1'>Show Medical History</button>
          <button className='btn-2'>Generate Invoice</button>
          <button className='btn-3'>Back</button>
        </div>
        
      </div>

      <div className='details-container'>
      
      <div className='additional-details-container'>

        
        <button onClick={() => toggleAccordion('additionalDetails')}>
            <CiSquarePlus size={30} />
        </button>
        
        <p>Additional Details</p>

         
        

        
        
        </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>Appointment Details</p>


      </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>Medicines</p>


      </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>Exercise</p>


      </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>To Do Procedures</p>


      </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>Completed Procedures In Current Appointment</p>


      </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>Treatment Plan</p>


      </div>


      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>Diagnosis</p>


      </div>

      <div className='additional-details-container'>

        <button>

        <CiSquarePlus size={30} />

        </button>
        <p>General Medical Info</p>


      </div>
      
      </div>

      <div className='submit-btn'>
        <button>Finish</button>
        <button>Download Prescription</button>

      </div>
    </div>
  );
};

export default AppointmentDetails;

