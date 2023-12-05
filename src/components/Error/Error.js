import './Error.css'

import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Error({ status, message }) {
    const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  };

    return (
        <section className="error">
            <span className="error__status">{status}</span>
            <h1 className="error__message">{message}</h1>
            <Link onClick={handleClick} className="error__link">Назад</Link>
        </section>
    )
}

export default Error;