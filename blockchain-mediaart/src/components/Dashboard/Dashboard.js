import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import 'bootstrap/dist/css/bootstrap.css';
import sketch1 from './sketch1'
import './Dashboard.css';
import { createGitgraph } from "@gitgraph/js";

class Dashboard extends React.Component {
    render(){
        return (
            <div>
                <h1>모자라나 대쉬보드</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h5>모자라나_9d0ffcc</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>Version Control</h5>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-6 hidden-md-down">
                        <P5Wrapper sketch={sketch1} />
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
            author: ' <Details>',
            branchLabelOnEveryCommit: true
            // commitMessage?: string;
            // generateCommitHash?: () => Commit["hash"];
            // compareBranchesOrder?: CompareBranchesOrder;
        }
        const gitgraph = createGitgraph(graphContainer, options);
         
        // Simulate git commands with Gitgraph API.
        const user0 = gitgraph.branch("lucetre");
        const user1 = gitgraph.branch("Yunny");
        const user2 = gitgraph.branch("JSKeum");

        user0.commit("모자라나 모듈 생성");

        user1.merge(user0);
        user1.commit("윤곽선 그리기");
        user1.commit("배경색 정하기");
         
        user0.commit("실루엣 완성").tag("v1.0.0");;
        user2.merge(user0);
        user0.commit("눈 그리기");
        user2.commit("눈동자 색 추천");
         
        user0.merge(user2).tag("v1.0.1");
        user1.commit("전체적인 다듬기");
        
        user0.merge(user1)
        user0.commit('배경 테마 설정').tag("v1.1.0");
    }
}

export default Dashboard;