import data from './data.json';
import Jobs from './components/Jobs';
import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
    const [filterKeywords, setfilterkeywords] = useState([]);

    const addFilterKeywords = (data) => {
        if (!filterKeywords.includes(data)) {
            setfilterkeywords([...filterKeywords, data]);
        }
    };

    const deleteKeyword = (data) => {
        const newKeywords = filterKeywords.filter((key) => key !== data);
        setfilterkeywords(newKeywords);
    };

    const clearAll = () => {
        setfilterkeywords([]);
    };

    return (
        <div>
            <div className='header'></div>

            {filterKeywords.length > 0 && (
                <Header 
                    keywords={filterKeywords} 
                    removeKeywords={deleteKeyword} 
                    clearAll={clearAll} 
                />
            )}

            <Jobs 
                keywords={filterKeywords} 
                data={data} 
                setKeywords={addFilterKeywords} 
            />
        </div>
    );
}

export default App;