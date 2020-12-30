import React from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';

const App = () => {

    const FacebookAPIKey = '193826482336998';

    const responseFacebook = (resp) =>  {
        console.clear();
        console.log(resp);
    }

    return (
        <div>
            {/* <button type="button" className="btn btn-outline-primary facebook-btn">
                Login with Facebook
            </button> */}

            <FacebookLogin
                appId={FacebookAPIKey}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="btn btn-outline-primary"
                // onClick={null}
            />
        </div>
    )
}

export default App;

