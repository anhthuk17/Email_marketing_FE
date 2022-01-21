<template>
  <div>
    <div class="card">
      <div class="card-header">Headings</div>
      <div class="card-body">
        <CCol lg="12">
          <!-- <CTableWrapper > -->
            <!-- <template #header> -->
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
			            		<th> Name Campaign</th>
			            		<th> Count customers</th>
			            		<th> Name Template</th>
                      <th> Date sent</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in body_req"
                        :key="key.id" >
                       <th @click="actionCus=true" @click.prevent="getIdCompaign(key.id_compaign), statusActionCus()"> {{ key.name_compaign}}</th>
                       <th @click="chooseCus = true" @click.prevent=" getIdCompaign(key.id_compaign),countCus()"> {{ key.count }}<div style="display: initial;" ><CIcon name="cil-user" style="z-index: 9999;"/></div></th>
                       <th @click="actionCus=true" @click.prevent="getIdCompaign(key.id_compaign), statusActionCus()"> {{ key.name_tem}}</th>
                       <th @click="actionCus=true" @click.prevent="getIdCompaign(key.id_compaign), statusActionCus()"> {{ getDate(key.sendOfDate) }}</th>
                    </tr>
                </table>
            <!-- </template> -->
          <!-- </CTableWrapper> -->
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
                      <th> Age customer</th>
			            		<th> Email customer</th>
			            		<th> Phone customer</th>
			            		<th> Gender customer</th>
                      <th> Type</th>
                      <th> Status action</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in list_cus"
                        :key="key.id" >
                       <th> {{ key.name_cus}}</th>
                       <th> {{ key.address_cus}}</th>
                       <th> {{ key.age_cus}}</th>
                       <th> {{ key.email_cus}}</th>
                       <th> {{ key.phone_cus}}</th>
                       <th> {{ key.gender_cus}}</th>
                       <th> {{ key.type_cus}}</th>
                       <th> {{ getStatusAction(key.status_action)}}</th>
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
    <CModal
    :show.sync="actionCus">
    <CCol xs="12" lg="12"
        >
        <CCard>
          <CCardHeader>
            Status action
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="Clicked" active>
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
                    <tr v-for="key in list_action_cus1"
                        :key="key.id" >
                       <th> {{ key.name_cus}}</th>
                       <th> {{ key.address_cus}}</th>
                       <th> {{ key.email_cus}}</th>
                       <th> {{ key.phone_cus}}</th>
                       <th> {{ key.gender_cus}}</th>
                       <th> {{ key.type_cus}}</th>
                       <th> {{ key.age_cus}}</th>
                    </tr>
                </table>
                <CButton color="success" @click=" actionCus= false, sendEmail=true" @click.prevent="getNow()">
                  Continue campaign with these customers
                </CButton>
              </CTab>
              <CTab title="Opened" active>
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
                    <tr v-for="key in list_action_cus2"
                        :key="key.id" >
                       <th> {{ key.name_cus}}</th>
                       <th> {{ key.address_cus}}</th>
                       <th> {{ key.email_cus}}</th>
                       <th> {{ key.phone_cus}}</th>
                       <th> {{ key.gender_cus}}</th>
                       <th> {{ key.type_cus}}</th>
                       <th> {{ key.age_cus}}</th>
                    </tr>
                </table>
                <CButton color="success" @click=" actionCus= false, sendEmail=true" @click.prevent="getNow()">
                  Continue campaign with these customers
                </CButton>
              </CTab>
              <CTab title="Nothing" active>
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
                    <tr v-for="key in list_action_cus3"
                        :key="key.id" >
                       <th> {{ key.name_cus}}</th>
                       <th> {{ key.address_cus}}</th>
                       <th> {{ key.email_cus}}</th>
                       <th> {{ key.phone_cus}}</th>
                       <th> {{ key.gender_cus}}</th>
                       <th> {{ key.type_cus}}</th>
                       <th> {{ key.age_cus}}</th>
                    </tr>
                </table>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CModal>
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
            </div>
                    <span class="code text-red" style="color: red; margin-left:10px" ><i>Choosing item to copy to content for template</i></span>
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
                id="button2"
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click.prevent="createCus_Compaign()"
                @click="showTem = false"
                disabled
              >
                Finish</CButton
              >
              <CButton
                id="button1"
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click.prevent="createCompaign()"
              >
                Create New Campaign</CButton
              >
              <CButton
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click="(showTem = false), (chooseTem = true)"
              >
                Back</CButton
              >
            </CCol>
          </CCard>
        </CCol>
      </CModal>
    </div>

    <div>
      <CModal
        title="Choose template"
        size="lg"
        color="success"
        :show.sync="chooseTem"
      >
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <strong> Choose template</strong>
            </CCardHeader>
            <CCardBody>
              <template v-for="(name, key) in radioNames">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3">
                    {{ name }}
                  </CCol>
                  <CInputRadioGroup
                    class="col-sm-9"
                    :options="options"
                    :custom="key > 1"
                    :checked.sync="selectedID"
                    :inline="key % 2 === 1"
                  />
                </CRow>
              </template>
            </CCardBody>
            <CCol sm="12">
              <CButton
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click.prevent="getIdTem()"
                @click="(chooseTem = false)"
              >
                Close</CButton
              >
              <CButton
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click.prevent="getIdTem()"
                @click="(showTem = true), (chooseTem = false)"
              >
                Next</CButton
              >
              <CButton
                color="success"
                class="mr-1"
                style="margin: 20px; float: right"
                @click=" (sendEmail = true),(chooseTem = false)" 
              >
                Back</CButton
              >
            </CCol>
          </CCard>
        </CCol>
      </CModal>
    </div>

    

    <div>
      <CModal
        title="New Compaign"
        size="lg"
        color="success"
        :show.sync="sendEmail"
      >
        <CCol sm="12">
          <CInput
                id="name_compaign"
                label="Compaign name"
                v-model="body_compaign.name_compaign"
                placeholder="Enter compaign name"
                horizontal
                ref="compaign_name_input"
              />
          <CButton
            type="submit"
            class="d-sm-down-none"
            color="success"
            style="margin: 20px; float: right"
            @click="sendEmail = false"
          >
            Close</CButton
          >
          <CButton
            color="success"
            @click="(sendEmail = false), (chooseTem = true)"
            class="mr-1"
            style="margin: 20px; float: right"
            @click.prevent="showCus(), filterCondition(), getNow()"
          >
            New Compaign
          </CButton>
        </CCol>
      </CModal>
    </div>
  </div>
