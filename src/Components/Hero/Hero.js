import classes from './Hero.module.css';
import image from './../../Images/background3.jpg';

const Hero = () => {
    return(
        <div id='Hero' className={classes.Hero} style={{ backgroundImage: `url(${image})`, 
        backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className={classes.Container1}>
                <h1>Professional Cleaning Service <p>in Cincinnati</p>
                <h3>We clean. You relax.</h3></h1>
            </div>
        </div>
    );
}
export default Hero;
