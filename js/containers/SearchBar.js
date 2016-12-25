/**
 * Created by grahamallen on 12/24/16.
 */
import React, {Component} from 'react';
import {Text, Modal, View} from 'react-native'
import {List, ListItem, Container, Header, Title, Content, Spinner} from 'native-base'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchWeather, showSpinner} from '../actions'
import {Button, SearchBar} from 'react-native-elements'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchText: "London"
        }

        this.submitSearch = this.submitSearch.bind(this)
    }

    changeText(text) {
        this.setState({searchText: text})
    }

    submitSearch() {
        this.props.showSpinner()
        this.props.fetchWeather(this.state.searchText);
        this.setState({searchText: ""});
    }


    render() {
        return (
            <View>
                <SearchBar
                    placeholder='Type Here...'
                    onChangeText={(text) => this.changeText(text)}
                    value={this.state.searchText}
                />
                <Button
                    color="lightblue"
                    title={"Get Temperatures for " + this.state.searchText}
                    onPress={this.submitSearch}
                />
                {this.props.spinner && <Spinner />}
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather, showSpinner }, dispatch)
}

function mapStateToProps(state) {
    return {
        spinner: state.spinner
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)