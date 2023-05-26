
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category == 'offered');
    const desserts = menu.filter(item => item.category == 'dessert');
    const pizza = menu.filter(item => item.category == 'pizza');
    const salad = menu.filter(item => item.category == 'salad');
    const soup = menu.filter(item => item.category == 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <SectionTitle heading='todays offer' subHeading="don't miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <Cover img={dessertImg} title="dessert"></Cover>
            <MenuCategory items={desserts}></MenuCategory>
            <Cover img={pizzaImg} title='pizza'></Cover>
            <MenuCategory items={pizza}></MenuCategory>
            <Cover img={saladImg} title='salad'></Cover>
            <MenuCategory items={salad}></MenuCategory>
            <Cover img={soupImg} title='soup'></Cover>
            <MenuCategory items={soup}></MenuCategory>

        </div>
    );
};

export default Menu;