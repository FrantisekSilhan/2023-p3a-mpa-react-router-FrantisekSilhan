import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Outlet, RouterProvider } from "react-router-dom";


export const Layout = () => {

  return (
    <>
      <h1>Timer</h1>
      <Outlet />
      <button className='settings__button' onClick={() => {/*setIsSettings(x => !x)*/}}><FontAwesomeIcon icon={faGear} />Click</button>
    </>
  );
}

export default Layout;