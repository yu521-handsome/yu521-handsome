import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProjectInforTable from '../../../components/professor/capstoneProject/infor/ProjectInforTable/ProjectInforTable'

export default class ProjectInfor extends Component {
    state = {
        projectInfor:[],
        userEmail:"p1@gmail.com"
    }
    //create projectInfor
    async componentDidMount(){
        let projectInfor = []
        let courseList = []
        let projectsList = []
        const HEADER = {
            'Accept':'application/json,text/plain,*/*'
        }
        //get course
        await fetch(`/api1/courses?chiefProfessor=${this.state.userEmail}`,{
            method:"get",
            headers:HEADER
        }).then((response)=>{
            if(response.ok) {
            return response.json()
            }
            return "error"
        }).then((response) => {
            if(response !== "error") {
            courseList = response
            }
            else {
            alert("Courses get failed")
            }
        }).catch((e)=>{
            console.log("error")
        })
        for(var i = 0; i < courseList.length; i++) {
            const courseId = courseList[i].id
            const courseTheme = courseList[i].theme
            //get projects
            await fetch(`/api1/projects?courseId=${courseId}`,{
                method:"get",
                headers:HEADER
            }).then((response)=>{
                if(response.ok) {
                return response.json()
                }
                return "error"
            }).then((response) => {
                if(response !== "error") {
                projectsList = response
                }
                else {
                alert("Projects get failed")
                }
            }).catch((e)=>{
                console.log("error")
            })
            var j;
            for(j = 0; j < projectsList.length; j++) {
                let oneProjectInfor = {
                    courseTheme:courseTheme,
                    projectId:projectsList[j].id,
                    title:projectsList[j].title,
                    description:projectsList[j].description
                }
                projectInfor.push(oneProjectInfor)
            }
        }
        this.setState({projectInfor})
    }

    
  render() {
    return (
        <div>
            <div className="tab-pane fade show active" role="tabpanel">
                <h4>Capstone Project - Project Information</h4>
                <p>The table below shows all the information of projects you set up. You can setup a new project. You can also change or update the information of existing projects.<br /></p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createProject">Setup Project</Link>
                {this.state.projectInfor.map((item,index) => {
                    return(<ProjectInforTable key={index} projectInfor={item}/>)
                  })}
                <div style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                    <div className="dropdown" style={{marginTop: '10%'}}><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Change Information&nbsp;</button>
                        <div className="dropdown-menu"><a className="dropdown-item" href="P-1.3.2.Professor%20project%20change%20information.html">Project 1</a><a className="dropdown-item" href="P-1.3.2.Professor%20project%20change%20information.html">Project 2</a><a className="dropdown-item" href="P-1.3.2.Professor%20project%20change%20information.html">Other Projects</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
