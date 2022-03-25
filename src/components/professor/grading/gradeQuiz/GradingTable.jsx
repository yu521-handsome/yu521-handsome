import React, { Component } from 'react'
import PageNav from '../PageNav/PageNav';

//this is the quiz grading table. It needs to pass the prop of quizRecords
export default class GradingTable extends Component {
    constructor(props) {
        super();
        this.state ={
            pageCurr:1,
            listNumber:10,
            quizRecords:props.quizRecords
        }
    }

    //create the data showing in the table
    createShowData() {
        const {listNumber,pageCurr} = this.state
        const {quizRecords} = this.props
        let showingRow = []
        for(var i=listNumber*(pageCurr-1); i < listNumber*pageCurr; i++) {
            if(i === quizRecords.length) {
                break
            }
            let index = i
            //not be graded
            if(quizRecords[i].gradeByProfessor === "") {
                showingRow.push(
                    <tr>
                        <td className="text-truncate" style={{maxWidth: 200}}>{quizRecords[index].studentId}</td>
                        <td className="text-truncate" style={{maxWidth: 200}}>{quizRecords[index].studentName}</td>
                        <td>
                            <select value={quizRecords[index].gradeByProfessor} onChange={(event) => this.saveGrade(index,event)}>
                                <option key={0} value="">-</option>
                                <option key={1} value="A">A</option>
                                <option key={2} value="B">B</option>
                                <option key={3} value="C">C</option>
                            </select>
                        </td>
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-lg fs-5 text-primary">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </td>
                    </tr>
                )
            }
            //has been graded
            else{
                showingRow.push(
                    <tr>
                        <td className="text-truncate" style={{maxWidth: 200}}>{quizRecords[index].studentId}</td>
                        <td className="text-truncate" style={{maxWidth: 200}}>{quizRecords[index].studentName}</td>
                        <td>
                            <select value={quizRecords[index].gradeByProfessor} onChange={(event) => this.saveGrade(index,event)}>
                                <option key={0} value="">-</option>
                                <option key={1} value="A">A</option>
                                <option key={2} value="B">B</option>
                                <option key={3} value="C">C</option>
                            </select>
                        </td>
                        <td className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-eye-fill fs-5 text-primary">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                        </td>
                    </tr>
                )
            }
        }
        return showingRow
    }

    //save the grade after user chosen
    saveGrade = (index,event) => {
        const {quizRecords} = this.props
        quizRecords[index].gradeByProfessor = event.target.value
        this.setState({quizRecords})
    }

    //call back function to get the current page from PageNav
    changeCurrent = (pageCurr) => {
        this.setState({pageCurr})
    }

    handleSubmit = async ()=> {
        const {quizRecords} = this.state
        //build the submit data
        let submitData = []
        for(var i = 0; i < quizRecords.length; i++) {
            let oneRecord = {
                quizRecordId:quizRecords[i].id,
                grade:quizRecords[i].grade
            }
            submitData.push(oneRecord)
        }
        const HEADER = {
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/json'
        }
        const BODY = {
            gradedRecords:submitData
        }
          fetch('/api1/quiz-records',{
            method:'PATCH',
            headers:HEADER,
            body:JSON.stringify(BODY)
          }).then((res)=>{
            return res.json()
          }).then((data)=>{
            console.log(data)
          }).catch(function(error){
            console.log(error)
          })

    }

    render() {
        const {quizId} = this.props
        const showingData = this.createShowData.bind(this)()
        return (
            <div>
                <section id="quiz-grade" style={{background: 'rgba(159,37,54,0.05)'}}>
                    <div className="container">
                        <div className="row">
                        <div className="col">
                            <div className="row justify-content-center">
                            <div className="col-xl-10 col-xxl-9">
                                <div className="card shadow">
                                <div className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
                                    <h4 className="display-6 text-capitalize mb-0" style={{width: 'auto'}}><strong>Grade for &lt;{quizId}&gt;</strong></h4>
                                    <p>Note: All the students taking this quiz have been listed below. Please select grade for them.</p>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>Group ID</th>
                                            <th>Group Name</th>
                                            <th>Grade</th>
                                            <th className="text-center">Confirm&amp;Sign</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {showingData}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <nav>
                                        <PageNav totalPage = { Math.ceil(this.state.quizRecords.length/this.state.listNumber)} changeCurrent = {this.changeCurrent}/>
                                    </nav>
                                </div>
                                <button className="btn btn-primary" style={{marginLeft: 'auto', /*marginRight: 1000, */width: '211.438px'}} href="#modal-1" data-bs-target="#modal-1" data-bs-toggle="modal" onClick={this.handleSubmit}>CONFIRM AND SIGN</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
