import React from 'react'

const AddServiceModal = () => {
  return (
    <>
    {/* Modal */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a service</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name of service</label>
                  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">Description</label>
                  <textarea className="form-control" id="Description" rows="3"></textarea>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="tags" className="form-label">Tags</label>
                      <input type="text" className="form-control" id="tags" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="catagory" className="form-label">Catagory</label>
                      <select className="form-select" aria-label="Default select example" id='Catagory'>
                        <option value={"Personal care"}>Personal care</option>
                        <option value={"Electronics"}>Electronics</option>
                        <option value={"Home Decoration"}>Home Decoration</option>
                        <option value={"Cleanning"}>Cleanning</option>
                        <option value={"Consultancy"}>Consultancy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">Price</label>
                      <input type="number" className="form-control" id="price"/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Select image</label>
                  <div className="row">
                    <div className="col">
                      <input className="form-control form-control-sm" type="file" id="formFile1" />
                    </div>
                    <div className="col">
                      <input className="form-control form-control-sm" type="file" id="formFile2" />
                    </div>
                    <div className="col">
                      <input className="form-control form-control-sm" type="file" id="formFile3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>

          </div>
        </div>
      </div>
      {/* End */}
    </>
  )
}

export default AddServiceModal