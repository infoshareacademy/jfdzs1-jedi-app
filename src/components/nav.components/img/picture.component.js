import React, {PureComponent} from 'react';
import './../img/crats_logo.png'

class Picture extends PureComponent{
    render(){
        return(
            <div
                style={
                    {
                        padding:12,
                    }
                }
            ><img src={require('./logo.png')} width={120} height={50} mode='fit'  /></div>
        )
    }
}

export default Picture