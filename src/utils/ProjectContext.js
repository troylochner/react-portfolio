import React, {useState, createContext} from "react";
//USING : https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4&ab_channel=DevEd

export const ProjectContext = createContext()

export const ProjectProvider = (props)=>{

    const [projects, setProjects] = useState([
        
        {
            id: 1,
            name: "Covid-19 Dashboard",
            status: "Closed",
            description: "This was my first project",
            description_short: "Covid-19 high level stats dashboard."
            ,description_long:""
            ,imageURL: "/img/1.png"
            ,era: "October 2020"
             ,GitHubRepo:"https://github.com/troylochner/covid19-info"
             ,deployURL:"https://troylochner.github.io/covid19-info/"
        }, {
            id: 2,
            name: "Second Project",
            status: "Closed",
            description: "This is the second thing we did.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }, {
            id: 3,
            name: "Third Project",
            status: "Open",
            description: "I skipped this one, way too hard.",
            imageURL: "https://via.placeholder.com/100x100.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }, {
            id: 4,
            name: "Fourth Project",
            status: "Open",
            description: "So damn easy.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },{
            id: 5,
            name: "Five",
            status: "Open",
            description: "So damn easy.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },
        {
            id: 6,
            name: "Six",
            status: "Open",
            description: "So damn easy.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },
        {
            id: 7,
            name: "Seven",
            status: "Open",
            description: "So damn easy.",
            imageURL: "https://via.placeholder.com/150x150.png",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },
        {
            id: 8,
            name: "Eight",
            status: "Open",
            description: "So damn easy.",
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