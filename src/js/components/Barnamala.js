/**
 * Created by dbasukala on 12/2/2016.
 */

import React from 'react';
import Header from './Header';


class Barnamala extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainAlphabet: "क",
        }
        this.makeSelection = this.makeSelection.bind(this);

        this.barnamala = "क ख ग घ ङ च छ ज झ ञा ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ".split(" ");

    }



    makeSelection(e) {
        console.log("makeSelection");
        console.log(e);
        if (!e.target.classList.contains("selected")) {
            document.querySelector("span.selected").classList.remove("selected");
            e.target.classList.toggle("selected");
            for (var i = 0; (e.target = e.target.previousSibling); i++);
            document.querySelector(".barnamala").style.left = "-" + window.innerWidth * 0.2 * (i - 1) + "px";

        }
    }

    render() {
        return <div className="wrapper">
            <Header/>
            <div className="barnamalasWrapper">
                <div className="barnamala">
                    {
                        this.barnamala.map(f=>
                            <span key={f} onClick={this.makeSelection.bind(this)}
                                  className={this.state.mainAlphabet === f ? "selected" : ''}>{f}</span>
                        )
                    }
                </div>
            </div>
        </div>
    }
}

export default Barnamala