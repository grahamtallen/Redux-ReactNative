/**
 * Created by grahamallen on 12/24/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


import ReduxPromise from 'redux-promise'
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


import Detail from './containers/BookDetail'
import TempList from './scenes/TempList'

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};

export var globalNav = {};

export default class ReduxTest extends Component {
    componentDidMount() {
        globalNav.navigator = this._navigator;
    }

    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={(route) => {
                      return {
                        ...Navigator.SceneConfigs.FloatFromRight,
                        gestures: {}
                      };
                    }}
                    initialRoute={{ id: 'TempList', index: 0 }}
                    renderScene={this.renderScene}
                />
            </Provider>
        );
    }

    renderScene(route, nav) {
        switch (route.id) {
            case 'TempList':
                return <TempList navigator={nav} />
            case 'detail':
                return <Detail />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

