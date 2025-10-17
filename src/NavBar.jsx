import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const Nav = {'Home':'/','Wip':'/wip','About':'/about','Connect':'/connect'};
  const location = useLocation();
  const [path, setPath] = useState(null);
 const [hasMounted, setHasMounted] = useState(false);
 useEffect(() => { setHasMounted(true); setPath(location.pathname); });
 if (!hasMounted) { return null; }


  return (
    <div className='top-0 z-50 sticky p-2'>
    <div className='acrylic-box flex p-2 justify-center  lg:justify-start shadow'>
      {Object.keys(Nav).map((val, index) => {
        const isActive = path === Nav[val];
        return (
        <div key={'Nav' + index}>
          
          <Link
            
            to={Nav[val]}
            className={isActive ? 'nav-active bobber' : 'nav-idle'}
          >
            {val}
          </Link><p className='text-transparent pl-4 pr-4 pb-5'>{val}</p>
          </div>
          
        );
      })}
    </div></div>
  );
}

export default NavBar;
