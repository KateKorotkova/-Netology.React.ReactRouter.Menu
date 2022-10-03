import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Menu({routes}) {
    const location = useLocation();
    const { pathname } = location;

    return <>
        <div>
            <nav className="menu">
                {routes.map((x) => {
                    let isSelected = pathname == x.path;
                    let className = isSelected ? "menu__item-active" : "menu__item";
                    return <NavLink className={`menu__item ${className}`} to={x.path}>{x.name}</NavLink>
                })}
            </nav>
        </div>
    </>;
}


export {Menu};