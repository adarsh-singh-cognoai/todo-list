import React from 'react'
import './footer.css'
const Footer = () => {
  let footerStyle = {
    // position: "relative",
    // width: "100%",
    // top: "10vh",
    // // border: "2px solid red"
  }
  return (
    <div className='bg-dark text-light text-center py-3' style= {footerStyle}>
      <p>Copyright &copy; MyTodosList.com</p>
    </div>
  )
}

export default Footer
