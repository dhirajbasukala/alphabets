/**
 * Created by dbasukala on 12/2/2016.
 */

import React from 'react';
import Header from './Header';


class Alphabets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextAlphabet: "B",
            previousAlphabet: "X",
            mainAlphabet: "A",
            indexMain: 1
        }
        this.showNext = this.showNext.bind(this);
        this.showPrevious = this.showPrevious.bind(this);
        this.mainClick = this.mainClick.bind(this);
        this.makeSelection = this.makeSelection.bind(this);

        this.alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    }

    showNext() {
        console.log("showNext");
        this.setState({"mainAlphabet": "B"});
        this.mainClick();
    }

    showPrevious() {
        console.log("show previous");
        this.setState({"mainAlphabet": "X"})
        this.mainClick()
    }

    mainClick() {

        console.log("mainClicked")


    }

    makeSelection(e) {
        console.log("makeSelection");
        console.log(e);
        if (!e.target.classList.contains("selected")) {
            document.querySelector("span.selected").classList.remove("selected");
            e.target.classList.toggle("selected");
            for (var i = 0; (e.target = e.target.previousSibling); i++);

            console.log(i)
            document.querySelector(".alphabets").style.left = "-" + window.innerWidth * 0.2 * (i - 1) + "px";

        }
    }

    render() {
        return <div className="wrapper">
            <Header/>
            <div className="alphabetsWrapper">
                <div className="alphabets">
                    {
                        this.alphabets.map(f=>
                            <span key={f} onClick={this.makeSelection.bind(this)}
                                  className={this.state.mainAlphabet === f ? "selected" : ''}>{f}</span>
                        )
                    }
                </div>
            </div>
        </div>
    }
}

export default Alphabets