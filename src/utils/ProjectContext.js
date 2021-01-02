import React, {useState, createContext} from "react";
//USING : https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4&ab_channel=DevEd

export const ProjectContext = createContext()

export const ProjectProvider = (props)=>{

    const [projects, setProjects] = useState([
        
        {
            id: 1,
            name: "Covid-19 Dashboard",
            status: "Closed",
            description_short: "Covid-19 high level stats dashboard."
            ,imageURL: "../img/covid.png"
            ,era: "October 2020"
             ,GitHubRepo:"https://github.com/troylochner/covid19-info"
             ,deployURL:"https://troylochner.github.io/covid19-info/"
        }, {
            id: 2,
            name: "TLT Deli",
            status: "Closed",
            description_short: "Simple deli-ordering system",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }, {
            id: 3,
            name: "BurgerTown",
            status: "Open",
            description_short: "Student project to track burgers consumed.",
            imageURL: "https://via.placeholder.com/100x100.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/burgertown"
            ,deployURL:""
        }, {
            id: 4,
            name: "Employee CLI",
            status: "Open",
            description_short: "Command line tool to manange an employee DB.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/employee-tracker"
            ,deployURL:""
        },{
            id: 5,
            name: "Note-Taker",
            status: "Open",
            description_short: "Simple note-taking tool.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/note-taker"
            ,deployURL:""
        },
        {
            id: 6,
            name: "Weather Dashboard",
            status: "Open",
            description_short: "Weather dashboard - powered by OpenWeatherAPI.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/Weather-Dashboard"
            ,deployURL:""
        },
        {
            id: 7,
            name: "WWE Work",
            status: "Open",
            description_short: "Content systems engineering work.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/"
            ,deployURL:""
        },
        {
            id: 8,
            name: "VFX Work",
            status: "Open",
            description_short: "Visual effects data coordinator work.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }
]); 

    return(
        <ProjectContext.Provider value={[projects,setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}



//export default EmployeeContext;