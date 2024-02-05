// import { Checkbox, Divider } from 'antd';
// import { useEffect, useState } from 'react';
// import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
// const CheckboxGroup = Checkbox.Group;
// const fruitOptions = ['Apple', 'Pear', 'Orange'];
// const vegetableOptions = ['Carrot', 'Tomato', 'Onion'];
// const defaultCheckedList = [];
// function Slidebar() {
//     const [checkedList, setCheckedList] = useState(defaultCheckedList);
//     const [checkedGroup, setCheckedGroup] = useState([]);
//     const navigate = useNavigate();
//     const { keysearch } = useParams();
//     const onChange = (list, group) => {
//         setCheckedList(list);
//         if (checkedGroup.includes(group)) {
//             setCheckedGroup(checkedGroup.map((g) => (g === group ? group : g)));
//         } else {
//             setCheckedGroup([...checkedGroup, group]);
//         }
//         console.log(`Group: ${group}`, 'Checked List:', list);
//     };
//     useEffect(() => {
//         const params = {};
//         // Duyệt qua các nhóm đã chọn và thêm vào params
//         checkedGroup.forEach((group) => {
//             params[group] = checkedList.length > 0 ? checkedList.join(',') : checkedList;
//         });
//         navigate({
//             pathname: `/search/${keysearch}`,
//             // search: createSearchParams({
//             //     [checkedGroup]: checkedList.length > 0 ? checkedList.join(',') : checkedList,
//             // }).toString(),
//             search: createSearchParams(params).toString(),
//         });
//     }, [checkedList, checkedGroup]);
//     console.log('checklist', checkedList);
//     return (
//         <div style={{ width: '18%' }}>
//             <Divider />
//             <CheckboxGroup options={fruitOptions} onChange={(list) => onChange(list, 'fruit')} />
//             <CheckboxGroup options={vegetableOptions} onChange={(list) => onChange(list, 'vegetable')} />
//         </div>
//     );
// }

// export default Slidebar;

import { Checkbox, Divider } from 'antd';
import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
const CheckboxGroup = Checkbox.Group;
const fruitOptions = ['Apple', 'Pear', 'Orange'];
const vegetableOptions = ['Carrot', 'Tomato', 'Onion'];
const defaultCheckedList = [];
function Slidebar() {
    const [fruitCheckedList, setFruitCheckedList] = useState(defaultCheckedList);
    const [vegetableCheckedList, setVegetableCheckedList] = useState(defaultCheckedList);
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkedGroup, setCheckedGroup] = useState([]);
    const navigate = useNavigate();
    const { keysearch } = useParams();
    // const onChange = (list, group) => {
    //     if (group === 'fruit') {
    //         setFruitCheckedList(list);
    //     } else if (group === 'vegetable') {
    //         setVegetableCheckedList(list);
    //     }

    //     // Update checkedGroups based on the current state of both fruit and vegetable options
    //     const updatedGroups = [];
    //     if (fruitCheckedList.length > 0) {
    //         updatedGroups.push('fruit');
    //     }
    //     if (vegetableCheckedList.length > 0) {
    //         updatedGroups.push('vegetable');
    //     }
    //     setCheckedGroup(updatedGroups);
    // };
    // useEffect(() => {
    //     const params = {};
    //     // Duyệt qua các nhóm đã chọn và thêm vào params
    //     checkedGroup.forEach((group) => {
    //         if (group === 'fruit') {
    //             params['fruit'] = fruitCheckedList.join(',');
    //         } else if (group === 'vegetable') {
    //             params['vegetable'] = vegetableCheckedList.join(',');
    //         }
    //     });
    //     navigate({
    //         pathname: `/search/${keysearch}`,
    //         search: createSearchParams(params).toString(),
    //     });
    // }, [fruitCheckedList, vegetableCheckedList, checkedGroup]);

    const onChange = (list, group) => {
        const updatedList = list;
        setCheckedList((prevList) => {
            // Xóa các phần tử đã có trong mảng để tránh duplicate
            const filteredList = prevList.filter((item) => !updatedList.includes(item));
            // Thêm các phần tử mới vào mảng
            return [...filteredList, ...updatedList];
        });
    };

    useEffect(() => {
        // Tạo một object params với key là 'fruit' và 'vegetable'
        const params = {
            fruit: checkedList.filter((item) => fruitOptions.includes(item)).join(','),
            vegetable: checkedList.filter((item) => vegetableOptions.includes(item)).join(','),
        };

        navigate({
            pathname: `/search/${keysearch}`,
            search: createSearchParams(params).toString(),
        });
    }, [checkedList]);

    useEffect(() => {
        // Tạo một object params với key là 'fruit' và 'vegetable'
        const params = {
            fruit: checkedList.filter((item) => fruitOptions.includes(item)).join(','),
            vegetable: checkedList.filter((item) => vegetableOptions.includes(item)).join(','),
        };

        navigate({
            pathname: `/search/${keysearch}`,
            search: createSearchParams(params).toString(),
        });
    }, [checkedList]);
    return (
        <div style={{ width: '18%' }}>
            <Divider />
            <CheckboxGroup options={fruitOptions} onChange={(list) => onChange(list, 'fruit')} />
            <CheckboxGroup options={vegetableOptions} onChange={(list) => onChange(list, 'vegetable')} />
        </div>
    );
}

export default Slidebar;
