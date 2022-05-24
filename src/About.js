import React, { useState } from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: "white",
        backgroundColor: "black"
    })
    const [changeClass, setchangeClass] = useState("btn btn-light m-3")
    const [btnText, setbtnText] = useState("Enable Light Mode")
    const changeMode = () => {
        if (myStyle.color === "white") {
            setmyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setbtnText("Enable Dark Mode")
            setchangeClass("btn btn-dark m-3")
        }
        else {
            setmyStyle({
                color: "white",
                backgroundColor: "black"
            });
            setchangeClass("btn btn-light m-3")
        }

    }

    return (
        <>
            <div className="container py-3 my-5" style={myStyle}>
                <h2>About Us</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="flush-headingOne" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={myStyle}>
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="flush-headingTwo" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={myStyle}>
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    <button type="button" onClick={changeMode} className={changeClass}>{btnText}</button>
                </div>
            </div>
        </>
    )
}
