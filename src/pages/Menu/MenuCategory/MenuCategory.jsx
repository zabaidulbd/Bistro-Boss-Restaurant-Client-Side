
import { Link } from "react-router-dom";
import PopularItem from "../../../shared/PopularItem/PopularItem";


const MenuCategory = ({ items, title }) => {

    return (
        <>
            <div className='grid md:grid-cols-2 gap-4 my-10'>
                {
                    items.map(item => <PopularItem
                        key={item._id} item={item}
                    ></PopularItem>)
                }

            </div>
            {
                title && <Link to={`/order/${title}`}><button className="btn btn-secondary">Button</button></Link>
            }



        </>
    );
};

export default MenuCategory;