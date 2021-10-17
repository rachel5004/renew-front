import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

export default class GridExample extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      columnDefs: [
        { field: "image_name", width: 150 },
        { field: "author", width: 100 },
        { field: "image_url", width: 350 },
        { field: "lastmodified", width: 150 },
      ],
      rowData: [],
    };
  }

  getSelectedRowData = () => {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);

    document.querySelector(".image-list-preview").src =
      selectedData[0].image_url;

    navigator.clipboard.writeText(selectedData[0].image_url);
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    fetch("http://localhost:8000/image/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((d) => this.data.push(d.fields));
      })
      .then(() => this.setState({ rowData: this.data }));
  };

  render() {
    return (
      <div
        style={{ height: "100%", width: "100%" }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          onGridReady={this.onGridReady}
          rowData={this.state.rowData}
          rowSelection="multiple"
          onRowClicked={(e) => this.getSelectedRowData()}
        />
      </div>
    );
  }
}
