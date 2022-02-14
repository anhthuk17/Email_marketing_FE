<template>
<div>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-bell"/> Updates
      <CBadge color="info" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-task" /> Tasks
      <CBadge color="danger" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem @click="chooseIfoCom = true">
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Settings
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-dollar" /> Payments
      <CBadge color="secondary" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> Projects
      <CBadge color="primary" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem >
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>
    <CDropdownItem @click.prevent="logOut()">
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
   <div>
      <CModal
        title="Profile"
        color="success"
        :show.sync="chooseIfoCom"
      >
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <strong>Profile</strong>
            </CCardHeader>
            <CCardBody>
              <b>Name Company: </b> {{body_com.name_com}}<br>
              <b>Email Company: </b>{{body_com.email_com}}<br>
              <b>Phone Company: </b>{{body_com.phone_com}}<br>
              <b>Address Company: </b>{{body_com.address_com}}<br>
            </CCardBody>
          </CCard>
        </CCol>
      </CModal>
    </div>
</div>

</template>


<script>
// import Login from "../views/pages/Login.vue";
export default {
  name: 'TheHeaderDropdownAccnt',
  // props: ['body_com']  ,
  data () {

    return { 
      itemsCount: 42,
      chooseIfoCom:false,
      body_com:[]
    }
  },
  created(){
    this.profile()
  },

  methods:{
    logOut(){
      window.location.href = "http://localhost:8080/#/pages/login";
    },
    profile(){
      this.body_com = JSON.parse(localStorage.getItem("storedData"))
      console.log( JSON.parse(localStorage.getItem("storedData")).address_com);
    // const a = JSON.parse(localStorage.getItem("storedData"));
    //  console.log(a.map((x) => x.address_com).filter((x) => x != null));
    // console.log("=====================", this.options);
    }
  }
}
</script>

<style>
  .modal-dialog {
    max-width: 500px;
  }
  .c-icon {
    margin-right: 0.3rem;
  }
</style>