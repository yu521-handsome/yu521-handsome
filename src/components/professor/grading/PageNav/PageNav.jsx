import React, { Component } from 'react'

//the is the page navigation bar, it need to pass a prop of totalPage
export default class PageNav extends Component {
    state = {
        pageCurr:1,
    }

    go(pageCurr){
        this.setState({
            pageCurr
        })
        this.props.changeCurrent(pageCurr)
    }

    goPrev(){
        let {
            pageCurr,
        } = this.state;
    
        if(--pageCurr === 0){
            return;
        }
    
        this.go(pageCurr)
    }

    goNext(){
        let {
            pageCurr,
        } = this.state;
    
        const {
            totalPage,
        } = this.props.config;
    
        if(++pageCurr > totalPage){
            return;
        }
        this.go(pageCurr)
    }

    createNav() {
        let totalPage = this.props.totalPage

        let pageNav = [];
        pageNav.push(<li className="page-item" aria-hidden="true" onClick = {this.goPrev.bind(this)} key={0}><button className="page-link">«</button></li>)
        for(let i = 1;i <= totalPage; i++){
            pageNav.push(<li className="page-item" key={i} onClick = { this.go.bind(this,i) }><button className="page-link">{i}</button></li>)
        }
        pageNav.push(<li className="page-item" aria-hidden="true" onClick = {this.goNext.bind(this)} key={totalPage+1}><button className="page-link">»</button></li>)

        return pageNav;
    }

    render() {
        const PageNav = this.createNav.bind(this)();
        return (
        <div>                                    
            <ul className="pagination pagination-sm mb-0 justify-content-center">
                {PageNav}
            </ul>
        </div>
        )
    }
}
