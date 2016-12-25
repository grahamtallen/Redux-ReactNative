/**
 * Created by grahamallen on 12/24/16.
 */
import React, {Component} from 'react';
import {Text, Modal, ListView} from 'react-native'
import {Container, Header, Title, Content} from 'native-base'
import {List, ListItem} from 'react-native-elements'

import {connect} from 'react-redux'
import {pushNewRoute} from '../actions/route'
import BookDetail from './BookDetail'
import {bindActionCreators} from 'redux'
import {selectBook} from '../actions/index';

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
    }

    goToDetail() {
        this.props.pushNewRoute('detail')
    }

    renderList() {
        return this.props.weather.map((city) => {

            var K = city.main.temp
            var F = (1.8 * (K - 273) + 32).toString().slice(0, 5)
            return  (
                <ListItem
                    key={city.name}
                    title={city.name}
                    subtitle={F}
                    onPress={() => this.goToDetail(city)}
                />
            )
        })
    }
    render() {
        return (
                <List>
                    {this.renderList()}
                </List>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

function bindActions(dispatch) {
    return {
        replaceRoute: (route)=>dispatch(replaceRoute(route)),
        pushNewRoute: (route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(mapStateToProps, bindActions)(BookList)