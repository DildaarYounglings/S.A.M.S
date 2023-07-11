import React from 'react';
import { TopNav } from './TopNav';
import './Lesson.css';

export const Lessons = () => {
    return (
        <React.Fragment>
            <TopNav />
            <style>
                {
                    `
            .btn-group button {
                translate:-15vw 0;
                background-color:transparent;
                
               border: 4px solid green;
               
                color: black;
                width: 30%;
                height: 80px;
                top: 80px;
                font-size: 20px;
                margin-left: 150px;
                border-radius: 10px;
                font-weight: 400;
                padding: 10px 24px;
                cursor: pointer;
                /* Pointer/hand icon */
                float: left;
            }
            /* Clear floats (clearfix hack) */
            .btn-group:after {
                content: "";
                clear: both;
                display: table;
            }

            .btn-group button:not(:last-child) {
                border-right: none;
            /* Prevent double borders */
            }

            /* Add a background color on hover */
            .btn-group button:hover {
                background-color: lightgreen;
            }

            }`
                }
            </style>

            <section className="LessonsPage">
                <h4 style={{ position: 'relative', left: '12%', top: "10px", fontSize: "40px", }}>Popular Videos</h4>
                <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                    <div class="responsive">
                        <div className="LessonsItem">
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>

                    <div class="responsive">
                        <div className="LessonsItem">
                            <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                        </div>
                    </div>
                </div>

                <div class="btn-group">
                    <button style={{borderRight:"4px solid green",}}>Vegan</button>
                    <button style={{borderRight:"4px solid green",}}>coffee</button>
                    <button style={{borderRight:"4px solid green",}}>Vegetarian</button>
                    <button style={{borderRight:"4px solid green",}}>Breakfast</button>
                </div>



                <div style={{ margin: '0px auto' }}>
                    <h1 style={{ marginTop: '15rem', textAlign: 'start', position: 'relative', left: '12%' }}>New Videos</h1>
                    <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                        <div class="responsive">
                            <div className="LessonsItem">
                             <img></img>
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem" >
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>



                    </div>

                    <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                        <div class="responsive">
                            <div className="LessonsItem">
                               
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem" >
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>
                    <div className='LessonsRow' style={{ marginTop: "0px auto", gap: "10rem", }}>
                        <div class="responsive">
                            <div className="LessonsItem">
                               
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem" >
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>



                    </div>





                </div>
                
            </section>
        </React.Fragment>
    )
}
