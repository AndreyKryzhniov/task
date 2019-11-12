import React from 'react';
import s from './Input.module.css'

class Input extends React.Component {

    onIsCheckboxChanged = (e) => {
    debugger
        this.props.changeCheckbox(e.currentTarget.checked)
    }

    onIsLongChanged = (e) => {
        this.props.changeStringLength(e.currentTarget.value)
    }

    onIsStrChanged = (e) => {
        this.props.changeSubstring(e.currentTarget.value)
    }


    render = () => {

        return (
            <div className={s.wrapper}>
                <div>
                    <div>
                        <input
                            type='number'
                            onChange={this.onIsLongChanged}
                               value={this.props.state.stringLength}
                        />
                        <button onClick={this.props.filterLong} disabled={this.props.disabled}>Word length filter</button>
                    </div>
                    <div>
                        <input
                        onChange={this.onIsStrChanged}
                        value={this.props.state.substring}
                        />
                        <button onClick={this.props.filterSubstring}>Substring filter</button>
                    </div>
                </div>
                <div>
                    <input
                        type='checkbox'
                        checked={this.props.state.checkbox}
                        onChange={this.onIsCheckboxChanged}
                    /><span>Case-sensitive</span>
                </div>
            </div>
        );
    }
}

export default Input;
