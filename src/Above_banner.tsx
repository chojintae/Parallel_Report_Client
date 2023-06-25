import React, { Component } from "react";
import './Above_banner_style.css';

type Above_bannerProps = {
    
};

type Above_bannerState = {

}

export class Above_banner extends Component<Above_bannerProps, Above_bannerState> {
    constructor(props: any) {
        super(props);
        this.state= {

        }
    }

    render = (): JSX.Element => {

        return (
            <div className="above_banner">
                <ul className="above_banner_a">
                    <li className="above_banner_b"><a href="default.asp"><b>Sign in</b></a></li>
                    <li className="above_banner_b"><a href="news.asp"><b>Search</b></a></li>
                    <li className="above_banner_b"><a href="news.asp"><b>About</b></a></li>
                    <li className="above_banner_c"><p><b>Independent News Source Powered by AI</b></p></li>
                </ul>
            </div>

        )

    }

}