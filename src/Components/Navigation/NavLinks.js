 import './Navigation.css';

 const NavLinks = ({isClicked, closeMenu}) => {
     return ( 
         <nav className="NavLinks">
             <ul>
                 <li onClick={() => isClicked && closeMenu()}>
                     <a href="/#Hero">HOME</a>
                 </li>
                 <li onClick={() => isClicked && closeMenu()}>
                     <a href="/#Service">SERVICES</a>
                 </li>
                 <li onClick={() => isClicked && closeMenu()}>
                     <a href="/#About">ABOUT</a>
                 </li>
                 <li onClick={() => isClicked && closeMenu()}>
                     <a href="/#Contact">CONTACT</a>
                 </li>
             </ul>
             <button className='Button' type="button">
                 <span>Call us on:</span>
                 <span>(123) 456-78450</span>
             </button>
         </nav>
      );
 }

 export default NavLinks;
