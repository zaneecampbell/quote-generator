import React from 'react';
import Header from './Header';
import NewQuote from './NewQuote';
import Quote from './Quote';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class QuoteApp extends React.Component {
    state = {
        randomQuote: '',
        quotes: ["Randomly Generated", "Completed Build", "Mostly Just A Test", "Multifunctional Button", "RNG", "Never 2x in a row"]
    }

    handleChangeQuote = () => {
        const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        
        // Makes it so you can't get the same quote twice in a row
        if (randomQuote === this.state.randomQuote) {
            this.handleChangeQuote();
        } else {
            this.setState(() => ({ randomQuote }));
        }
    };

    render() {
        return (
        <div>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <Paper style={{padding: 20, marginTop: 50}}>
                    <Header  />
                    <Grid style={{ textAlign: 'center' }}>
                        <NewQuote handleChangeQuote={this.handleChangeQuote}/>
                        <Quote randomQuote={this.state.randomQuote}/>
                    </Grid>
                </Paper>
            </Grid>
        </div>
        );
    };
}