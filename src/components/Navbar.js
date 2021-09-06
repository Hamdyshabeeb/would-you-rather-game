import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logout from './Logout';
import { connect } from 'react-redux';
import LoggedUser from './LoggedUser';

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand badge bg-dark text-light" to="/">
					WYR
				</Link>

				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink exact className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/dashboard">
								New Question
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/leaderboard">
								Leaderboard
							</NavLink>
						</li>
					</ul>
				</div>
				{props.authenUser && <LoggedUser />}

				{props.authenUser && <Logout />}
			</div>
		</nav>
	);
}
function mapStateToProps({ authenUser }) {
	return {
		authenUser,
	};
}
export default connect(mapStateToProps)(Navbar);
