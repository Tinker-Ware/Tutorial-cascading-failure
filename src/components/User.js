import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Map, fromJS} from 'immutable';

const User = ( {userAppState} ) => {
  return (
		<div>
			<div className="banner-top">
				<div className="container">
					<h1>User Account</h1>
					<em></em>
				</div>
			</div>
			<div className="container">
				<div className="login">
					<div className="col-md-6 login-right">
						<h3>{userAppState.get("user")?userAppState.get("user").get("username"):""}</h3>
						<p>{userAppState.get("user")?userAppState.get("user").get("name"):""}</p>
						<p>{userAppState.get("user")?userAppState.get("user").get("email"):""}</p>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
  );
};

User.propTypes = {
  userAppState: PropTypes.object.isRequired
};

export default User;
