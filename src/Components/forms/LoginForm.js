import React from "React";
import { Form, Button} from "semantic-ui-react";


class LoginForm extends React.Component {
    state={
        data: {},
        Loading: false,
        errors: {}
    }

    render () {
        return (
            <Form>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;