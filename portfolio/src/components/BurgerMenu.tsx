import { useEffect, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';

const CustomBurgerIcon = () => <i className="fa-solid fa-bars fa-2xl"></i>;
const CustomCrossIcon = () => <i className="fa-solid fa-xmark fa-2xl"></i>;

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {   
        setIsOpen(false);
    }, [location]);

    return (
        <Menu
            pageWrapId='page-wrap'
            outerContainerId='outer-container'
            right
            isOpen={isOpen}
            onStateChange={(state) => setIsOpen(state.isOpen)}
            customBurgerIcon={<CustomBurgerIcon />}
            customCrossIcon={<CustomCrossIcon />}
        >
            <Link to='/'>
                <h3>Porftolio</h3>
            </Link>
            <Link to='/experience'>
                <h3>Experience</h3>
            </Link>
            <Link to='/about'>
                <h3>About me</h3>
            </Link>
            <Link to='/goals'>
                <h3>My goals</h3>
            </Link>
        </Menu>
    );
}