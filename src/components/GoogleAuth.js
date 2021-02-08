import React from 'react'

const _clientId = '765325676687-c4hr9f0kd1kdokv99iv2fsf5422gqpe9.apps.googleusercontent.com'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2',() => 
        window.gapi.init({
            clientId: _clientId,
            scope: 'email'
        }))
    }
    render() {
        return(
            <div>Google auth</div>
        )
    }
}

export default GoogleAuth;