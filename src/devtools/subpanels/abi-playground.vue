<template lang="pug">
.abi-playground
  .playground-div

</template>

<script>
import { mapGetters } from 'vuex';
import React from 'react';
import ReactDOM from 'react-dom';
import ABIPlayGround from './abi-playground.jsx';

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters(['contracts']),
  },
  created() { },
  mounted() {
    const playground = React.createElement(ABIPlayGround, { contracts: this.contracts }, null);
    const playgroundDiv = document.getElementsByClassName('playground-div')[0];
    ReactDOM.render(playground, playgroundDiv);
  },
  methods: { },
};
</script>

<style lang="less">
.abi-playground-content {
 padding:0px 20px;
}
</style>
