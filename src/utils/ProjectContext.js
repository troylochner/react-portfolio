import React, {useState, createContext} from "react";
//USING : https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4&ab_channel=DevEd

export const ProjectContext = createContext()

export const ProjectProvider = (props)=>{

    const [projects, setProjects] = useState([
        
        {
            id: 1
            ,name: "Cov19 Info"
            ,status: "Closed"
            ,description_short: "Covid-19 high level statistics dashboard."
            ,imageURL: "https://raw.githubusercontent.com/troylochner/react-portfolio/main/src/img/covid.png"
            ,era: "October 2020"
            ,GitHubRepo:"https://github.com/troylochner/covid19-info"
            ,deployURL:"https://troylochner.github.io/covid19-info/"
        }, {
            id: 2,
            name: "TLT Deli",
            status: "Closed",
            description_short: "Simple deli-ordering system",
            imageURL: "https://raw.githubusercontent.com/troylochner/react-portfolio/main/src/img/tlt-deli.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:"https://powerful-wave-95370.herokuapp.com/"
        }, {
            id: 3,
            name: "BurgerTown",
            status: "Open",
            description_short: "Student project to track burgers consumed.",
            imageURL: "https://raw.githubusercontent.com/troylochner/react-portfolio/main/src/img/burgertown-rev.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/burgertown"
            ,deployURL:"https://pure-temple-04329.herokuapp.com/"
        }, {
            id: 4,
            name: "Employee CLI",
            status: "Open",
            description_short: "Command line tool to manage an employee DB.",
            imageURL: "https://raw.githubusercontent.com/troylochner/react-portfolio/main/src/img/employee-tracker.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/employee-tracker"
            ,deployURL:"https://github.com/troylochner/employee-tracker"
        },{
            id: 5,
            name: "Note-Taker",
            status: "Open",
            description_short: "Simple note-taking tool.",
            imageURL: "https://raw.githubusercontent.com/troylochner/react-portfolio/main/src/img/note-taker.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/note-taker"
            ,deployURL:"https://shrouded-gorge-29798.herokuapp.com/"
        },
        {
            id: 6,
            name: "Weather Dashboard",
            status: "Open",
            description_short: "Weather dashboard - powered by OpenWeatherAPI.",
            imageURL: "https://raw.githubusercontent.com/troylochner/react-portfolio/main/src/img/weather-dashboard.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/Weather-Dashboard"
            ,deployURL:"https://troylochner.github.io/Weather-Dashboard/"
        }/*,
        {
            id: 7,
            name: "WWE Work",
            status: "Open",
            description_short: "The work I do for WWE.",
            imageURL: "https://via.placeholder.com/600x600",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/"
            ,deployURL:""
        },
        {
            id: 8,
            name: "VFX Work",
            status: "Open",
            description_short: "The work I did in the visual effects industry.",
            imageURL: "https://via.placeholder.com/600x600",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }*/
]); 

    return(
        <ProjectContext.Provider value={[projects,setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}



//export default EmployeeContext;