import {
    Home,
    Box,
    DollarSign,
    Settings,
    Edit2,
    Users,
    AlignLeft,
    UserPlus,
    Folder,
    BarChart,Archive, LogIn
} from 'react-feather';


export const MENUITEMS = [
    {
        title: 'Customize', icon: Edit2, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Pages', icon: AlignLeft, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Menus', icon: Box, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Products', icon: Folder, type: 'sub', active: false, children: [
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
        title: 'Users', icon: Users, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', active: false, children: [
            { path: '/', title: 'Children', type: 'link' },
        ]
    },
    {
        title: 'Logout', icon: Settings, type: 'link', active: false
    }
]
