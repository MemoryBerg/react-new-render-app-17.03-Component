import React from "react";
import StartButton from "./start-button";
import DomElement from "./dom-element";

let array = [];
let startTime;
let endTime;

class RenderDom extends React.Component {
    state = {
        rendering: false
    };

    onStartRender() {
        this.setState({rendering: true})
    }

    render() {
        let haveRender = this.state.rendering;

        // console.log('I am rendering ' + haveRender)

        let btn = <StartButton
            onStart={this.onStartRender.bind(this)}>
        </StartButton>

        let totalElsCount = 100000;
        // if (haveRender) {for (let i = 0; i < totalElsCount; i++) {
        //     array.push(<DomElement
        //     haveRender={haveRender}/>);
        //     if( i === 0) {
        //         startTime = new Date().getTime();
        //         console.log('I am startTime ' + startTime);
        //     } else if( i === totalElsCount - 1) {
        //         endTime = new Date().getTime();
        //         console.log('I am endTime ' + endTime);
        //
        //     }
        // }}
        //
        // console.log('I am rendering state ' + this.state.rendering);
        // if (haveRender) {
        //     return (
        //         <div>
        //             {btn}
        //             {array}
        //             {console.log('Total time is ' + (endTime - startTime) + 'ms')}
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //         {btn}
        //         <h2>{'Please press Start'}</h2>
        //         </div>
        //     )
        // }
        if (haveRender) {
            for (let i = 0; i < totalElsCount; i++) {
                array.push(<DomElement
                    haveRender={haveRender}/>);
                if (i === 0) {
                    startTime = new Date().getTime();
                     console.log('I am startTime ' + startTime);
                } else if (i === totalElsCount - 1) {
                    endTime = new Date().getTime();
                     console.log('I am endTime ' + endTime);
                }

                console.log('I am rendering state ' + this.state.rendering)
            }
            return (
                <div>
                    {btn}
                    {array}
                    {console.log('Total time is ' + (endTime - startTime) + 'ms')}
                </div>
            )

        } else {
            return (
                <div>
                    {btn}
                    <h2>{'Please press Start'}</h2>
                </div>
            )
        }


    }

}

export default RenderDom
