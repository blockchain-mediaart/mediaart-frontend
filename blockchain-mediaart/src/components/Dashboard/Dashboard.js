import React from 'react';
import { Link } from "react-router-dom";
import P5Wrapper from 'react-p5-wrapper';
import 'bootstrap/dist/css/bootstrap.css';
import sketch0 from './sketches/sketch0.js';
import sketch1 from './sketches/sketch1.js';
import sketch2 from './sketches/sketch2.js';
import sketch3 from './sketches/sketch3.js';
import sketch4 from './sketches/sketch4.js';
import sketch5 from './sketches/sketch5.js';
import sketch6 from './sketches/sketch6.js';
import sketch7 from './sketches/sketch7.js';
import sketch8 from './sketches/sketch8.js';
import sketch9 from './sketches/sketch9.js';
import sketch10 from './sketches/sketch10.js';
import sketch11 from './sketches/sketch11.js';
import './Dashboard.css';
import { createGitgraph } from "@gitgraph/js";

const sketches = [sketch0, sketch1, sketch2, sketch3, sketch4, sketch5, sketch6, sketch7, sketch8, sketch9, sketch10, sketch11];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.mediaArt = props.mediaArt;
        this.state = {
            commit: null,
            sketch: null,
        };
    }
    
    changeCommit(_commit, sketchId) {
        this.setState({
            commit: _commit,
            sketch: sketches[sketchId],
        });
    }
    
    render(){
        return (
            <div>
                <h1>{this.mediaArt.title} Dashboard</h1>
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>{this.mediaArt.title}_{this.state.commit ? this.state.commit.hashAbbrev : 'fffffff'}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5><Link to={"./mosa-lina/" + (this.state.commit ? this.state.commit.hashAbbrev : 'fffffff')}>Detail Info</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5>Version Control</h5>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-6 hidden-md-down">
                        <P5Wrapper sketch={this.state.sketch?this.state.sketch:sketches[11]} />
                    </div>
                    <div className="col-md-6">
                        <div id="graph-container"></div>
                    </div>
                </div> 

            </div>
        );
    }

    componentDidMount() {
        this.initGraphContainer();
        const svg = document.getElementsByTagName("svg")[0];
        svg.setAttribute("class","graph-svg");
        svg.setAttribute("viewBox","0 0 700 1200");
    }

    goToDetail(id) {
        console.log(id);
        this.history.push('/home');
    }

    initGraphContainer() {
        // Get the graph container HTML element.
        const graphContainer = document.getElementById("graph-container");
        // Instantiate the graph.
        const options = {
            // template?: TemplateName | Template;
            orientation: "vertical",
            // reverseArrow?: boolean;
            // initCommitOffsetX?: number;
            // initCommitOffsetY?: number;
            mode: "",
            author: ' <Detail Info>',
            branchLabelOnEveryCommit: true
            // commitMessage?: string;
            // generateCommitHash?: () => Commit["hash"];
            // compareBranchesOrder?: CompareBranchesOrder;
        }
        const gitGraph = createGitgraph(graphContainer, options);
         
        // Simulate git commands with Gitgraph API.
        const user0 = gitGraph.branch("Art of BlockChain");
        const user1 = gitGraph.branch("Yunny");
        const user2 = gitGraph.branch("JSKeum");

        // subject: "전체적인 다듬기",
        // style?: TemplateOptions["commit"];
        // dotText?: string;
        // tag?: string;
        // onClick: commit => this.changeCommit(commit),
        // onMessageClick: commit => console.log("onMessageClick", commit),
        // onMouseOver: commit => console.log("onMouseOver", commit),
        // onMouseOut: commit => console.log("onMouseOut", commit),


        // user0.commit({subject: "모자라나 모듈 생성", onMouseOver: commit => this.changeCommit(commit, 0), onMessageClick: () => this.goToDetail(0)});
        // user1.merge({branch: user0, commitOptions: {subject: "First branch out", onMouseOver: commit => this.changeCommit(commit, 1)}});
        // user1.commit({subject: "윤곽선 그리기", onMouseOver: commit => this.changeCommit(commit, 2)});
        // user1.commit({subject: "배경색 정하기", onMouseOver: commit => this.changeCommit(commit, 3)});
         
        // user0.commit({subject: "실루엣 완성", onMouseOver: commit => this.changeCommit(commit, 4)}).tag("v1.0.0");;
        // user2.merge({branch: user0, commitOptions: {subject: "Second Branch out", onMouseOver: commit => this.changeCommit(commit, 5)}});
        // user0.commit({subject: "눈 그리기", onMouseOver: commit => this.changeCommit(commit, 6)});
        // user2.commit({subject: "눈동자 색 추천", onMouseOver: commit => this.changeCommit(commit, 7)});
         
        // user0.merge({branch: user2, commitOptions: {subject: "First Merge", onMouseOver: commit => this.changeCommit(commit, 8)}}).tag("v1.0.1");
        // user1.commit({subject: "전체적인 다듬기", onMouseOver: commit => this.changeCommit(commit, 9)});
        
        // user0.merge({branch: user1, commitOptions: {subject: "Second Merge", onMouseOver: commit => this.changeCommit(commit, 10)}});
        // const branch = user0.commit({subject: "배경 테마 설정", onMouseOver: commit => this.changeCommit(commit, 11)}).tag("v1.1.0");


        user0.commit({subject: "모자라나 모듈 생성", onMouseOver: commit => this.changeCommit(commit, 0), onMessageClick: () => this.goToDetail(0)});
        user0.merge({branch: user0, commitOptions: {subject: "First branch out", onMouseOver: commit => this.changeCommit(commit, 1)}});
        user0.commit({subject: "윤곽선 그리기", onMouseOver: commit => this.changeCommit(commit, 2)});
        user0.commit({subject: "배경색 정하기", onMouseOver: commit => this.changeCommit(commit, 3)});
         
        user0.commit({subject: "실루엣 완성", onMouseOver: commit => this.changeCommit(commit, 4)}).tag("v1.0.0");;
        user0.merge({branch: user0, commitOptions: {subject: "Second Branch out", onMouseOver: commit => this.changeCommit(commit, 5)}});
        user0.commit({subject: "눈 그리기", onMouseOver: commit => this.changeCommit(commit, 6)});
        user0.commit({subject: "눈동자 색 추천", onMouseOver: commit => this.changeCommit(commit, 7)});
         
        user0.merge({branch: user0, commitOptions: {subject: "First Merge", onMouseOver: commit => this.changeCommit(commit, 8)}}).tag("v1.0.1");
        user0.commit({subject: "전체적인 다듬기", onMouseOver: commit => this.changeCommit(commit, 9)});
        
        user0.merge({branch: user0, commitOptions: {subject: "Second Merge", onMouseOver: commit => this.changeCommit(commit, 10)}});
        const branch = user0.commit({subject: "배경 테마 설정", onMouseOver: commit => this.changeCommit(commit, 11)}).tag("v1.1.0");

        this.changeCommit(branch._graph.commits[11], 11);
    }
}

export default Dashboard;