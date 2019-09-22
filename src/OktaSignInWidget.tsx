import React, { Component, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
//import '@okta/okta-signin-widget/dist/css/okta-theme.css';
import { RouteComponentProps } from 'react-router';

interface OktaSignInWidgetProps extends RouteComponentProps {
    onSuccess: any;
    onError: any;
    baseUrl: any;
};

const OktaSignInWidget: React.FC<OktaSignInWidgetProps> = (props: OktaSignInWidgetProps) => {
    const [ widget, setWidget ] = useState<any>(null);
    const el = useRef(null);

    if(widget) {
        widget.renderEl({ el: el.current }, props.onSuccess, props.onError);
    }

    useEffect(() => {
        const newWidget = new OktaSignIn({
            baseUrl: props.baseUrl,
            authParams: {
                pkce: true
            }
        });
        setWidget(newWidget);

        // componentWillUnmount
        return () => {
           // Your code here
           if(widget) {
               widget.remove();
           }
        }
      }, []);
    
    return (<div ref={el}/>);
};

export default OktaSignInWidget;