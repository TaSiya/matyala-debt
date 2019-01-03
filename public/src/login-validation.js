const login_app = new Vue({
  el: '#login-form',
  data: {
    errors: [],
    name: null,
    username: null,
    signup : false,
    login : true,
    email: null,
    password : null,
    confirm_pass : null,
    match : false
  },
  methods:{
    loginForm: function (e) {
      this.errors = [];
      
      if (this.name && this.username && this.email && this.password && this.confirm_pass) {
        if(this.password === this.confirm_pass){
          this.match = true;
        }
        else {
          this.errors.push('Passwords do not match')
          this.match =false;
        }
      }

      

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.username) {
        this.errors.push('Username required.');
      }
      if (!this.email) {
        this.errors.push('email required.');
      }
      if (!this.password) {
        this.errors.push('password required.');
      }

      e.preventDefault();
    }
  }
})