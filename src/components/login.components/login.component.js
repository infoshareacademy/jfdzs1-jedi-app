import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import './login.component.css'


/*

 Component for future login feature for users registered to crats app

*/

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
            <div >
                <div class="wraper">
                    <h3>Logowanie</h3>
                    <MuiThemeProvider>
                        <TextField
                            hintText="Podaj nazwę Użytkownika"
                            floatingLabelText="Użytkownik"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Podaj hasło"
                            floatingLabelText="Hasło"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton buttonStyle={{
                            backgroundColor: '#FF8619',
                        }
                        } labelStyle={{color:'black'}} label="Zaloguj" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default LoginForm
