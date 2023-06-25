import React, { Component } from "react";
import { Above_banner } from './Above_banner'
import { Banner } from './Banner'
import { Parallel_section } from './Parallel_section'
import { Top_stories } from './Top_stories'
import { Navigation_bar } from "./Navigation_bar";

interface AppState {

}

export class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state= {

        }
    }

    render = (): JSX.Element => {
        
        return (
            <div>
                <Above_banner/>
                <Banner/>
                <Navigation_bar/>
                <Parallel_section/>
                <Top_stories/>
            </div>
        );
    }
}