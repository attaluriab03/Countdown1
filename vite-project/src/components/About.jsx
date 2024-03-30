import "../styles/About.css";

const About = () => {
    return (
        <>
            <h1 style={{color:"blueviolet"}}> My First Website </h1>
            <h3 style={{fontSize:"22px"}} class="headers"> Hello, my name is Abhi! </h3>
            <p id="general-text"> About Me: </p>
            <div class="divstyle"> 
                <ul> 
                    <li id="blue-maize"> I am a freshman studying CS at the University of Michigan </li>
                    <li class="headers"> Hobbies: 
                        <ul class="maize-text"> 
                            <li> Playing Tennis </li>
                            <li> Hanging out with Friends </li>
                            <li> Watching Soccer </li>
                            <li> Watching F1 </li>
                            <li> Hiking </li>
                        </ul> 
                    </li>
                    <li class="headers"> Favorite Foods: 
                        <ul class="blue-text"> 
                            <li> Quesadillas </li>
                            <li> Sushi </li>
                            <li> Pasta </li>
                        </ul>
                    </li>
                    <li class="headers"> Clubs/Activities: 
                        <ul> 
                            <li> Michigan Club Tennis </li>
                            <li> Michigan Data Science Team (MDST) </li>
                            <li> Wolverine Sports Analytics (WSA) </li>
                            <li> IASA </li>
                        </ul>
                    </li>
                    <li class="headers"> Favorite Websites 
                        <ul> 
                            <li> <a href="https://www.amazon.com" target="_blank"> Amazon </a> </li>
                            <li> <a href="https://github.com" target="_blank"> GitHub </a></li>
                            <li id="red"> <a href="https://www.formula1.com" target="_blank"> Formula 1 </a></li>
                            <li style={{color:"rgb(17, 0, 255)"}}> <a href="https://www.redbullracing.com/int-en" target="_blank"> Red Bull Racing (F1) </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default About