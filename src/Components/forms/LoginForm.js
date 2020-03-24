import React from "react";
import PropTypes from 'prop-types';
import { Form, Button, FormField, Label } from "semantic-ui-react";
import Validator from "validator";
import InLineError from "../messages/InLineError";

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        Loading: false,
        errors: {}
    }
    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } });
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
        validate = (data) => {
            const errors = {};
            if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
            if (!data.password) errors.password = "Can't be blank";
            return errors;
        }
        render() {
            const { data, errors } = this.state;
            return (
                <Form onSubmit={this.onSubmit}>
                    <FormField error={!!errors.email}>
                        <Label html="email">Email</Label>
                        <input type="emil" id="email" name="email" placeholder="exapmple@example.com" value={data.email}
                            onChange={this.onChange} />
                        {errors.email && <InLineError text={errors.email} />}
                    </FormField>
                    <FormField error={!!errors.password}>
                        <Label html="password">Password</Label>
                        <input type="password" id="password" name="password" placeholder="Make it secure" value={data.password}
                            onChange={this.onChange} />
                        {errors.password && <InLineError text={errors.password} />}
                    </FormField>
                    <Button primary>Login</Button>
                </Form>
            );
        }
    }

    LoginForm PropTypes = {
        submit: PropTypes.func.isRequired
    };

    export default LoginForm;