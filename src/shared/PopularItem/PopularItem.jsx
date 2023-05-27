

const PopularItem = ({ item }) => {

    const { image, name, recipe, price } = item;

    return (
        <>
            <section className='flex gap-4'>
                <div className='mb-4'>
                    <img className='w-[118px]' style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
                </div>
                <div className='flex'>
                    <div>
                        <h2 className='font-xl font-bold'>{name}</h2>
                        <p>{recipe}</p>
                    </div>
                    <p className='text-orange-400'>${price}</p>

                </div>

            </section>
        </>
    );
};

export default PopularItem;