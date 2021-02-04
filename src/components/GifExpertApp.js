import React, { useState } from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = ()=>{
    // const categories = ['One Punch', 'Samuray X', "Dragon Ball"];
    const [categories, setCategories] = useState(['One Punch']);
    const [categoryInput, setcategoryInput] = useState('');
    // const series = {
    //     onePonch:{
    //         protagonist:'Saitama',
    //         seassons:2,
    //     },
    //     dragonBall:{
    //         protagonist:'Saitama',
    //         seassons:4,
    //     },
    //     samurayX:{

    //     },
    // };

    // const addCategory = (event)=>{
    //     if(categoryInput !== ''){
    //         const exist = categories.find(category => category === categoryInput);
    //         console.log(exist);
    //         if(exist === undefined){
    //             // const newArray = [...categories,categoryInput];
    //             // setCategories(newArray);
    //             setCategories(cats =>{return [categoryInput,...categories]});
    //             setcategoryInput('');
                
    //         }else{
    //             alert('Category is already exist');
    //         }
    //     }
    //     else{
    //         alert('Category is not defined');
    //     }
    // }

    return (
        <>
            
            <h1>GifExpertApp</h1>
            <AddCategory setCategory={setCategories} categories={categories} />
            <hr/>
            <h3>Este será una iteración con un array</h3>
            <ol>
                {categories.map((element,i) => {
                    return <GifGrid key={element} category={element}></GifGrid>
                    // return <li key={element}>{i} + {element}</li>
                })}
            </ol>
            <br></br>
            {/*<input 
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
                        if(e.key === 'Enter')
                            addCategory(e)
                    }
                }
            />*/}
            {/* <button onClick={addCategory}>Add Category</button> */}
            <br></br>
            <h3>Este será una iteración con un objeto</h3>
        </>
    )
}

export default GifExpertApp;