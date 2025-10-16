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
    <div className='flex p-2 justify-center lg:justify-start '>
      {Object.keys(Nav).map((val, index) => {
        const isActive = path === Nav[val];
        return (
          <Link
            key={'Nav' + index}
            to={Nav[val]}
            className={isActive ? 'nav-active bobber' : 'nav-idle'}
          >
            {val}
          </Link>
        );
      })}
    </div>
  );
}

export default NavBar;
