import React from 'react';
import s from './Output.module.css'


class Output extends React.Component {

  render = () => {

    return (
        <div className={s.wrapper}>
            <textarea value={this.props.state.result}/>
        </div>
    );
  }
}

export default Output;
