 import classes from './CompanyInformation.module.css';
 import {FiPhoneCall} from 'react-icons/fi';
 import {FaAddressBook} from 'react-icons/fa';

 const phone = <FiPhoneCall color='black' size='15px'/>
 const address = <FaAddressBook color='black' size='18px'/>

 const CompanyInformation = () => {
     return (
         <div className={classes.Information}>
                 <div className={classes.Address}>
                     <h3>Office Address</h3>
                     <div className={classes.icon}>{address}</div>
                     <p>4 Main Street, Cincinnati,</p>
                     <p>Ohio.</p>
                 </div>
                 <div className={classes.Phone}>
                     <h3>Get in touch with us</h3>
                     <div className={classes.icon}>{phone}</div>
                     <p>(123) 456-78450</p>
                     <p>Available 8am - 5pm daily.</p>
                 </div>
             </div>
     );
 }

 export default CompanyInformation;
