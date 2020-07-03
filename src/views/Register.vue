<template>
  <div class="container">
    <div v-if="submitted" class="six columns submitted">
      <h4>Thank you for registering. You can continue on the Cura mobile app.</h4>
      <button>Download</button>
    </div>
    <div v-if="!submitted" class="top">
      <form @submit.prevent="submit" class="five columns submitted">
        <h2 class="zero">Register</h2>
        <p>Stay safe with Cura.</p>
        <div v-if="error">{{error}}</div>
        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

        <input
          id="name"
          type="text"
          class="form-control"
          name="name"
          value
          required
          autofocus
          placeholder="Name"
          v-model="form.name"
        />

        <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

        <input
          id="email"
          type="email"
          class="form-control"
          name="email"
          value
          required
          autofocus
          placeholder="Email"
          v-model="form.email"
        />

        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

        <input
          id="password"
          type="password"
          class="form-control"
          name="password"
          required
          placeholder="Password"
          v-model="form.password"
        />

        <label for="password">Confirm password</label>
        <input
          id="password2"
          type="password"
          class="form-control"
          name="password2"
          required
          placeholder="Confirm password"
          v-model="form.password2"
        />
        <button type="submit" :disabled="loading">
          <span v-if="!loading">Register</span>
          <span v-if="loading">
            <div class="loader"></div>
          </span>
        </button>
      </form>
      <div class="seven columns">
        <img src="@/assets/reg.png" alt class="reg" />
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password2: ""
      },
      error: null,
      loading: false,
      submitted: false
    };
  },
  methods: {
    submit() {
      this.loading = true;
      if (this.form.password.length < 6) {
        this.error = "Password should be atleast 6 characters.";
        this.loading = false;
      }
      if (this.form.password !== this.form.password2) {
        this.error = "Passwords don't match.";
        this.loading = false;
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
              .updateProfile({
                displayName: this.form.name
              })
              .then(() => {});
          })
          .catch(err => {
            this.error = err.message;
          });
        this.loading = false;
        this.submitted = true;
      }
    }
  }
};
</script>

<style scoped>
.zero {
  margin: 0;
}
.top {
  margin-top: 2em;
}
.reg {
  width: 100%;
  margin-top: 5em;
}
input {
  width: 100%;
}
button {
  margin-top: 2em;
}
button:disabled {
  background: rgb(230, 180, 245);
  cursor: default;
}
button:disabled:hover {
  background: rgb(230, 180, 245);
}

.submitted {
  margin-top: 3em;
}
input,
textarea {
  background-color: rgba(255, 255, 255, 0.3);
  border-width: 0.2em;
  border-radius: 0.5em;
  border-color: rgba(156, 156, 156, 0.2);
}

input:focus,
textarea:focus {
  border-color: rgba(187, 104, 212, 0.3);
  border-width: 0.2em;
  border-radius: 0.5em;
}

/* Loader */
.loader,
.loader:after {
  border-radius: 50%;
  width: 1em;
  height: 1em;
}
.loader {
  margin: 0 20px;
  font-size: 10px;
  position: relative;
  border-top: 0.5em solid rgba(191, 93, 221, 0.2);
  border-right: 0.5em solid rgba(191, 93, 221, 0.2);
  border-bottom: 0.5em solid rgba(191, 93, 221, 0.2);
  border-left: 0.5em solid rgb(191, 93, 221);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media (max-width: 550px) {
	.reg {
		margin-top: 1em;
	}
	.submitted {
		margin-top: 1em;
	}
}
</style>