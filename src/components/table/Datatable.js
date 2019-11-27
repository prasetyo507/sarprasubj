import React from "react";
function Datatable(props) {
  const script = document.createElement("script");

  script.src = "/js/content.js";
  script.async = true;

  document.body.appendChild(script);

  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <div className="box-header">
            <h3 className="box-title">Data Table</h3>
          </div>
          <div className="box-body">
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Rendering engine</th>
                  <th>Browser</th>
                  <th>Platform(s)</th>
                  <th>Engine version</th>
                  <th>CSS grade</th>
                </tr>
              </thead>
              <tbody>
                {props.items.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datatable;
