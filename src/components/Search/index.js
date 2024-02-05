import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchHeader({ options }) {
    const [search, setSearch] = useState(options);
    const navigate = useNavigate();
    const searchOption = (searchText) => {
        setSearch([
            ...options,
            {
                label: `${searchText}`,
                value: `${searchText}`,
            },
            {
                label: `${searchText}${searchText}`,
                value: `${searchText}${searchText}`,
            },
        ]);
    };
    return (
        <AutoComplete
            popupClassName="certain-category-search-dropdown"
            style={{
                width: '80%',
            }}
            options={search}
            filterOption={true}
            onSearch={(value) => {
                console.log('value', value);
                searchOption(value);
            }}
            onSelect={(value) => {
                console.log('select value', value);
                navigate(`/search/${value}`);
            }}
            size="large"
        >
            <Input.Search size="large" placeholder="input here" />
        </AutoComplete>
    );
}

export default SearchHeader;
