import React, { Component } from 'react'
import Github from '../Github'
import Instagram from '../Instagram'
import Twitter from '../Twitter'
import "./GrupoSociais.css"

export default class GroupSociais extends Component {
    render() {
        return (
            <div className="Content-sociais">
                <div className="GroupSociais">
                    <Github/>
                    <Instagram/>
                    <Twitter/>
                </div>
            </div>
        )
    }
}
