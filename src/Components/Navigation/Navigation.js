 import DesktopNavigation from './DesktopNavigation';
 import MobileNavigation from './MobileNavigation';
 import './Navigation.css';

 const Navigation = () => {
     return(
         <div className='Navigation'>
             <DesktopNavigation />
             <MobileNavigation />
         </div>
     )
 }
 export default Navigation;