import React from 'react';

import { NavProps } from './index';
export interface NavContextType {
    isCollapsed?: boolean;
    mode?: NavProps['mode'];
    openKeys?: string[];
    onCollapseChange?: NavProps['onCollapseChange'];
    prefixCls?: string;
    selectedKeys?: string[];
}

const NavContext = React.createContext({
    isCollapsed: false,
    selectedKeys: [],
    openKeys: [],
});

export default NavContext;
