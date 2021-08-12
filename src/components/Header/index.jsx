import React, { useState } from 'react'
import { HeaderContainer } from './Header.style'
import { categoriesData } from '../../config/data'


const Header = ({ setCat, setYear, setMaxYear }) => {

    const [filterYear, setFilterYear] = React.useState('');
    const [filterCat, setFilterCat] = useState('')


    // handler function to filter year
    const handleYear = (e) => {
        setFilterYear(e.target.value)
        setYear(e.target.value)
        setMaxYear(e.target.value)
    }


    // handler function to filter category
    const handleCategory = (e) => {
        setFilterCat(e.target.value)
        setCat(e.target.value)
    }


    // render categories
    const renderCategories = categoriesData.map((data) => {
        return <option value={data.category} key={data.id}>{data.category}</option>
    })


    //LOGIC TO ELIMINATE DUPLICATE YEAR FROM THE ARRAY
    // const jsonObject = items.map(JSON.stringify);

    // console.log(jsonObject);

    // let uniqueSet = new Set(jsonObject);
    // const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    // console.log(uniqueArray);

    // const fetchUnique = items.map((un, ik) => {
    //     console.log(un.year)
    //     return <pre>{JSON.stringify(un.year, null, 4)} </pre>
    // })


    // convert years into array()
    let arr = []
    const fetchYear = () => {
        for (let i = 1900; i < 2019; i++) {
            arr.push(i)

        }
    }
    fetchYear()

    return (
        <HeaderContainer>
            <h1>Nobel Prize</h1>

            <select name="category" id="category" value={filterCat} onChange={handleCategory} >
                <option value="" defaultValue="Category" disabled hidden>
                    Category
                </option>
                {renderCategories}
            </select>

            <select name="year" id="year" value={filterYear} onChange={handleYear} >
                <option value="" defaultValue="Year" disabled hidden>
                    Year
                </option>
                {arr.map((ds, i) => {
                    return <option value={ds} key={i}>{ds}</option>
                })}

            </select>
        </HeaderContainer>
    )
}

export default Header
