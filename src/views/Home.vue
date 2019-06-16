<template>
    <section>
        <b-field position="is-centered">
            <b-input placeholder="Search..." type="search" icon="magnify">
            </b-input>
            <p class="control">
                <router-link to="/profile" class="button is-info">Search</router-link>
            </p>

        </b-field>
      
    </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
};
</script>
