import React from "react";

export default class DatasetDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDataset: 0 };
    this.onDatasetSelect = this.onDatasetSelect.bind(this);
  }

  getChildContext() {
    const { dataset } = this.props;
    const { selectedDataset } = this.state;
    return {
      dataset: dataset[this.state ? selectedDataset : 0].data
    };
  }

  onDatasetSelect(e) {
    this.setState({ selectedDataset: e.target.selectedIndex });
  }

  render() {
    const { dataset } = this.props;
    return (
      <div>
        <select onChange={this.onDatasetSelect}>
          {dataset.map((option) => (
            <option key={option.id}>{option.label}</option>
          ))}
        </select>
        {this.props.children}
      </div>
    );
  }
}

DatasetDropdown.childContextTypes = {
  dataset: React.PropTypes.array
};

DatasetDropdown.propTypes = {
  dataset: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.any,
    label: React.PropTypes.string,
    data: React.PropTypes.array
  })).isRequired,
  children: React.PropTypes.node.isRequired
};
