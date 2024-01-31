import { useState } from "react";
import DropDown from "./DropDown";
import { InputChangeEvent } from "../types/event";
import { DropDownItem } from "../types/dropdownItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';

const InputField = () => {
    const [input, setInput] = useState("")
    const [active, setActive] = useState(false);
    const [value, setValue] = useState<DropDownItem[]>([]);


    const changeHandler = (e: InputChangeEvent) => {
        setInput(e.target.value)
        setActive(false)
    }

    const selectedHandler = (selectedData: string) => {
        setInput(selectedData)

    }

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (input) {
            setValue([...value, { label: input }])
            setActive(true)
            setInput('')
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} className="wrapper">
                <div className="input">
                    <input
                        type="text"
                        value={input}
                        onChange={changeHandler}
                        onClick={() => setActive(!active)}
                        className="inputField"
                    />
                    <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} className="inputArrow" />
                </div>
                <button type="submit" className="button"><FontAwesomeIcon icon={faPlus} /></button>
            </form>
            {active &&
                <DropDown data={value} selectedHandler={selectedHandler} />
            }
        </>
    );
};

export default InputField;
