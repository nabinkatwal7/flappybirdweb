import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost text-xl">NEXTJS-GSAP</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/dashboard' >Dashboard</a></li>
      <li><a href='/scrolltrigger' >Scroll Trigger</a></li>
      <li><a href='/animations' >Animations</a></li>
      <li><a href='/daisy' >Daisy</a></li>
      <li><a href='/card' >MasterCard</a></li>
      <li><a href='/spiderman' >Spider Man</a></li>
      {/* <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li> */}
    </ul>
  </div>
</div>
  )
}

export default Navbar