<template>
    <section>
        <b-field position="is-centered">
            <b-input placeholder="Search..." type="search" icon="magnify">
            </b-input>
            <p class="control">
                <button class="button is-info">Search</button>
            </p>
        </b-field>
    </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import api from '../services/api';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  created() {
    console.log('created', api());
  },
};
</script>
