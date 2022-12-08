import {
	Box,
	Button,
} from '@material-ui/core';
import styles from './index.module.less'
import LayoutMain from './component/layoutMain';
import LayoutBar from './component/layoutBar';
import LayoutMenu from './component/layoutMenu';
import { useState,useCallback } from 'react';
function Layout() {
	const [showMenu,setShowMenu]=useState(true as boolean)
	const changeMenuShow=useCallback((value:boolean)=>{
		setShowMenu(!value)
	},[showMenu])
	return (
		<div className={styles.layout}>
			<LayoutBar open={showMenu} onChange={changeMenuShow}/>
			<div className={styles.main}>
				<div className={styles.main_left} style={{width:showMenu?'200px':'0'}}>
					<LayoutMenu />
				</div>
				<div className={styles.main_right}>
					<LayoutMain />
				</div>
			</div>

		</div>
	)

}


export default Layout
