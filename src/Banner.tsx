import React, { Component } from "react";
import Logo from './img/logo.png';
import './Banner_style.css'

type BannerProps = {

};

type BannerState = {
    sentencesVisible: boolean[];
    sentences: string[];
}

export class Banner extends Component<BannerProps, BannerState> {
    constructor(props: any) {
        super(props);
        this.state= {
            sentencesVisible: [],
            sentences: [
                "The Advent of AI Journalism.",
                "Stories Delivered by Non-human Intelligence.",
                "Same Event, Different Perspectives.",
                "Liberal/Conservative in a Single Place."
              ] 
        }
    }

    componentDidMount() {
        const sentences = this.state.sentences;
        let visibleArray: boolean[] = [];
        for (let i = 0; i < sentences.length; i++) {
          visibleArray.push(false);
        }

        visibleArray[0] = true;
    
        this.setState({ sentencesVisible: visibleArray });

        let currentIndex = 0;

        setInterval(() => {
          this.updateSentenceVisibility(currentIndex, false);
          currentIndex = (currentIndex + 1) % sentences.length;
          this.updateSentenceVisibility(currentIndex, true);
        }, 5000); // Time interval between each sentence change
    }

    updateSentenceVisibility = (index: number, isVisible: boolean) => {
        this.setState(prevState => {
          const updatedVisibleArray = [...prevState.sentencesVisible];
          updatedVisibleArray[index] = isVisible;
          return { sentencesVisible: updatedVisibleArray };
        });
    };
    
    render = (): JSX.Element => {       

          const { sentencesVisible } = this.state;

          return (
            <div className="banner">
              <img src={Logo} alt="parallel_report_logo" width="220" height="120" className="logo"/>
              <div className="slide-right">
                {this.state.sentences.map((sentence, index) => (
                  <h2 key={index} className={`sentence ${sentencesVisible[index] ? "" : "collapsed"}`}>
                    {sentence}
                  </h2>
                ))}
              </div>
            </div>
          );
    }

}