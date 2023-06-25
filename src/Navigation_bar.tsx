import React, { Component } from "react";
import './Navigation_bar_style.css';

type Navigation_barProps = {
    
};

type Navigation_barState = {


}

export class Navigation_bar extends Component<Navigation_barProps, Navigation_barState> {
    constructor(props: any) {
        super(props);
        this.state= {

        }
    }

    render = (): JSX.Element => {

        return (
            <div className="navigation_bar">
                <ul className="navigation_bar_a">
                    <li className="navigation_bar_b"><a href="default.asp"><b>News</b></a></li>
                    <li className="navigation_bar_b"><a href="news.asp"><b>Opinion</b></a></li>
                    <li className="navigation_bar_b"><a href="contact.asp"><b>Culture</b></a></li>
                    <li className="navigation_bar_b"><a href="about.asp"><b>Politics</b></a></li>
                </ul>
                
            </div>

        )

    }

}