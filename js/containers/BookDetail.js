/**
 * Created by grahamallen on 12/24/16.
 */
import React, {Component} from 'react';
import {Text, Modal, View} from 'react-native'
import {List, ListItem, Container, Header, Title, Content, Spinner} from 'native-base'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'

class BookDetail extends Component {
    render() {

        return (
            <Container>
                <Header>
                    <Title>Details</Title>
                </Header>
                <Content>
                        <Title>{"Title"}</Title>
                        <Button
                            title='LARGE WITH RIGHT ICON'
                        />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
};



export default connect(mapStateToProps)(BookDetail)