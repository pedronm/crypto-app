import React, {useEffect, useState} from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
 
//    É um hook, que ao chamar o setActiveMenu
//    https://pt-br.reactjs.org/docs/hooks-reference.html
   
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize);

    handleResize();

    return() => window.removeEventListener('resize', handleResize);
  }, [])

//    É um hook aceita uma função que contém um código imperativo, possivelmente efetivo.enu
//    https://pt-br.reactjs.org/docs/hooks-reference.html
// ****Mutações, assinaturas, temporizadores, logs e outros side effects não são permitidos dentro do corpo principal de um componente funcional (React se refere a isso como render phase). Usá-los levará a erros confusos e inconsistências na UI.
   
  useEffect( () => {
    if(screenSize < 768){
        setActiveMenu(false);
    }else{
        setActiveMenu(true);
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo" >
                <Link to="/">Crytoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(true)}>
                <MenuOutlined />
            </Button>
        </div>
        {activeMenu && (
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/">News</Link>
                </Menu.Item>
            </Menu>
        )}
        
    </div>
  )
}
export default Navbar