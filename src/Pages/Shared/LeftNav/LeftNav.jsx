import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>All Category</h2>
            <div className='mx-auto'>
                <div className='p-2 d-flex flex-column gap-3 secondary'>
                    {
                        categories.map(category => <Link className='text-decoration-none text-black' to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftNav;