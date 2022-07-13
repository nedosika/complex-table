import React, {useState} from 'react';

const Popup = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {isOpen && children}
        </div>
    );
};

export default Popup;