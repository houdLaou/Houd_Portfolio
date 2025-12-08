import './Contact.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact(){
    return(
        <div id='contact' className="contact_section">
            <h1 style={{fontSize:"40px"}}>Contact Me</h1>
            <div className='paragraph'>If you want to contact me, just send a message via one of the links below</div>
            <div className="contact_info">
                <a href='https://www.facebook.com/hwd.l.wawjt'><FacebookIcon/></a>
                <a href='https://www.instagram.com/houd_dido?igsh=a2k1dndpZ2dxcW9o'><InstagramIcon/></a>
                <a href='https://www.linkedin.com/in/houd-laouaoudja-7ba648394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LinkedInIcon/></a>
                <a href='tel:+213656928567'><WhatsAppIcon/></a>
                <a href='https://github.com/houdLaou'><GitHubIcon/></a>
      </div>
        </div>
    );
}
