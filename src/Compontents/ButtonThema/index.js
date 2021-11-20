import React, { Component } from 'react'

export default class ButtonTheme extends Component {    
    render() {
        let toggle = () =>{
            let body = document.querySelector("body")
            body.classList.toggle("dark-theme")
        }
        return (
        <main>
            <div className="liga-desliga">
                <input onClick={toggle} type="checkbox" className="liga-desliga__checkbox" id="liga-desliga"/>
                <label htmlFor="liga-desliga" className="liga-desliga__botao"></label>
            </div>
        </main>
        )
    }
}
