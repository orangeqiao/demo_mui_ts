import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import styles from './index.module.less'
import { useCallback, useState } from 'react';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appBar:{
		boxShadow:'none'
	}
}));
interface IPageOwnProps {
open:boolean,
onChange?: (value:boolean) => void
}
function LayoutBar({
	open=false,
	onChange,
}:IPageOwnProps) {
	const classes = useStyles();

	const changeMenuShow=useCallback(()=>{
		onChange&&onChange(open)
		

	},[open])
	return (
		<div className={styles.home}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={changeMenuShow}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	)

}


export default LayoutBar
