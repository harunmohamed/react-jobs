import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = ({ data, setKeywords, keywords }) => {
    console.log(data);
    const [filteredData, setfilterData] = useState([]);

    const modifiedData = () => {
        if (keywords) {
            const newData = data.filter((d) => {
                return keywords.every((key) => {
                    return (
                        d.role === key || 
                        d.level === key ||
                        d.languages.includes(key) ||
                        d.tools.includes(key)
                    );
                });
            });
            setfilterData(newData);
        } else {
            setfilterData(data);
        }
    };

    useEffect(() => {
        modifiedData();
    }, [keywords]);

    return (
        <div className="jobs">
            {filteredData.map((d) => {
                return <Job key={d.id} data={d} setKeywords={setKeywords} />;
            })}
        </div>
    );
};

export default Jobs