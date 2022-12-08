import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { renderRoutes } from 'react-router-config'

function User(props:any){
	return (
		<Router>
			<div>
				用户
				<Link to="/user">用户首页</Link>
				<Link to="/user/info">-----用户信息页</Link>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch >
						{renderRoutes(props.route.children)}

					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default User;