import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';

// 类型定义
export interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
  disabled?: boolean;
  onClick?: () => void;
}

interface MenuContextType {
  mode: 'vertical' | 'horizontal';
  selectedKeys: string[];
  openKeys: string[];
  onSelect: (key: string) => void;
  onOpenChange: (keys: string[]) => void;
}

// 创建 Context
const MenuContext = createContext<MenuContextType>({
  mode: 'vertical',
  selectedKeys: [],
  openKeys: [],
  onSelect: () => {},
  onOpenChange: () => {},
});

// 动画效果
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 样式组件
const MenuContainer = styled.ul<{ mode: 'vertical' | 'horizontal' }>`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  ${props => props.mode === 'horizontal' ? css`
    display: flex;
    flex-direction: row;
  ` : css`
    display: flex;
    flex-direction: column;
  `}
`;

const MenuItem = styled.li<{ selected?: boolean; disabled?: boolean }>`
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  
  &:hover {
    background-color: ${props => props.disabled ? 'inherit' : '#f5f5f5'};
  }
  
  ${props => props.selected && css`
    background-color: #e6f7ff;
    color: #1890ff;
  `}
  
  ${props => props.disabled && css`
    cursor: not-allowed;
    color: #ccc;
  `}
`;

const SubMenuWrapper = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.3s ease-in-out;
  margin-left: 24px;
`;

// 子菜单组件
const SubMenu: React.FC<{
  item: MenuItem;
  level: number;
}> = ({ item, level }) => {
  const { mode, openKeys, onOpenChange, selectedKeys, onSelect } = useContext(MenuContext);
  const isOpen = openKeys.includes(item.key);
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.children) {
      const newOpenKeys = isOpen
        ? openKeys.filter(k => k !== item.key)
        : [...openKeys, item.key];
      onOpenChange(newOpenKeys);
    }
  };

  return (
    <>
      <MenuItem
        onClick={handleClick}
        selected={selectedKeys.includes(item.key)}
        disabled={item.disabled}
      >
        {item.icon}
        {item.label}
        {item.children && (
          <span style={{ marginLeft: 'auto' }}>
            {isOpen ? '▼' : '▶'}
          </span>
        )}
      </MenuItem>
      {item.children && (
        <SubMenuWrapper isOpen={isOpen}>
          {item.children.map(child => (
            <MenuItemComponent
              key={child.key}
              item={child}
              level={level + 1}
            />
          ))}
        </SubMenuWrapper>
      )}
    </>
  );
};

// 菜单项组件
const MenuItemComponent: React.FC<{
  item: MenuItem;
  level: number;
}> = ({ item, level }) => {
  const { onSelect, selectedKeys } = useContext(MenuContext);

  if (item.children) {
    return <SubMenu item={item} level={level} />;
  }

  return (
    <MenuItem
      onClick={() => {
        if (!item.disabled) {
          onSelect(item.key);
          item.onClick?.();
        }
      }}
      selected={selectedKeys.includes(item.key)}
      disabled={item.disabled}
    >
      {item.icon}
      {item.label}
    </MenuItem>
  );
};

// 主菜单组件
export const Menu: React.FC<{
  items: MenuItem[];
  mode?: 'vertical' | 'horizontal';
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: (key: string) => void;
  style?: React.CSSProperties;
  className?: string;
}> = ({
  items,
  mode = 'vertical',
  defaultSelectedKeys = [],
  defaultOpenKeys = [],
  onSelect: onSelectProp,
  style,
  className,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(defaultSelectedKeys);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  const handleSelect = useCallback((key: string) => {
    setSelectedKeys([key]);
    onSelectProp?.(key);
  }, [onSelectProp]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenKeys([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        mode,
        selectedKeys,
        openKeys,
        onSelect: handleSelect,
        onOpenChange: handleOpenChange,
      }}
    >
      <MenuContainer mode={mode} style={style} className={className}>
        {items.map(item => (
          <MenuItemComponent
            key={item.key}
            item={item}
            level={0}
          />
        ))}
      </MenuContainer>
    </MenuContext.Provider>
  );
};

// 使用示例
export const MenuExample: React.FC = () => {
  const items: MenuItem[] = [
    {
      key: '1',
      label: '导航一',
      children: [
        {
          key: '1-1',
          label: '选项1',
        },
        {
          key: '1-2',
          label: '选项2',
        },
      ],
    },
    {
      key: '2',
      label: '导航二',
      disabled: true,
    },
    {
      key: '3',
      label: '导航三',
      children: [
        {
          key: '3-1',
          label: '选项3',
        },
        {
          key: '3-2',
          label: '选项4',
        },
      ],
    },
  ];

  return (
    <Menu
      items={items}
      defaultSelectedKeys={['1-1']}
      defaultOpenKeys={['1']}
      onSelect={(key) => console.log('selected:', key)}
    />
  );
}; 