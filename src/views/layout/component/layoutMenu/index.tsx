import {
	Typography,
	MenuItem
} from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiList from '@material-ui/core/MenuList';
import { useState } from 'react';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styles from './index.module.less'
const Accordion = withStyles({
	root: {
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},

		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {
	},
})(MuiAccordion);

const AccordionSummary = withStyles({
	root: {
		minHeight: 30,
		'&$expanded': {
			minHeight: 30,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {

	},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails);
const MenuList = withStyles((theme: Theme) => ({
	root: {
		width: '100%'
	},
}))(MuiList);
const useStyles = makeStyles((theme: Theme) => ({
	as_title: {
		color: theme.palette.primary.light
	}
}));
function LayoutMenu() {
	const classes = useStyles();
	const [expanded, setExpanded] = useState('panel1');
	const handleChange = (panel: any) => (event: any, newExpanded: any) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className={styles.layout_menu}>
			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography className={classes.as_title}>菜单1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<MenuList >
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</AccordionDetails>
			</Accordion>
			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography className={classes.as_title}>菜单2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</AccordionDetails>
			</Accordion>
			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel3')}>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography className={classes.as_title}>菜单3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuList>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}


export default LayoutMenu
