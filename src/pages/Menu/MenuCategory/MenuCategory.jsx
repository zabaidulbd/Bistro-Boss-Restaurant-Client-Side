
import PopularItem from "../../../shared/PopularItem/PopularItem";


const MenuCategory = ({ items }) => {

    return (
        <div className='grid md:grid-cols-2 gap-4 my-10'>
            {
                items.map(item => <PopularItem
                    key={item._id} item={item}
                ></PopularItem>)
            }
        </div>
    );
};

export default MenuCategory;