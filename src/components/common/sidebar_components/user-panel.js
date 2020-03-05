import React, { Component } from 'react'
import man from '../../../assets/images/dashboard/man.png'

export class User_panel extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-user text-center">
                    <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                    </div>
                    <h6 className="mt-3 f-14">Heidi</h6>
                    <p>Digital Marketing Manager</p>
                </div>
            </div>
        )
    }
}

export default User_panel

