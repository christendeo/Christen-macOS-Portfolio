import dayjs from "dayjs";
import {navLinks, navIcons} from "#constants";

const Navbar = () => {
    return <nav>
        <div>
            <img alt="logo" />
            <p className="font-bold">Christen's Portfolio</p>
            <ul>
                {/*Used parenthesis to auto return li bullet point*/}
                {navLinks.map(({ id, name}) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} className="icon-hover" alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>

            {/*Display current date and time*/}
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
};
export default Navbar;
