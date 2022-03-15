import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuizInforTable from '../../../components/professor/capstoneProject/infor/QuizInforTable/QuizInforTable'

export default class QuizInfor extends Component {
    state = {
        quizInfor:[],
        userEmail:"p1@gmail.com"
    }
    //create projectInfor
    componentDidMount(){
        let quizInfor = []
        let courseList = []
        let quizList = []

        courseList = this.getCourses()
        
        for(var i = 0; i < courseList.length; i++) {
            const courseId = courseList[i].id
            const courseTheme = courseList[i].theme
            quizList = this.getReprots(courseId)
            var j;
            for(j = 0; j < quizList.length; j++) {
                let oneQuizInfor = {
                    courseTheme:courseTheme,
                    quizId:quizList[j].id,
                    title:quizList[j].title,
                    description:quizList[j].description
                }
                quizInfor.push(oneQuizInfor)
            }
        }
        this.setState({quizInfor})
    }

    getCourses() {
        let courseList = []
        const HEADER = {
            'Accept':'application/json,text/plain,*/*'
        }
        //get course
        fetch(`/api1/courses?chiefProfessor=${this.state.userEmail}`,{
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
        return courseList
        }

    getQuizzes(courseId) {
        let quizList = []
        const HEADER = {
            'Accept':'application/json,text/plain,*/*'
        }
        //get projects
        fetch(`/api1/quizzes?courseId=${courseId}`,{
            method:"get",
            headers:HEADER
        }).then((response)=>{
            if(response.ok) {
            return response.json()
            }
            return "error"
        }).then((response) => {
            if(response !== "error") {
                quizList = response
            }
            else {
                alert("Reports get failed")
            }
        }).catch((e)=>{
            console.log("error")
        })
        return quizList
    }

  render() {
    return (
        <div>
            <div className="tab-pane fade show active" role="tabpanel">
                <h4>Capstone Project - Quiz Information</h4>
                <p>The table below shows all the information of quiz you set up. You can setup a new quiz. You can also change or update the information of existing quiz.<br /></p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createQuiz">Setup Quiz</Link>
                {this.state.quizInfor.map((item) => {
                    return(<QuizInforTable quizInfor={item}/>)
                  })}
                <div style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                    <div className="dropdown" style={{marginTop: '10%'}}><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Change Information&nbsp;</button>
                        <div className="dropdown-menu"><a className="dropdown-item" href="P-1.5.2.Professor%20quiz%20change%20information.html">Quiz 1</a><a className="dropdown-item" href="P-1.5.2.Professor%20quiz%20change%20information.html">Quiz 2</a><a className="dropdown-item" href="P-1.5.2.Professor%20quiz%20change%20information.html">Other Quiz</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
