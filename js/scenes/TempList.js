/**
 * Created by grahamallen on 12/25/16.
 */

import React, {Component} from 'react'
import {Container, Content, Header, Title} from 'native-base'
import BookList from '../containers/BookList'
import SearchBar from '../containers/SearchBar'

export default class TempList extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Josiah  Allen</Title>
                </Header>
                <Content>
                    <SearchBar />
                    <BookList />
                </Content>
            </Container>
        )
    }
}