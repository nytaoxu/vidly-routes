import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, value, error, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type="text"
          className="form-control"
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
