import './component.css'
export default function Component(){
    return(
        <div id='home' className='Component_section' >
            <div className='Description'>
                <p>Hello, I'm Houd</p>
                <div className='Product_Designer'>
                    <h1>Product</h1>
                    <h1>Designer</h1>
                </div>
                based in Algeria
                <div className="Resume"><div className="Block">Resume</div></div>
            </div>
            <div className='Photos' >
                <img src="Photo_profile.jpg" className='Photo_Profile' alt="Portfolio project screenshot"></img>
                <img src="Group 10.png" className='Photo_top' alt=''></img>
                <img src="Group 6.png" className='photo_bottom' alt=''></img>
            </div>
        </div>
    )
}