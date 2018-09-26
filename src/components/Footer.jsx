import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ remaining }) =>
  <footer className="footer">
    <span className="todo-count">
      <strong>{remaining}</strong>
      {remaining === 1 ? ' todo' : ' todos'} left
    </span>
    <ul className="filters">
      <li><Link to="/">All</Link></li>
      <li><Link to="/active">Active</Link></li>
      <li><Link to="/completed">Completed</Link></li>
    </ul>
  </footer>


export default Footer;