import React from 'react';
import Header from './Header';
import NewQuote from './NewQuote';
import Quote from './Quote';

export default class QuoteApp extends React.Component {
    state = {
        randomQuote: '',
        quotes: ["Randomly Generated", "Completed Build", "Twitter Link", "Multifunctional Button", "RNG"]
    }

    handleChangeQuote = () => {
        const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        this.setState(() => ({ randomQuote }));
    };

    render() {
        return (
        <div>
            <Header  />
            <NewQuote handleChangeQuote={this.handleChangeQuote}/>
            <Quote randomQuote={this.state.randomQuote}/>
        </div>
        );
    };
}