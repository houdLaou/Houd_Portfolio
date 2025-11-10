import { Margin } from '@mui/icons-material';
import './Work.css'
export default function Work(){
    return(
        <div id='work' className="work_section">
            <h1 className='title'>work.</h1>
            <div className='description'>Here are some of the projects I’ve worked on, 
                showcasing my skills in front-end development, UI/UX design, and full-stack learning. 
                Each project reflects my approach to building clean, interactive, and user-centered digital experiences.
            </div>
            <div className='detailes'>
                <div className='work-info'>
                    <h3 style={{textAlign:"center"}}>Weather website</h3>
                    <img className='photo-work' src="Weather_project.png" style={{width:"100%"}}></img>
                    <div className='date' >September 9, 2025</div>
                    <p className='detailes-photo'>A website that displays real-time weather data for any city 
                        using a public API. Built with HTML, CSS, and JavaScript, it features a clean, 
                        minimal interface and dynamic updates. This project helped me strengthen my skills
                        in API integration and responsive design.
                    </p>
                </div>
                <div className='work-info'>
                    <h3 style={{textAlign:"center"}}>To-do list</h3>
                    <img className='photo-work' src="To-Do-list.png" style={{width:"100%"}}></img>
                    <div className='date' >August 27, 2025</div>
                    <p className='detailes-photo'>A simple yet functional productivity tool to organize daily tasks. 
                        Developed with HTML, CSS, and JavaScript, it supports adding, editing, marking, and deleting tasks.
                        This project improved my understanding of DOM manipulation and local storage for persistent data.
                    </p>
                </div>
                <div className='work-info'>
                    <h3 style={{textAlign:"center"}}>CRUD</h3>
                    <img className='photo-work' src="CRUD.png" style={{width:"100%"}}></img>
                    <div className='date' >August 11, 2025</div>
                    <p className='detailes-photo'>A web application that demonstrates full Create, Read, Update,
                        and Delete functionality for managing data records. Built with HTML, CSS, and JavaScript, 
                        it stores information locally using the browser’s localStorage. This project helped me 
                        understand data manipulation, dynamic UI updates, and core CRUD operations without a backend.
                    </p>
                </div>
                <div className='work-info'>
                    <h3 style={{textAlign:"center"}}>Portfolio</h3>
                    <img className='photo-work' src="Portfolio.png" style={{width:"100%"}}></img>
                    <div className='date' >November 04, 2025</div>
                    <p className='detailes-photo'>A personal portfolio built with HTML, CSS, and React.js, showcasing my 
                        projects and design approach. It focuses on clarity, accessibility, and smooth navigation, 
                        reflecting my skills in front-end design and responsive web development.
                    </p>
                </div>
            </div>
        </div>
    );
}