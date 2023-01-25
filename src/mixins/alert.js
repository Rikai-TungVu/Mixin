export default {
  data() {
    return {
      alertIsVisible: false,
      alertTitle: 'Can you want to delete this User?',
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
    },
    hideAlert() {
      this.alertIsVisible = false;
    },
  },
};
