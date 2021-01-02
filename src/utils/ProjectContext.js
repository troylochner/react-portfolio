import React, {useState, createContext} from "react";
//USING : https://www.youtube.com/watch?v=35lXWvCuM8o&list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE&index=4&ab_channel=DevEd

export const ProjectContext = createContext()

export const ProjectProvider = (props)=>{

    const [projects, setProjects] = useState([
        
        {
            id: 1,
            name: "First Project",
            status: "Closed",
            description: "This was my first project",
            imageURL: "",
            dateComplete:""
             ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
             ,deployURL:""
        }, {
            id: 2,
            name: "Second Project",
            status: "Closed",
            description: "This is the second thing we did.",
            imageURL: "",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }, {
            id: 3,
            name: "Third Project",
            status: "Open",
            description: "I skipped this one, way too hard.",
            imageURL: "",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        }, {
            id: 4,
            name: "Fourth Project",
            status: "Open",
            description: "So damn easy.",
            imageURL: "",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },{
            id: 5,
            name: "Five",
            status: "Open",
            description: "So damn easy.",
            imageURL: "",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },
        {
            id: 6,
            name: "Six",
            status: "Open",
            description: "So damn easy.",
            imageURL: "",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },
        {
            id: 7,
            name: "Seven",
            status: "Open",
            description: "So damn easy.",
            imageURL: "",
            dateComplete:""
            ,GitHubRepo:"https://github.com/troylochner/tlt_deli"
            ,deployURL:""
        },
        {
            id: 8,
            name: "Eight",
            status: "Open",
            description: "So damn easy.",
            imageURL: "",
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