import './App.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const Nav ={'Home':'/','Wip':'/wip','About':'/about','Connect':'/connect'}
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <div className='flex p-2'>
        {Object.keys(Nav).map((val,index)=>{
            
            return(<Link className={currentPath==Nav[val]?'nav-active bobber':'nav-idle'} key={'Nav'+index} to={Nav[val]}>{val}</Link>

            )
        })}
      </div>
    </>
  )
}

export default NavBar
