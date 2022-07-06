import React from 'react';

const Tooltip = () => {
    return (
        <div>
            <div>
                <ul>
                    <li>Unsort</li>
                    <li>Sort by ASC<span/></li>
                    <li>Sort by DESC<span/></li>
                    <li>Filter<span/></li>
                    <li>Hide<span/></li>
                    <li>Show columns<span/></li>
                </ul>
                <hr/>
                <div>
                    <button>Apply</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Tooltip;