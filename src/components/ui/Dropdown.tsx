import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
    options: string[];
    label: string;
    onChange: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                className={`min-w-48 bg-primary-border text-neutral-80 py-2 px-4 flex items-center justify-between ${isOpen === true ? 'rounded-t-lg' : 'rounded-lg'}`}
                onClick={toggleDropdown}
            >
                <span>{selectedOption ? selectedOption : label}</span>
                <FaChevronDown className="ml-2" />
            </button>
            {isOpen && (
                <div className={`min-w-48 absolute left-0 bg-primary-border z-10 ${isOpen === true ? 'rounded-b-lg' : 'rounded-lg'}`}>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`w-full text-left py-2 px-4 focus:outline-none ${selectedOption === option ? 'bg-primary-main text-white' : 'hover:bg-primary-main hover:text-white'} ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
