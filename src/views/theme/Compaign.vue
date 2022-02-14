
<template>
  <div>
    <div class="card">
      <div class="card-header">Headings</div>
       
      <div class="card-body">
        <CCol lg="12">
          <!-- <CTableWrapper :items="getShuffledUsersData()">
            <template #header> -->
              <!-- <CIcon name="cil-grid" />  -->
              History Table
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
                      <th> Child Campaign</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in body_req"
                        :key="key.id">
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.id_compaign }}</th>
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.createOfDate_compaign }}</th>
                       <th @click="chooseCus = true" @click.prevent=" getIdCompaign(key.id_compaign),countCus()"> {{ key.count }}<div style="display: initial;" ><CIcon name="cil-user" style="z-index: 9999;"/></div></th>
                       <!-- <th> {{ key.count }}<div style="display: initial;" @click="chooseCus = true" @click.prevent=" getIdCompaign(key.id_compaign),countCus()"><CIcon name="cil-user"/></div></th> -->
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.name_compaign}}</th>
                       <th @click="showTem=true" @click.prevent="getIdTem(key.id_compaign)"> {{ key.name_tem}}</th>
                       <th><CButton color="success" @click.prevent="getIdCompaign(key.id_compaign),getChildOfCam()" @click="childCam = true" style="margin: 0px; float: none;">
                            View
                          </CButton>
                        </th>
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
                @click.prevent="chooseActionSend=false, setUpSchedule=true"
              >
                Set schedule</CButton 
              >
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CModal>
  </div>
  <div>
    <CModal
    :show.sync="setUpSchedule">
    <CCol xs="12" lg="12"
        >
        <CCard>
          <CCardHeader>
            Set schedule
          </CCardHeader>
          <CCardBody>
            <CCardBody>
              <date-time-picker
                v-model="datetime"
                :clear-button="true"
                :close-button="true"
                :today-button="true"
              ></date-time-picker> 
          </CCardBody>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click.prevent=" setUpSchedule=false"
              >
                Close</CButton
              >
            </CCol>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click.prevent="setSchedule(), setUpSchedule=false"
              >
                Ok</CButton 
              >
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CModal>

  </div>
   <div>
      <CModal
        title="Show template"
        size="lg"
        color="success"
        :show.sync="showTem"
      >
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <strong> Show template</strong>
            </CCardHeader>
            <div class="col-sm-12">
                <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" style="margin-top: 1rem">
                    <span class="title" @click.stop.prevent="copyTestingCodeName()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Name customers</span>
                    <span class="code text-red" style="display:none" >{{ cus_name }}</span>
                    <input type="hidden" id="testing-code-name" :value="cus_name">

                    <span class="title" @click.stop.prevent="copyTestingCodePhone()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Phone customers</span>
                    <span class="code text-red" style="display:none" >{{ this.cus_phone }}</span>
                    <input type="hidden" id="testing-code-phone" :value="this.cus_phone">

                    <span class="title" @click.stop.prevent="copyTestingCodeAddress()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Address customers</span>
                    <span class="code text-red" style="display:none" >{{ cus_address }}</span>
                    <input type="hidden" id="testing-code-address" :value="cus_address">

                    <span class="title" @click.stop.prevent="copyTestingCodeEmail()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Email customers</span>
                    <span class="code text-red" style="display:none" >{{ cus_email }}</span>
                    <input type="hidden" id="testing-code-email" :value="cus_email">

                    <span class="title" @click.stop.prevent="copyTestingCodeComAddress()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Address company</span>
                    <span class="code text-red" style="display:none" >{{ com_address }}</span>
                    <input type="hidden" id="testing-code-com-address" :value="com_address">

                    <span class="title" @click.stop.prevent="copyTestingCodeComPhone()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Phone company</span>
                    <span class="code text-red" style="display:none" >{{ com_phone }}</span>
                    <input type="hidden" id="testing-code-com-phone" :value="com_phone">

                    <span class="title" @click.stop.prevent="copyTestingCodeComName()" style="margin-left:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px; cursor: pointer;">Name company</span>
                    <span class="code text-red" style="display:none" >{{ com_name }}</span>
                    <input type="hidden" id="testing-code-com-name" :value="com_name">
                </div>
                <span class="code text-red" style="color: red; margin-left:10px" ><i>Choosing item to copy to content for template</i></span>
                <div class="form-control wizard-form-control d-flex align-items-center testing-code px-20px mb-10px" style="margin-top: 1rem">
                    <span style="margin-left:10px; margin-right:10px; background-color: steelblue; color: white; border-radius: 5px; padding: 2px 5px;">Generate link product</span>
                    <!-- <span class="code text-red" style="display:none" >{{  }}</span> -->
                    <input v-model="link_product">
                    <button @click.prevent="generatorLinkProduct()" id="generation"> Ok </button>
                    <span style="margin-left:10px" >{{ link_product_generated }}</span>
                </div>
                <span class="code text-red" style="color: red; margin-left:10px" ><i>Input your link product to generation to copy to content for template</i></span>
            </div>    
            <CCardBody>
              <CCol sm="16">
                <CCard>
                  <CCardBody>
                    <ckeditor
                      :editor="editor"
                      v-model="content"
                      :config="editorConfig"
                      :options="content"
                      
                    ></ckeditor>
                  </CCardBody>
                </CCard>
              </CCol>
            </CCardBody>
            <CCol sm="12">
              <CButton
                id="button1"
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click.prevent="updateContentTemOfCompaign()"
                @click="showTem=false"
              >
                Update content template of campaign</CButton
              >
              <CButton
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click="(showTem = false)"
              >
                Close</CButton
              >
            </CCol>
          </CCard>
        </CCol>
      </CModal>
    </div>
    <div>
      <CModal
        title="Child campaign"
        size="lg"
        color="success"
        :show.sync="childCam"
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
                      <!-- STT Campaign	Date sent	Count customers	Name Campaign	Name Template -->
                      <th> STT Campaign</th>
                      <th> Date create</th>
			            		<th> Count customers</th>
			            		<th> Name Campaign</th>
			            		<th> Name Template</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in body_childCam"
                        :key="key.id">
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.id_compaign }}</th>
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.createOfDate_compaign }}</th>
                       <th @click="chooseCus = true" @click.prevent=" getIdCompaign(key.id_compaign),countCus()"> {{ key.count }}<div style="display: initial;" ><CIcon name="cil-user" style="z-index: 9999;"/></div></th>
                       <!-- <th> {{ key.count }}<div style="display: initial;" @click="chooseCus = true" @click.prevent=" getIdCompaign(key.id_compaign),countCus()"><CIcon name="cil-user"/></div></th> -->
                       <th @click="chooseActionSend=true" @click.prevent="getIdCompaign(key.id_compaign)"> {{ key.name_compaign}}</th>
                       <th @click="showTem=true" @click.prevent="getIdTem(key.id_compaign)"> {{ key.name_tem}}</th>
                    </tr>
                </table>
               </CCardBody>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click="childCam=false"
              >
                OK</CButton
              >
            </CCol>
          </CCard>
        </CCol>
      </CModal>
    </div>
  </div>
