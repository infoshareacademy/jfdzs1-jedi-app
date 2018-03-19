import React, {PureComponent} from 'react';
import './picture.component.css'

class Picture extends PureComponent{
    render(){
        const logo=this.props.logo;
        return(
            <div className={"navPicture"}>
                <img
                    src={require(`./img/${logo.toLowerCase()}.png`)}
                    alt={"logo"}/>
            </div>
        )
    }
}

export default Picture
