import { FC, memo, useState } from 'react';
import { DropDownItem } from "../types/dropdownItems";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Props {
    data: DropDownItem[];
    selectedHandler: (a: string) => void;
}

const DropDown: FC<Props> = memo(({ data, selectedHandler }) => {

    const [selected, setSelected] = useState('')

    const selectHandler = (item: string) => {
        selectedHandler(item)
        setSelected(item)

    }
    return (
        <div className='list' >
            {data.map((item, id) => (
                <div
                    key={id}
                    onClick={() => selectHandler(item.label)}
                    className='listItem'
                >

                    {item.label}

                    <span className='selected'>
                        {selected === item.label ? <FontAwesomeIcon icon={faCheck} /> : ''}
                    </span>
                </div>
            ))
            }
        </div>
    );
});

export default DropDown;
