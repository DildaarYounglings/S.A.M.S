import React, { useState } from 'react'
import { TopNav } from '../components/TopNav'

export const LiveLessons = () => {
    const [color, setColor] = useState(false);

    return (
        <React.Fragment>
            <style>
            {
            `
            .btn-group button {
                translate:30vw 0;
                background-color: #248f35;
                border: none;
                color: white;
                width: 70%;
                top: 80px;
                left: 3%;
                margin-left: 20px;
                border-radius: 10px;
                font-weight: 500;
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
                background-color: #3e8e41;
            }

            .LessonsPage{
                position: relative;
                top: 170px ;
            }`
            }
            </style>

            <TopNav />
            <div class="btn-group">
                <button >Breakfast</button>
                <button>Desert</button>
                <button>Food</button>
                <button>Vegan</button>
                <button>Vegetarian</button>
            </div>

            <section className="LessonsPage">
                <div style={{ margin: '0px auto' }}>
                    <h1 style={{ marginTop: '5rem', textAlign: 'start', position: 'relative', left: '12%' }}>Popular Dishes</h1>
                    <div className='LessonsRow'>
                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '0px auto' }}>
                    <h1 style={{ marginTop: '5rem', textAlign: 'start', position: 'relative', left: '12%' }}>Popular Chefs</h1>
                    <div className='LessonsRow'>
                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>

                        <div class="responsive">
                            <div className="LessonsItem">
                                <img src="images/3rd.png" alt="" style={{ width: "75%", height: "auto", left: "10%", }} />
                                <div className="desc"><img style={{ position: 'absolute', left: '7vh', top: '-0px' }} src='images/gordonRamsy.png' alt='d' /><b>Will Smith</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
