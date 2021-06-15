import './styles.css';
import React, { Component } from 'react';
import Input from './input';
import { Button, TextField, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        primary: {
            main: purple[500]
        }
    }
});

class Container extends Component {

    render(){
        return(
            <div class="login">
                <div class="div-logo-predio">
                    <img src="/imagens/predio.png" ></img>
                </div>
                <div class="div-logo-campos">
                    <ThemeProvider theme={theme}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br></br>
                        <Button variant="contained" color="primary" > Acessar </Button>
                    </ThemeProvider>
                    
                </div>
            </div>
        )
    }
    
}

export default Container;