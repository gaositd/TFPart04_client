import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { byName } from '../../redux/actions.js'

const Search = ({ allProducts }) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        let matches = [];
        if (e.target.value.length) {
            matches = allProducts.filter(data => {
                const regex = new RegExp(`^${e.target.value}`, 'gi');
                return data.name.match(regex);
            })
            setSuggestions(matches);
            setInput(e.target.value);
        } else {
            setSuggestions([]);
            setInput('');
        };
    };

    const handleClick = (sug) => {
        setInput(sug);
        setSuggestions([]);
        dispatch(byName(input));
    }

    const handleSearch = (e) => {
        dispatch(byName(input));
    };

    return (
        <div className="roundform-control mb-5 flex justify-center">
            <div className="roundmenu bg-info w-66 p-2 rounded-box w-[284px] ">
                <div className="flex justify-center">
                    <input type="text" placeholder="Search by name" onChange={handleChange} className="input input-bordered input-primary mr-2" />
                    <button onClick={handleSearch} className="btn btn-secondary" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                {suggestions.length ? <div className='flex justify-center flex-col mt-2'>
                    {suggestions ? suggestions.map((suggestion, i) => {
                        return (
                            <ul key={i} onClick={handleClick} className="roundmenu rounded-box bg-neutral mb-1 flex justify-center cursor-pointer">
                                <li >
                                    <div onClick={handleClick} className="cursor-pointer">{suggestion.name}</div>
                                </li>
                            </ul>
                        )
                    }) : ''}
                </div> : null}
            </div>
        </div>
    )
}

export default Search;