</template>

<script>
import CTableWrapper from "../base/TableHistory.vue";
import usersData from "../users/UsersDataHistory";
import service from "../../../plugin/axios";
import CoreUIIcons from '../icons/CoreUIIcons.vue';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "History",
  data () {
    return {
      myModal: false,
      chooseCus:false,
      actionCus:false,
      body_req:[],
      body_his:{
        id_his:0,
        sendOfDate:"",
        content_tem_after_replace:"",
        status_action:true,
        id_com: 0,
        count:0,
        id_compaign:0,
        name_compaign:'',
        name_tem:''        

      },
      list_cus: [],
      action_cus:[],
      list_action_cus1:[],
      list_action_cus2:[],
      list_action_cus3:[],
      showTem: false,
      cus_name: "#name#",
      cus_phone: "#phone#",
      cus_address: "#address#",
      cus_email:"#email#",
      com_address:"#com_add#",
      com_phone: "#com_phone#",
      com_name:"#com_name#",
      editor: ClassicEditor,editorConfig: {
        // The configuration of the editor.
      },
      content: null,
      chooseTem: false,
      radioNames: ["The email types"],
      nameCus:'',
      genderCus:[],
      typeCus:[],
      parse_csv: [],
      sendEmail: false,
      body_compaign:{
        name_compaign: '',
        status:'u',
        createOfDate_compaign:"",
        updateOfDate_compaign:null,
        id_tem:1,
        content_tem:"",
        related_campaign_id:0
      },
      body_cus_compaign:{
        id_cus:0,
        id_compaign:0,
        createOfDate_compaign:"",
      },
      options: ["Promotional emails", "Survey emails", "Milestone emails"],
      selectedID: "",
      body_cus:[],
      listIdCusToSendMail:[],
      listEmailCusToSendMail:[],
      body_reqq:[],
      name_compaign_parent:''
    }
  },
  components: { CTableWrapper },
  created(){
    // this.get()
    this.getShuffledUsersData()
    const a = JSON.parse(localStorage.getItem("storedData"));
    this.options = a.map((x) => x.name_tem).filter((x) => x != null);
    this.getCustomer()
  },
  methods: { 
    // async get(){
    //   },
    async getCustomer() {
      service
        .get(`customers`)
        .then((result) => {
          console.log(result.data.data);
          this.body_reqq = JSON.stringify(result.data.data)
        })
        .catch((err) => {});
    },

     getShuffledUsersData() {
      try {
        service
          .get(`histories`)
          .then((res) => {
            console.log(res.data.data);
            this.body_req = res.data.data
          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
      
    },
   async countCus(){
      try {
       await service
          .get(`histories/listCus/${this.body_req.id_compaign}`)
          .then((res) => {
            console.log(res.data.data);
            this.list_cus=res.data.data

          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
      
    },
    async statusActionCus(){
      try {
       await service
          .get(`histories/listCus/${this.body_req.id_compaign}`)
          .then((res) => {
            this.action_cus=res.data.data

          })
        await service
          .get(`histories/InfCam/${this.body_req.id_compaign}`)
          .then((res) => {
            this.name_compaign_parent=res.data.data.find(x => x.name_compaign).name_compaign
            if(this.body_compaign.name_compaign != ''){
            }else{
            this.body_compaign.name_compaign += this.name_compaign_parent
            }
            this.body_compaign.related_campaign_id=this.body_req.id_compaign
            console.log(this.name_compaign_parent);
            console.log(this.body_compaign.related_campaign_id);
            console.log(this.body_compaign.name_compaign);
          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
      if(this.list_action_cus1||this.list_action_cus2||this.list_action_cus3||this.listIdCusToSendMail||this.listEmailCusToSendMail){
        this.list_action_cus1=[]
        this.list_action_cus2=[]
        this.list_action_cus3=[]
        this.listIdCusToSendMail=[]
        this.listEmailCusToSendMail=[]
      }
            for(var i =0; i < this.action_cus.length; i++) {
            if(this.action_cus[i].status_action=='c') {
              this.list_action_cus1.push(this.action_cus[i])
              this.listIdCusToSendMail.push(this.action_cus[i].id_cus)
              this.listEmailCusToSendMail.push(this.action_cus[i].email_cus)
              
              console.log(this.action_cus[i]);
              console.log(this.listIdCusToSendMail);

            }else if(this.action_cus[i].status_action=='o') {
              this.list_action_cus2.push(this.action_cus[i])
              this.listIdCusToSendMail.push(this.action_cus[i].id_cus)
              this.listEmailCusToSendMail.push(this.action_cus[i].email_cus)
            }else {
              this.list_action_cus3.push(this.action_cus[i])
            }
            }
         
      
    },
  //  chooseListCusClicked()
  //   {
  //       for(var i =0; i < this.body_reqq.length; i++) {
  //           if(this.body_reqq[i].status_action =='c') {
  //             this.listIdCusToSendMail.push(this.body_reqq[i])
  //             console.log(this.listIdCusToSendMail.id_cus);
  //             console.log(this.body_reqq[i].id_cus);
  //         }
  //       }
  //       // console.log(this.someCus);
  //       console.log("11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111");
  //       console.log(this.listIdCusToSendMail);
  //   },
    getIdCompaign(id){
      this.body_req.id_compaign=id
    },
    getStatusAction(action){
      if(action=='c'){
        return 'clicked'
      }
      else if(action=='o'){
        return 'opened'
      }else {
        return 'nothing'
      }
    },
    getDate(time){
      return time.toString().slice(0,10);
    },
    // =============================================
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
async createCompaign() {
  
    console.log(this.body_compaign.name_compaign +"123456789111111111111111111111");
  // console.log(this.body_compaign.name_compaign);
  this.body_compaign.content_tem=this.content
  console.log(this.body_compaign.content_tem);
 try {
        await service
          .post(`compaigns`, this.body_compaign)
          .then((res) => {
            console.log(Object.values(res));
          })
        await service
          .get(`compaigns/listCam`)
          .then((res) => {

            this.body_cus_compaign.id_compaign=res.data.data[(res.data.data).length-1].id_compaign
            console.log(res.data.data[(res.data.data).length-1].id_compaign);
            // console.log(res.data.data);
          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
      document.getElementById("button2").disabled = false;
      
    },
    async createCus_Compaign(){
    console.log(this.listIdCusToSendMail);
    console.log(this.listEmailCusToSendMail);
    for(let i in this.listIdCusToSendMail){
      this.body_cus_compaign.id_cus = this.listIdCusToSendMail[i]
      service.post(`cus_compaigns`, this.body_cus_compaign).then((res)=> {
            console.log(res.data.data);
            })
            .catch({})
    }

    /*
    async createCus_Compaign(){
    console.log(this.listCusSendMail);
    for(let i in this.listCusSendMail){
      this.body_cus_compaign.id_cus=this.listCusSendMail[i].id_cus
      console.log(this.body_cus_compaign);
      await service.post(`cus_compaigns`, this.body_cus_compaign).then((res)=> {
            console.log(res.data.data);
          })
          .catch({})
    }
  }
    */ 
    

  },
  getIdTem() {
      const b = JSON.parse(localStorage.getItem("storedData"));
      const a = b.filter(x => x.name_tem == this.selectedID)
      this.content = JSON.stringify(
        b.filter(x => x.name_tem == this.selectedID)
      );
      this.content = a[0].content_tem
      this.body_compaign.id_tem=a[0].id_tem

      console.log("=====================", this.content);
      // console.log("=====================", b.filter(x => x.name_tem == this.selectedID).data[0].id_tem);
      console.log("=====================", a[0].id_tem);
      // console.log("=====================", a[0].content_tem);

    },
  
  getNow(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);
    this.body_compaign.createOfDate_compaign = date;
    this.body_cus_compaign.createOfDate_compaign = date;
    console.log(this.body_compaign.createOfDate_compaign);
    console.log(this.body_cus_compaign.createOfDate_compaign);

    // console.log(this.body_compaign);
  },
   
  // validate



    showCus(){
    this.body_req=JSON.parse(this.body_req)
    this.body_cus=this.body_req
    console.log(this.body_req);
    },
     // filter cus
    filterCondition(){
      console.log(this.body_req);
      for(let i in this.body_req){
        this.genderCus = this.body_req.map((x) => x.gender_cus).filter((x) => x != null);
        this.typeCus = this.body_req.map((x) => x.type_cus).filter((x) => x != null);
      }

      var Remove_duplicate_Value_Gender = [];
          for(var i =0; i < this.genderCus.length; i++) {
            if(Remove_duplicate_Value_Gender.indexOf(this.genderCus[i]) === -1 && this.genderCus[i] != '') {
              Remove_duplicate_Value_Gender.push(this.genderCus[i])
            }
          }
      this.genderCus = Remove_duplicate_Value_Gender

      var Remove_duplicate_Value_Type = [];
          for(var i =0; i < this.typeCus.length; i++) {
            if(Remove_duplicate_Value_Type.indexOf(this.typeCus[i]) === -1) {
              Remove_duplicate_Value_Type.push(this.typeCus[i])
            }
          } 
      this.typeCus = Remove_duplicate_Value_Type

      // console.log(this.nameCus);
      // console.log(this.genderCus);
      // console.log(this.typeCus);
  },
    // =========================================
 

  },
  
}

</script>
<style>
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
.modal-dialog{
  max-width: 80%;
}

.btn:not(:disabled):not(.disabled){
  margin: 15px;
  float: right;
}
</style>
=> name cam [name cũ]_name mới
=> trong table campaign có thêm col related_campaign_id
(để biết cam cha đã t/h bao nhiêu cam sau đó => id_cam_cha => allow null)
=> sau khi tạo new campaign => tb thành công + do you want to send cam now?(yes + no + schedule) button
=> yes : lấy mail cty + pass, => lấy ds khách hàng => lấy template trong bảng cam (cần id_cam=> truyền id_cam, id_company xuống)
=> backend: có 1 hàm executeCam (nhận id_cam và id_company và schedule expression)=> trước khi t/h check 
schedule expression có khác null k, nếu khác thì chỉ dùng id_cam và id_company để t/h select 
      - id_company : lấy pass + email company
      - id_cam : lấy template + list cus + tên của campaign để làm subject
      - t/h dòng for đối với ds k/hàng=> mỗi dòng for send 1 lần, for tới đâu
      send tới đó (nên sd mail ng nhận thật 1 cái để kt , thư viện check real mail
      => nếu mail tồn tại thì t/h hàm gửi, k thì log ra)
      - lấy content_tem replace thông tin khách hàng và thông tin cty vào 
      content_tem ( sử dụng thư viện của nodejs nodemailer) => lấy mail cty sử dụng để gửi cho mail k/h 
