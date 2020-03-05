import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Customize', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Pages', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Menus', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Products', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'All products', type: 'link' },
            { path: '/products/add-product', title: 'Add product', type: 'link' }
        ]
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Users', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Settings', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Logout', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    }
]
