import React, { Component} from 'react';
import { Header,Icon } from 'react-native-elements';

export default class myHeader extends Component{
  
  render(){
    return(
        <Header
          leftComponent={{ text:"logout", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          centerComponent={{ text:this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<Icon name='bell' type='font-awesome' color='#696969' size={25}
          />}
          backgroundColor = "#0D2036"
        />

)
}

}
