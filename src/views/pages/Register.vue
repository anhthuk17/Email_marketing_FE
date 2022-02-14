<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <!-- <CAlert show color="success">{{message}}</CAlert> -->
                <!-- <div id="sub_success" style="display:none">Register succesfully!</div> -->
                <!-- <div id="sub_error" style="display:none">Opps! There is something wrong. Please try again</div> -->
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  v-model="body_signup.name_com"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                  v-model="body_signup.email_com"
                />
                <CInput
                  placeholder="Email password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="body_signup.password_com"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Address"
                  autocomplete="address"
                  v-model="body_signup.address_com"
                >
                  <template #prepend-content><CIcon name="cil-location-pin"/></template>
                </CInput>
                <CInput
                  placeholder="Phone"
                  autocomplete="phone"
                  v-model="body_signup.phone_com"
                >
                  <template #prepend-content><CIcon name=""/></template>
                </CInput>

                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  v-model="body_signup.password_com_login"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                  v-model="password_com_repeat"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                
                <CButton color="success" block @click.prevent="signup()">Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import service from "../../../plugin/axios";
export default {
  name: 'Register',
  data () {
    return {
      body_signup:{
        name_com:'',
        address_com:'',
        email_com:'',
        phone_com:0,
        password_com:'',
        password_com_login:''
      },
      password_com_repeat:'',
      message:''
    }
  },
  methods:{
    async signup(){
      console.log(this.body_signup);
      if(/^[A-Za-z ]+$/.test(this.body_signup.name_com)
      &&/^[A-Za-z0-9, ]+$/.test(this.body_signup.address_com)
      &&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.body_signup.email_com )
      &&/^[0-9]+$/.test(this.body_signup.phone_com)
      &&/^[A-Za-z0-9]+$/.test(this.body_signup.password_com)
      &&/^[A-Za-z0-9]+$/.test(this.body_signup.password_com_login)&&/^[A-Za-z0-9]+$/.test(this.password_com_repeat)&&(this.body_signup.password_com_login==this.password_com_repeat)){
        await service
          .post(`logins/signup`, this.body_signup)
          .then((res) => {
            console.log(res.data.message);
            // alert(res.data.data.message);
            window.location.href = "http://localhost:8080/#/pages/login";
          })
      }
      else{
        alert("Wrong or missing information");
      }
    }
  }
}
</script>