</template>
<script>
import CTableWrapper from "../base/TableCompaign.vue";
// import usersData from "../users/UsersCompaign";
import service from "../../../plugin/axios";

import "../../../node_modules/vue-vanilla-datetime-picker/dist/DateTimePicker.css"
import DateTimePicker from 'vue-vanilla-datetime-picker';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const moment= require('moment') 

export default {
  name: "Compaign",
  data () { 
    return {
      myModal: false,
      body_req:[],
      chooseCus: false,
      chooseActionSend:false,
      setUpSchedule:false,
      list_cus: [],
      body_updateTemOfCam:{
        id_compaign : 0,
        content_tem:''
      },
      id_req:{
        id_compaign: 0,
        datetime_req: '2019-10-01 00:00:00',
      },
      yourStringValue: 'HH:mm:ss ',
      datetime: '2019-10-01 00:00:00',
      showTem:false,
      content: null,
      cus_name: "#name#",
      cus_phone: "#phone#",
      cus_address: "#address#",
      cus_email:"#email#",
      com_address:"#com_add#",
      com_phone: "#com_phone#",
      com_name:"#com_name#",
      link_product:'',
      link_product_generated:'',
      editor: ClassicEditor,
      // editorData: this.htmlOutput,
      htmlOutput: this.htmlOutput,
      editorConfig: {
        // The configuration of the editor.
      },
      childCam:false,
      body_childCam:[]
      
    }
  },
  components: { CTableWrapper, DateTimePicker },
   created(){
    // this.executeCam()
    this.getShuffledUsersData()
    // console.log( JSON.parse(localStorage.getItem("storedData")).id_com);

  },
  methods: {
     getShuffledUsersData() {
      try {
        service
          .get(`compaigns`)
          .then((res) => {
            console.log(res.data.data);
            this.body_req = res.data.data
            console.log(this.body_req);
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
  },
  async setSchedule(){
       console.log(this.id_req.id_compaign);
       this.id_req.datetime_req= moment(this.datetime).format("ss mm HH DD MM *");
       console.log(this.id_req.datetime_req);
       try {
        service.post(`compaigns/setSchedule`, this.id_req).then((res)=> {
            console.log(res.data.data);
            })
            .catch({})
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
  },
  async getIdTem(id_compaign){
    
    this.body_updateTemOfCam.id_compaign=id_compaign
    console.log(id_compaign);
    const a = this.body_req.filter(x => x.id_compaign == id_compaign)
    console.log(a);
      this.content = JSON.stringify(
        this.body_req.filter(x => x.id_compaign == id_compaign)
      );
      this.content = a[0].content_tem
      
      // this.body_compaign.id_tem=a[0].id_tem

      console.log("=====================", this.content);
      // console.log("=====================", b.filter(x => x.name_tem == id_tem).data[0].id_tem);
      // console.log("=====================", a[0].id_tem);
      // console.log("=====================", a[0].content_tem);
  },
  async updateContentTemOfCompaign(){
    this.body_updateTemOfCam.content_tem = this.content
    try {
      await service.post(`compaigns/updateTemOdCam`, this.body_updateTemOfCam).then((res)=> {
            console.log(res.data.data);
            })
            .catch({})
      await   service
          .get(`compaigns`)
          .then((res) => {
            this.body_req = res.data.data
          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
  },
  generatorLinkProduct(){
    console.log(11111111);
    this.link_product_generated = 'https://email-marketing-01.herokuapp.com/?id=#idhistory&url='+this.link_product;
    console.log('https://email-marketing-01.herokuapp.com/?id=#idhistory&url='+this.link_product);
  },
  copyTestingCodeName(){
  let testingCodeToCopy = document.querySelector('#testing-code-name')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()
},
copyTestingCodePhone(){
  let testingCodeToCopy = document.querySelector('#testing-code-phone')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()

},
copyTestingCodeAddress(){
  let testingCodeToCopy = document.querySelector('#testing-code-address')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()

},
copyTestingCodeEmail(){
  let testingCodeToCopy = document.querySelector('#testing-code-email')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()

},
copyTestingCodeComAddress(){
  let testingCodeToCopy = document.querySelector('#testing-code-com-address')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()

},
copyTestingCodeComPhone(){
  let testingCodeToCopy = document.querySelector('#testing-code-com-phone')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()

},
copyTestingCodeComName(){
  let testingCodeToCopy = document.querySelector('#testing-code-com-name')
  console.log("test: "+ testingCodeToCopy.value);
  testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
  testingCodeToCopy.select()
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
  testingCodeToCopy.setAttribute('type', 'hidden')
  window.getSelection().removeAllRanges()

},
getChildOfCam(){
  console.log(this.body_req);
  try {
        service.post(`compaigns/getChildCam`, this.id_req).then((res)=> {
            console.log(res.data.data);
            this.body_childCam=res.data.data
            })
            .catch({})
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
}
}
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

