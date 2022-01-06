<template>
  <div>
    <div class="card">
      <div class="card-header">Headings</div>
       
      <div class="card-body">
        <CCol lg="12">
          <!-- <CTableWrapper :items="getShuffledUsersData()">
            <template #header> -->
              <CIcon name="cil-grid" /> History Table
              <div class="card-header-actions">
                <CButton color="success" @click="myModal = true">
                  Open
                </CButton>
              </div>
              <CModal
              title="Modal title"
              :show.sync="myModal"
              size="xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CModal>
              <table>
                  <thead>
			            	<tr>
                      <!-- STT Campaign	Date sent	Count customers	Name Campaign	Name Template -->
                      <th> STT Campaign</th>
                      <th> Date create</th>
			            		<th> Count customers</th>
			            		<th> Name Campaign</th>
			            		<th> Name Template</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in body_req"
                        :key="key.id">
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.id_compaign }}</th>
                       <th> {{ key.createOfDate_compaign }}</th>
                       <th> {{ key.count }}<div style="display: initial;" @click="chooseCus = true" @click.prevent=" getIdCompaign(key.id_compaign),countCus()"><CIcon name="cil-user"/></div></th>
                       <th> {{ key.name_compaign}}</th>
                       <th> {{ key.name_tem}}</th>
                    </tr>
                </table>
            <!-- </template>
          </CTableWrapper> -->
        </CCol>
      </div>
    </div>
     <div>
      <CModal
        title="Show customers"
        size="lg"
        color="success"
        :show.sync="chooseCus"
      >
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <!-- <strong> Choose customers</strong> -->
            </CCardHeader>
            <CCardBody>
                <table>
                  <thead>
			            	<tr>
			            		<th> Name customer</th>
			            		<th> Address customer</th>
			            		<th> Email customer</th>
			            		<th> Phone customer</th>
			            		<th> Gender customer</th>
                      <th> Type</th>
                      <th> Age customer</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in list_cus"
                        :key="key.id" @click.prevent="">
                       <th> {{ key.name_cus}}</th>
                       <th> {{ key.address_cus}}</th>
                       <th> {{ key.email_cus}}</th>
                       <th> {{ key.phone_cus}}</th>
                       <th> {{ key.gender_cus}}</th>
                       <th> {{ key.type_cus}}</th>
                       <th> {{ key.age_cus}}</th>
                    </tr>
                </table>
               </CCardBody>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click="chooseCus=false"
              >
                OK</CButton
              >
            </CCol>
          </CCard>
        </CCol>
      </CModal>
    </div>
    <div>
    <CModal
    :show.sync="chooseActionSend">
    <CCol xs="12" lg="12"
        >
        <CCard>
          <CCardHeader>
            Choose action send mail
          </CCardHeader>
          <CCardBody>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click.prevent="executeCam(), chooseActionSend=false"
              >
                Send</CButton
              >
            </CCol>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
              >
                Set schedule</CButton
              >
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CModal>
  </div>
  </div>
</template>

<script>
import CTableWrapper from "../base/TableCompaign.vue";
import usersData from "../users/UsersCompaign";
import service from "../../../plugin/axios";

export default {
  name: "Compaign",
  data () {
    return {
      myModal: false,
      body_req:[],
      chooseCus: false,
      chooseActionSend:false,
      list_cus: [],
      id_req:{
        id_compaign: 1
      }
    }
  },
  components: { CTableWrapper },
   created(){
    // this.executeCam()
    this.getShuffledUsersData()

  },
  methods: {
     getShuffledUsersData() {
      try {
        service
          .get(`compaigns`)
          .then((res) => {
            console.log(res.data.data);
            this.body_req = res.data.data
          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
    },
    getIdCompaign(id){
      this.body_req.id_compaign=id
      this.id_req.id_compaign=id
    },
    async countCus(){
      try {
       await service
          .get(`compaigns/listCus/${this.body_req.id_compaign}`)
          .then((res) => {
            console.log(res.data.data);
            this.list_cus=res.data.data

          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
    },
    
     async executeCam(){
       console.log(this.id_req.id_compaign);
       try {
         
        service.post(`compaigns/send`, this.id_req).then((res)=> {
            console.log(res.data.data);
            })
            .catch({})
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
  }
  },
}

</script>
<style >
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
.card-header-actions{
  margin-bottom: 15px;
}
.modal-footer{
  display: none;
}
.modal-dialog.modal-lg {
    max-width: 80%;
}
.c-icon:not(.c-icon-c-s):not(.c-icon-custom-size) {
    width: 3rem;
    height: 20px;
    float: right;
}
</style>

