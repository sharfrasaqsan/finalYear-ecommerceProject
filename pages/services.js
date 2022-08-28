import React from 'react'

export default function services() {
    return <div>
        <div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{"text-align":"center"}}>
            <div className="hd">Our Services</div>
            <p><small className="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
            <div className="row" style={{"justify-content": "center"}}>
                <div className="card col-md-3 col-12 ml-2">
                    <div className="card-content">
                        <div className="card-body"> <img className="img" src="https://toppng.com/uploads/preview/computer-icon-vector-png-desktop-computer-11563207085f1wwos2r52.png" style={{ width: 'auto', height: '90px' }} />
                            <div className="card-title">Computer shop</div>
                            <div className="card-subtitle">
                                <p> <small className="text-muted">A store that sells computers to the small businessperson or personal user.</small> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-3 col-12 ml-2">
                    <div className="card-content">
                        <div className="card-body"> <img className="img rck" src="https://www.pngfind.com/pngs/m/255-2556464_computer-repair-icon-png-clipart-computer-repair-technician.png" style={{ width: 'auto', height: '90px' }} />
                            <div className="card-title">Computer repair service</div>
                            <div className="card-subtitle">
                                <p> <small className="text-muted">Process of identifying, troubleshooting and resolving problems and issues in a faulty computer.</small> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
