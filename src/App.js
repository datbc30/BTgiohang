// import logo from './logo.svg';
// import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">MoveHere</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'}
              style={({isActive}) => isActive ? {borderRadius:'5px'} :{}}
              to="/home">Home
              <span className='visually-hidden'>(current)</span></NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to="/content">Content</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to="login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to="reactfrom">From</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to="frombt">frombt</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'bg-light text-dark nav-link':'nav-link'} to="datve">Đặt Vé Xem Phim</NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
              </div>
            </li> */}
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div style={{height:"900px"}}>
        <Outlet />
      </div>
      <footer className='bg-dark text-center text-white p-5'>footer</footer>
    </div>
  );
}

export default App;
