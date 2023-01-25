<template>
  <user-alert
    v-if="alertIsVisible"
    title="Are you sure to delete this user?"
    @close="hideAlert"
  >
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import { ref } from 'vue';

export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertIsVisible = ref(false);

    function showAlert() {
      alertIsVisible.value = true;
    }

    function hideAlert() {
      alertIsVisible.value = false;
    }

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
    };
  },
};
</script>
