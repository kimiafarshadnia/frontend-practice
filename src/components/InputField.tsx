import { useState } from "react";
import DropDown from "./DropDown";
import { DropDownItem } from "../types/dropdownItems";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = () => {
    const [input, setInput] = useState("")
    const [active, setActive] = useState(false);
    const [value, setValue] = useState<DropDownItem[]>([]);


    const changeHandler = (e) => {
        setInput(e.target.value)
        setActive(false)
    }

    const selectedHandler = (selectedData: string) => {
        setInput(selectedData)
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (input) {
            setValue([...value, { label: input }])
            setActive(true)
            setInput('')
        }
    }
   
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="wrapper">
                    <input
                        type="text"
                        value={input}
                        onChange={changeHandler}
                        onClick={() => setActive(!active)}
                        className="input"
                    />
                    <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} className="arrow"/>
                </div>
            </form>
            {active &&
                <DropDown data={value} selectedHandler={selectedHandler} />
            }
        </>
    );
};

export default InputField;
