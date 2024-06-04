import './footer.css';
import HorizontalLine from "../HorizontalLine";

export default function Footer() {
    return (
        <div className='footer-container'>  
            <HorizontalLine />
            <p className='footer-text'>Thanks for visiting! There will be more to come. Check out how I made <a href="https://github.com/j-ackyao/j-ackyao.github.io">this website in React!</a></p>
        </div>
    );
}