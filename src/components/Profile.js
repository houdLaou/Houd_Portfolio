import './Profile.css'
export default function Component(){
    return(
        <div id='home' className='Component_section' >
            <div className='Description'>
                <p>Hello, I'm Houd</p>
                <div className='Product_Designer'>
                    <h1>Software</h1>
                    <h1>Developer</h1>
                </div>
                <span className="location-tag">📍 Jijel, Algeria</span>
                <div className="Action_Buttons">
                    <div className="Resume"><a href='#about'><div className="Block">About Me</div></a></div>
                    <div className="Resume"><a href='/CV.pdf' target='_blank' rel='noreferrer'><div className="Block cv-block">View My CV</div></a></div>
                </div>
            </div>
            <div className='Photos' >
                <img src="Photo_profile.jpg" className='Photo_Profile' alt="Houd Laouaoudja"></img>
                <img src="Group 10.png" className='Photo_top' alt=''></img>
                <img src="Group 6.png" className='photo_bottom' alt=''></img>
            </div>
        </div>
    )
}