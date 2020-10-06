import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';

import Chat from 'chat/Chat';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

const App = () => (
  <Container>
    <p>
      Welcome to the customer support home page! Please get in touch with any
      questions you may have...
    </p>
    <h1>CHAT</h1>
    <Chat />
    <p>Thank You!</p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
