import React, { Component } from "react";
import "./Parallel_section_style.css";

type Parallel_sectionProps = {
    
};

type Parallel_sectionState = {
    latest_SNs: number[]

    title_left: string[]
    subtitle_left: string[]
    category_left: string[]

    title_right: string[]
    subtitle_right: string[]
    category_right: string[]

    imageFileUrls: string[]

    isLoading: boolean;
}

export class Parallel_section extends Component<Parallel_sectionProps, Parallel_sectionState> {
    constructor(props: any) {
        super(props);
        this.state= {
            latest_SNs: [1,2,3,4,5,6,7,8,9,10],
            
            title_left: [],
            subtitle_left: [],
            category_left: [],

            title_right: [],
            subtitle_right: [],
            category_right: [],

            imageFileUrls: [],
            
            isLoading: true
        }
    }

    componentDidMount() {
        //this.handleBring_latest_SNs();
        this.handleBring_latest_articles_IMAGE();
        this.handleBring_latest_articles_TEXT();
    }

    render = (): JSX.Element => {
        console.log("checking images:", this.state.imageFileUrls)

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="parallel_section">
                <div className="above_split">
                    <p><b>Parallel Section</b></p>
                </div>

                <div className="split_container">
                    <div className="split_left"> 
                        <div className="article1_left">
                            <div className="article1_left_text">
                                <p className="title"><b>{this.state.title_left[0]}</b></p>
                                <p className="subtitle"><b>{this.state.subtitle_left[0]}</b></p>
                            </div>
                            <div className="article1_left_image">
                                <img className='image'src={this.state.imageFileUrls[0]} alt="Article Image" />
                            </div>
                        </div>
                        <div className="article1_and_2_container_left"> 
                            <div className="article2_left"> 
                                <div className="article2_left_text">
                                    <p className="title"><b>{this.state.title_left[1]}</b></p>
                                    <p className="subtitle"><b>{this.state.subtitle_left[1]}</b></p>
                                </div>
                                <div className='article2_left_image'>
                                    <img className='image'src={this.state.imageFileUrls[2]} alt="Article Image" />
                                </div>
                            </div>
                            <div className="article3_left">
                                <div className="article3_1_left">
                                    <p className="category"><b>{this.state.category_left[0]}</b></p>
                                    <p className="subtitle"><b>{this.state.subtitle_left[0]}</b></p>
                                </div>
                                <div className="article3_2_left">
                                    <p className="category"><b>{this.state.category_left[0]}</b></p>
                                    <p className="subtitle"><b>{this.state.subtitle_left[0]}</b></p>
                                </div>
                                <div className="article3_3_left">
                                    <p className="category"><b>{this.state.category_left[0]}</b></p>
                                    <p className="subtitle"><b>{this.state.subtitle_left[0]}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="split_right">
                        <div className="article1_right">
                            <p className="title"><b>{this.state.title_right[0]}</b></p>
                            <p className="subtitle"><b>{this.state.subtitle_right[0]}</b></p>
                        </div>
                        <div className="article1_and_2_container_right"> 
                            <div className="article2_right"> 
                                <p>article2_right</p>
                            </div>
                            <div className="article3_right">
                                <p>article3_right</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    // handleBring_latest_SNs = (): void => {
    //     fetch("/api/send_latest_articles_IMAGE", {method: "POST"})
    //     .then(this.handleBring_latest_articles_IMAGEResponse)
    //     .catch(this.handleServerError)
    // }

    // handleBring_latest_articles_IMAGE = (): void => {
    //     const imagePromises = this.state.latest_SNs.map((SN) => {
    //       return fetch(`/api/send_latest_articles_IMAGE?SN=${SN}_1`, { method: "POST" })
    //         .then(response => response.blob())
    //         .then(blob => URL.createObjectURL(blob));
    //     });
      
    //     Promise.all(imagePromises)
    //       .then(imageUrls => {
    //         this.setState({ imageFileUrls: imageUrls, isLoading: false });
    //       })
    //       .catch(this.handleServerError);
    // }

    // handleBring_latest_articles_IMAGE = (): void => {
    //     fetch('/api/send_latest_articles_IMAGE?SN=1_1', { method: "POST" })
    //     .then(this.handleBring_latest_articles_TEXTResponse)
    //     .catch(this.handleServerError)
    // }

    // handleBring_latest_articles_IMAGEResponse = (res: Response) => {
    //     if (res.status === 200) {
    //         res.blob().then(this.handleBring_latest_articles_IMAGEBlob).catch(this.handleServerError);
    //     } else {
    //         this.handleServerError(res);
    //     }
    // }

    // handleBring_latest_articles_IMAGEBlob = (blob: Blob) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         const dataUrl = reader.result as string;

    //         this.setState(prevState => ({
    //         imageFileUrls: [...prevState.imageFileUrls, dataUrl]
    //         }));
    //     };

    //     reader.readAsDataURL(blob);
    // }

    handleBring_latest_articles_IMAGE = (): void => {
        const imageUrls = this.state.latest_SNs.map((SN) => {
            return `C:/Users/jinta/Desktop/Parallel Report/Website/server/src/articles/img/SN${SN}_1`;
        });
        this.setState({ imageFileUrls: imageUrls, isLoading: false });
    }

    handleBring_latest_articles_TEXT = (): void => {
        fetch("/api/send_latest_articles_TEXT", {method: "POST"})
        .then(this.handleBring_latest_articles_TEXTResponse)
        .catch(this.handleServerError)
    }

    handleBring_latest_articles_TEXTResponse = (res: Response) => {
        if (res.status === 200) {
            res.json().then(this.handleBring_latest_articles_TEXTJson).catch(this.handleServerError);
        } else {
            this.handleServerError(res);
        }
    }

    handleBring_latest_articles_TEXTJson = (vals: any) => {
        if (typeof vals !== "object" || vals === null || !Array.isArray(vals)) {
            console.error("bad data", vals);
            return;
        }
        
        const titleLeft = [];
        const subtitleLeft = [];
        const categoryLeft = [];

        for (let i = 0; i < 10; i = i + 2) {
            const obj = JSON.parse(vals[i])

            if (obj.SN === undefined) {
                console.error("bad data -- SN", obj.SN)
                return;
            } 

            if (obj.Category === undefined) {
                console.error("bad data -- Category", obj.Category)
                return;
            } 

            if (obj.Title === undefined) {
                console.error("bad data -- Title", obj.Title)
                return;
            } 

            if (obj.Subtitle === undefined) {
                console.error("bad data -- Subtitle", obj.Subtitle)
                return;
            } 

            if (obj.body === undefined) {
                console.error("bad data -- body", obj.body)
                return;
            } 
            titleLeft.push(obj.Title);
            subtitleLeft.push(obj.Subtitle);
            categoryLeft.push(obj.Category);
        }

        const titleRight = [];
        const subtitleRight = [];
        const categoryRight = [];
       
        for (let i = 1; i < 11; i = i + 2) {
            const obj = JSON.parse(vals[i])

            if (obj.SN === undefined) {
                console.error("bad data -- SN", obj.SN)
                return;
            } 

            if (obj.Category === undefined) {
                console.error("bad data -- Category", obj.Category)
                return;
            } 

            if (obj.Title === undefined) {
                console.error("bad data -- Title", obj.Title)
                return;
            } 

            if (obj.Subtitle === undefined) {
                console.error("bad data -- Subtitle", obj.Subtitle)
                return;
            } 

            if (obj.body === undefined) {
                console.error("bad data -- body", obj.body)
                return;
            } 
            
            titleRight.push(obj.Title);
            subtitleRight.push(obj.Subtitle);
            categoryRight.push(obj.Category);
        }

        this.setState({
            title_left: titleLeft,
            subtitle_left: subtitleLeft,
            category_left: categoryLeft,

            title_right: titleRight,
            subtitle_right: subtitleRight,
            category_right: categoryRight,

            isLoading: false
        }
    )};

    handleServerError = (_: Response) => {
        console.log("something bad happened");
    }

}