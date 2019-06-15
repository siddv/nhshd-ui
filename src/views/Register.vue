<template>
    <section>
        <b-field label="Name">
            <b-input value=""></b-input>
        </b-field>

        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="" type="password" maxlength="30"></b-input>
        </b-field>

        <b-field label="Repeat Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="" type="password" maxlength="30"></b-input>
        </b-field>

        </b-field>
    </section>
</template>
