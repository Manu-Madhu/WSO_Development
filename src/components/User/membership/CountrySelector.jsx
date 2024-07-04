'use client';
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function CountrySelector() {
    const [selected, setSelected] = useState("");
    return (
        <div className='w-[64%] text-sm max-md:w-full relative'>
            <ReactFlagsSelect
                selected={selected}
                selectButtonClassName="rounded-lg "
                className="rounded-xl text-sm font-medium border-red-400 outline-none"
                onSelect={(code) => setSelected(code)}
                searchable={true}
            />
        </div>
    )
}

export default CountrySelector
