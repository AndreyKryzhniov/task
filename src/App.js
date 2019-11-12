import React from 'react';
import s from './App.module.css'
import Input from "./Input/Input";
import Output from "./Output/Output";

class App extends React.Component {

    componentDidMount() {
        debugger
        const url = "https://api.codetabs.com/v1/proxy?quest=https://www.mrsoft.by/data.json";
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                debugger
                this.setState({
                    data: result.data
                })
            })
    }

    state = {
        data: [],
        result: '',
        checkbox: false,
        substring: '',
        stringLength: 1,
        disabled: false
    }

    changeCheckbox = (value) => {
        this.setState({
            checkbox: value
        })
    }

    changeStringLength = (value) => {
        if (Number(value) < 1) {
            this.setState({
                disabled: true,
                stringLength: Number(value)
            })
        } else {
            this.setState({
                disabled: false,
                stringLength: Number(value)
            })
        }
    }

    changeSubstring = (value) => {
        this.setState({
            substring: value
        })
    }

    filterLong = () => {
        let newArr = this.state.data.filter(t => t.length > this.state.stringLength)
        this.setState({
            result: String(newArr)
        })
    }

    filterSubstring = () => {
        if (this.state.checkbox === true) {
            let newArr = this.state.data.filter(t => t.includes(this.state.substring))
            this.setState({
                result: String(newArr)
            })
        } else {
            let newArr = this.state.data.filter(t => (t.includes((this.state.substring).toLowerCase()) ? t : t.includes((this.state.substring).toUpperCase())) ? t : false)
            this.setState({
                result: String(newArr)
            })
        }
    }

    render = () => {

        return (
            <div className={s.App}>
                <Input state={this.state}
                       changeCheckbox={this.changeCheckbox}
                       changeStringLength={this.changeStringLength}
                       changeSubstring={this.changeSubstring}
                       filterLong={this.filterLong}
                       filterSubstring={this.filterSubstring}
                       disabled={this.state.disabled}
                />
                <Output state={this.state}/>
            </div>
        );
    }
}

export default App;
