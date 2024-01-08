import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import fantasy from './data/fantasy.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBookAsin: null,
    };
  }

  handleBookSelection = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <Container>
        <MyNav />
        <MyJumbotron />
        <Row>
          <Col xs={6}>
            <BookList
              books={fantasy}
              onBookSelect={this.handleBookSelection}
              selectedBookAsin={this.state.selectedBookAsin}
            />
          </Col>

          <Col xs={6}>
            <CommentArea asin={this.state.selectedBookAsin} />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    );
  }
}

export default App;