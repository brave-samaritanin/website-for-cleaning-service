import classes from './AboutUs.module.css';

 const AboutUs = () => {
     return (
         <div id="About" className={classes.AboutUs}>
                 <div className={classes.Title}>
                     <h2>About Us</h2>
                 </div>
                 <div className={classes.Content}>
                     <p>
                     Welcome to Commercial Clean Service. We provide professional cleaning services in the in Cincinnati and surrounding areas. Clean Service specialises in office cleaning services, home cleaning services and move in/out services. We only use non-toxic cleaning products.
                     All cleaning prices include detail-clean rotations and routine site inspections to ensure your peace of mind.
                     </p>
                 </div>
         </div>
     );
 }
 export default AboutUs;
