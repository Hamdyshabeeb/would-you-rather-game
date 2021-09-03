import React from 'react';

export default function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/home">
					WYR
				</a>

				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/dashboard">
								Dashbord{' '}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/leaderboard">
								Leaderboard
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
