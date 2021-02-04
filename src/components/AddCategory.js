import React, { useState } from 'react'
import PropTypes from 'prop-types'

// puedo user ( props )=>{} para despues usar props.setCategory
const AddCategory = ({setCategory,categories}) => {
     const setCategories = setCategory;
     const categoriesByProps = categories;
    const [categoryInput, setcategoryInput] = useState('');

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        // setCategories(currentCategories => [categoryInput, ...currentCategories]);
        addCategory(e);
    }

    const addCategory = (event)=>{
        if(categoryInput.trim() !== ''){
            const exist = categoriesByProps.find(category => category === categoryInput);
            console.log(exist);
            if(exist === undefined){
                // const newArray = [...categories,categoryInput];
                // setCategories(newArray);
                setCategories(cats =>{return [categoryInput,...cats]});
                setcategoryInput('');
                
                }else{
                    alert('Category is already exist');
                }
        }
        else{
            alert('Category is not defined');
        }
    }

    return (
        <>
        <h2>Add new category</h2>
        <form onSubmit={handleSubmit}>
            <input 
                id="category" 
                type="text" 
                value={categoryInput}
                placeholder="Add new category" 
                onChange={
                    (e)=>{
                     setcategoryInput(e.target.value);
                    }
                }
                onKeyPress={
                    e=>{
                        //  if(e.key === 'Enter')
                        //      addCategory(e)
                    }
                }
            />
            <button type="button" onClick={addCategory}>Add Category</button>
        </form>
        </>
    )
}

AddCategory.propTypes={
    setCategory: PropTypes.func.isRequired,
}


export default AddCategory
