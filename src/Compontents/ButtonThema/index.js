import React, { Component } from 'react'

export default class ButtonTheme extends Component {
    render() {
        return (
            <main>
        <div class="liga-desliga">
            <input type="checkbox" class="liga-desliga__checkbox" id="liga-desliga"/>
            <label for="liga-desliga" class="liga-desliga__botao"></label>
        </div>
    </main>
        )
    }
}
