import './About.css'
export default function About(){
    return(
        <div id='about' className="About-section">
            <h1 className='title'>about.</h1>
            <div className='description'>
                I'm <strong>Houd Laouaoudja</strong>, a motivated 3rd-year Computer Science student at{' '}
                <strong>ESI Algeria</strong> .
                I have a strong passion for <strong>web development</strong>,
                and software engineering — building real-world projects that span React web apps,
                C data structures, and connected embedded systems using ESP32.
            </div>
            <div className='Detailes'>
                <ul>
                    <li className='detaile'>
                        <strong>Education:</strong> École Nationale Supérieure d'Informatique (ESI) — Algiers, Algeria.
                        1st Year - 2nd Cycle Class in Computer Science (1CS) | 2024 – Present.
                        Relevant coursework: Algorithms, Data Structures (arrays, trees, FIFO/LIFO, linked lists),
                        File Structures, Mathematics, Logic.
                    </li>
                    <li className='detaile'>
                        <strong>Languages &amp; Frameworks:</strong> JavaScript, HTML/CSS, React, Node.js,
                        Express.js, C, Pascal, Assembly, Java , python.
                    </li>
                    {/* 
                     */}
                    <li className='detaile'>
                        <strong>Tools &amp; Platforms:</strong> Git &amp; GitHub, VS Code, Postman,
                        Home Assistant, n8n, REST APIs, JSON, Supabase.
                    </li>
                    <li className='detaile'>
                        <strong>Soft Skills:</strong> Problem-solving, analytical thinking, teamwork,
                        adaptability, fast learning. Currently exploring AI-driven analysis and
                        backend development to contribute to innovative teams through internships
                        and collaborative projects.
                    </li>
                </ul>
            </div>
        </div>
    )
}