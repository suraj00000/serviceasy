import React from 'react'
import AddServiceModal from './AddServiceModal'
import TableItem from './TableItem'

const SPDashboard = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h1>Services</h1>
        <button className="btn btn-success" style={{ height: "40px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </div>
      <table className="table table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">Sr no</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Tags</th>
            <th scope="col">category</th>
            <th scope="col">Price</th>
            <th scope="col">Sample image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableItem />
        </tbody>
      </table>
      <AddServiceModal />

    </>
  )
}

export default SPDashboard