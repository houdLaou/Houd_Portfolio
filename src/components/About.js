import './About.css'
export default function About(){
    return(
        <div id='about' className="About-section">
            <h1 className='title'>about.</h1>
            <div className='description'>I’m Houd Laouaoudja, a passionate front-end developer with a solid computer science foundation from <strong>ESI</strong>. 
            I enjoy transforming ideas into interactive, user-friendly digital experiences using <strong>HTML</strong>, <strong>CSS</strong>, 
    <strong>JavaScript</strong>, and <strong>React.js</strong>.</div>
            <div className='Detailes'>
                <ul>
                    <li className='detaile'>I’ve built projects like a <strong>To-Do List app</strong>, a <strong>Weather website</strong>, 
                        all emphasizing clean design and smooth interactions. These projects helped me 
                        refine skills in front-end development, dynamic data handling, and user-centered design.
                    </li>
                    <li className='detaile'>
                        Recently, I’ve started exploring backend development with <strong>Node.js</strong> and <strong>MongoDB/Mongoose</strong>, 
                        aiming to become a full-stack developer capable of managing both server logic and front-end interfaces. 
                        For me, web development is a mix of creativity and logic — building meaningful, accessible, and enjoyable digital products.
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}