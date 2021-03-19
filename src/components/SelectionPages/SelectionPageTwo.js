import React from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'

function SelectionPageTwo() {
    return (
        <div>
            <p>Välj vad som är viktigast för dig</p>
            <Link to={ROUTES.HOME}>Nästa</Link>
        </div>
    )
}

export default SelectionPageTwo
