import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './content.css';

export default function content(){
    return(
        <div className='Content-body-up'>
            <div className='Content_body'>
                <h2 className='Name' >Houd Laouaoudja</h2>
                <div className='nav-links'>
                    <a href='#home' style={{color:"black",textDecoration:"none"}}><p>Home</p></a>
                    <a href='#about' style={{color:"black",textDecoration:"none"}}><p>About</p></a>
                    <a href='#work' style={{color:"black",textDecoration:"none"}}><p>Work</p></a>
                    <a href='#contact' style={{color:"black",textDecoration:"none"}}><p>contact</p></a>
                </div>
                {/* <div className='images_app'>
                    <div className='images'>
                        <img src='medium-4 1.png'></img>
                        <img src='behance-2 1.png'></img>
                        <img src='twitter-6 1.png'></img>
                    </div>
                </div> */}
            </div>
        </div>
    )
}