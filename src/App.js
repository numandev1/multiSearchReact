import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BeatLoader from 'react-spinners/BeatLoader';

import 'react-toastify/dist/ReactToastify.css';

import { StyledLoader } from './App.styles';

import TestPage from './pages/testPage/testPage';

import NotFound from './pages/404/notFound';

import { selectCurrentUser } from './redux/user/user.selectors';
import { selectActive, selectText } from './redux/loading/loading.selectors';

class App extends React.Component {
	render() {
		return (
			<StyledLoader
				active={this.props.loadingOverlayActive}
				text={this.props.loadingOverlayText}
				spinner={<BeatLoader size={64} margin={'4'} />}
			>
				<section className={this.props.currentUser ? 'bg-grey' : ''}>
					<section className={this.props.currentUser ? 'wrapper' : ''}>
						<Switch>
							<Route exact path="/" component={TestPage} />

							<Route exact={false} path={'/'} component={NotFound} />
						</Switch>
					</section>
				</section>
			</StyledLoader>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	loadingOverlayActive: selectActive,
	loadingOverlayText: selectText
});

const mapDispatchToProps = (dispatch) => ({
	// setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
