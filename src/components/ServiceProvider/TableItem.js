import React from 'react'

const TableItem = () => {
    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>Salon</td>
                <td>salon for Men at home</td>
                <td>salon+men+beauty</td>
                <td>beauty</td>
                <td>499</td>
                <td>link</td>
                <td>
                    <div className="d-flex justify-content-center">
                        <a href="#"><i className="fa-solid fa-pen-to-square"></i></a>
                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default TableItem