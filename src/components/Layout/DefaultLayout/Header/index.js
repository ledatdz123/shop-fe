import { Avatar, Badge, Dropdown, Image, Input, Menu, Space } from 'antd';
import './header.scss';
import UserImage from '@/logo.svg';
import {
    BellOutlined,
    FacebookOutlined,
    GlobalOutlined,
    InstagramOutlined,
    QuestionCircleOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
function Header() {
    const [languageName, setLanguageName] = useState('Tiếng Việt');
    const handleChange = (e) => {
        console.log(`selected ${e}`);
    };
    const itemTranport = [
        {
            key: 'jst',
            label: 'J&T Express',
            value: 'jst',
        },
        {
            key: '2',
            label: 'GHTK',
            value: 'jst',
        },
    ];
    const menuLeft = [
        {
            key: 'transport',
            label: (
                <Dropdown
                    onChange={handleChange}
                    menu={{
                        items: itemTranport,
                    }}
                    arrow
                    vi
                >
                    <Space>Kênh vận chuyển</Space>
                </Dropdown>
            ),
        },
        {
            key: 'download',
            label: (
                <Dropdown
                    onChange={handleChange}
                    menu={{
                        items: itemTranport,
                    }}
                    arrow
                >
                    <Space>Tải ứng dụng</Space>
                </Dropdown>
            ),
        },
        {
            label: 'Kết nối',
            key: 'connect',
            icon: [<FacebookOutlined />, <InstagramOutlined />],
        },
    ];
    const handleDropdownItemClick = (e) => {
        if (e.key === 'vn') {
            setLanguageName('Tiếng Việt');
        } else {
            setLanguageName('English');
        }
    };
    const menuRight = [
        {
            key: 'notify',
            label: (
                <Dropdown
                    onChange={handleChange}
                    menu={{
                        items: itemTranport,
                    }}
                    arrow
                >
                    <Space>
                        <BellOutlined />
                        Thông báo
                    </Space>
                </Dropdown>
            ),
        },
        { key: 'support', label: 'Hỗ trợ', icon: <QuestionCircleOutlined /> },
        {
            key: 'language',
            label: (
                <Dropdown
                    menu={{
                        onClick: handleDropdownItemClick,
                        items: [
                            {
                                label: 'Tiếng Việt',
                                key: 'vn',
                                value: 'vietnamese',
                            },
                            {
                                label: 'English',
                                key: 'eng',
                                value: 'vietnamese',
                            },
                        ],
                        defaultValue: 'Tiếng Việt',
                    }}
                    arrow
                >
                    <Space>
                        <GlobalOutlined />
                        {languageName}
                    </Space>
                </Dropdown>
            ),
        },
    ];
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="header_wrapper">
            <div className="header content">
                <div className="header_top">
                    <div>
                        <Menu
                            mode="horizontal"
                            style={{
                                backgroundColor: 'gold',
                                border: 'none',
                                height: '35px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            items={menuLeft}
                        ></Menu>
                    </div>
                    <div className="header_top_right">
                        <div>
                            <Menu
                                mode="horizontal"
                                style={{
                                    backgroundColor: 'gold',
                                    border: 'none',
                                    height: '35px',
                                    width: '350px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                items={menuRight}
                            ></Menu>
                        </div>
                        <Space style={{ marginRight: '20px' }}>
                            <Dropdown
                                menu={{
                                    items: [
                                        {
                                            label: 'Tiếng Việt',
                                            key: 'vn',
                                            value: 'vietnamese',
                                        },
                                        {
                                            label: 'English',
                                            key: 'eng',
                                            value: 'vietnamese',
                                        },
                                    ],
                                }}
                                arrow
                            >
                                <Space>
                                    <Avatar src={UserImage}></Avatar>
                                    <span>username</span>
                                </Space>
                            </Dropdown>
                        </Space>
                    </div>
                </div>
                <div className="header_mid">
                    <div
                        style={{
                            height: '100%',
                            width: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <Image src={UserImage} preview={false} width={'50px'} height={'100%'}></Image>
                            <Image src={UserImage} preview={false} width={'50px'} height={'100%'}></Image>
                            <Image src={UserImage} preview={false} width={'50px'} height={'100%'}></Image>
                        </div>
                        <span>reactshop</span>
                    </div>
                    <Search
                        style={{ width: '100%', margin: '0 35px' }}
                        size="large"
                        placeholder="input text"
                        onSearch={onSearch}
                    ></Search>
                    <Space>
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        label: 'Tiếng Việt',
                                        key: 'vn',
                                        value: 'vietnamese',
                                    },
                                    {
                                        label: 'English',
                                        key: 'eng',
                                        value: 'vietnamese',
                                    },
                                ],
                            }}
                            arrow
                        >
                            <Badge count={1} style={{ marginRight: '25px' }}>
                                <ShoppingCartOutlined style={{ fontSize: '30px', marginRight: '25px' }} />
                            </Badge>
                        </Dropdown>
                    </Space>
                </div>
                <div className="header_bottom">aa</div>
            </div>
        </div>
    );
}

export default Header;
