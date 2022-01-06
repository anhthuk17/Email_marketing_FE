<template>
  <div>
    <div class="card">
      <div class="card-header">Headings</div>
      <div class="card-body">
        <CCol lg="12">
          <CTableWrapper :items="getShuffledUsersData()">
            <template #header>
              <CIcon name="cil-grid" /> Customer Table
              <div class="card-header-actions">
                <CButton color="success" @click="sendEmail = true" class="mr-1">
                  Send email
                </CButton>
                <CButton
                  color="success"
                  @click="successModal = true"
                  class="mr-1"
                >
                  New one
                </CButton>
                <CButton
                  color="success"
                  @click="importExcel = true"
                  class="mr-1"
                >
                  Import Excel
                </CButton>
              </div>
            </template>
          </CTableWrapper>
        </CCol>
      </div>
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
                @click="(chooseCus = true), (chooseTem = false)"
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
        title="Show customers"
        size="lg"
        color="success"
        :show.sync="chooseCus"
      >
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <strong> Choose customers</strong>
            </CCardHeader>
            <CCardBody>
              <CInput
                placeholder="Please input name customer"
                label="Name Customer"
                horizontal
                v-model="nameCus"
                autocomplete="name"
              />
              <CSelect
                label="Gender Customer"
                horizontal
                :options="genderCus"
                placeholder="Please select gender customer"
                @change="onChangeGender($event)"
              />
              <CSelect
                label="Type Customer"
                horizontal
                :options="typeCus"
                placeholder="Please select age customer"
                @change="onChangeType($event)"
              />
              <CRow >
              <CCol sm="6">
                <CInput
                placeholder="from"
                label="Age Customer"
                horizontal
              />
              </CCol>
              <CCol sm="4">
                <CInput
                placeholder="to"
                horizontal
              />
              </CCol >
            </CRow>
              
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click.prevent="filterCus()"
              >
                Search</CButton
              >
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click.prevent="resetFilter()"
              >
                Reset</CButton
              >
              
                <table v-if="parse_csv">
                  <thead>
			            	<tr>
                      <th><input @change="chooseAllCusToSendEmail()" type="checkbox" style="margin:0 5px" > id_cus</th>
			            		<th> name_cus</th>
			            		<th> address_cus</th>
			            		<th> email_cus</th>
			            		<th> phone_cus</th>
			            		<th> status_cus</th>
			            		<th> gender_cus</th>
			            		<th> id_com</th>
                      <th> type_com</th>
                      <th> age_com</th>
			            	</tr>
			            </thead>
                    <tr v-for="key in body_cus"
                        :key="key.id">
                      <label class="form-checkbox" style="margin:0">
                        <input @change="chooseSomeCusToSendEmail(key)" type="checkbox" :value="key.id_cus" style="margin:0 5px" >
                        <!--  -->
                        <th style="border:none; display:inline-block"> {{ key.id_cus}}</th>
                      </label>
                       <th> {{ key.name_cus}}</th>
                       <th> {{ key.address_cus}}</th>
                       <th> {{ key.email_cus}}</th>
                       <th> {{ key.phone_cus}}</th>
                       <th> {{ key.status_cus}}</th>
                       <th> {{ key.gender_cus}}</th>
                       <th> {{ key.id_com}}</th>
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
                @click="chooseCus = false"
              >
                Close</CButton
              >
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click="(chooseCus = false), (chooseTem = true)"
              >
                Next</CButton
              >
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click="(chooseCus = false), (sendEmail = true)"
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
                v-on:keypress="isLetter($event)"
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
            @click="(chooseCus = true), (sendEmail = false)"
            class="mr-1"
            style="margin: 20px; float: right"
            @click.prevent="showCus(), filterCondition(), getNow()"
          >
            New Compaign
          </CButton>
        </CCol>
      </CModal>
    </div>

    <div>
      <CModal
        title="Customer information"
        size="lg"
        color="success"
        :show.sync="successModal"
      >
        <CCol sm="12">
          <CCard>
            <CCardHeader>
              <strong> Create new one customer</strong>
            </CCardHeader>
            <CCardBody>
              <CInput
                label="Your full name"
                v-model="body.name_cus"
                placeholder="Enter your name"
                horizontal
                v-on:keypress="isLetter($event)"
                ref="my_input"
              />
              <div class="form-row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9">
                  {{ name }}
                  <p style="color: red"  id="name"></p>
                </div>
              </div>

              <CInput
                label="Your phone"
                v-model="body.phone_cus"
                placeholder="Enter your phone"
                horizontal
                v-on:keypress="isNumber($event)"
                ref="my_phone"
              />
              <div class="form-row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9">
                  {{ phone }}
                  <p style="color: red" 
                id="phone"></p>
                </div>
              </div>

              <CInput
                label="Your email"
                v-model="body.email_cus"
                placeholder="Enter your email name"
                horizontal
                @blur="validateEmail"
                ref="my_email"
              />
              <div class="form-row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9">
                  <p style="color: red"
                id="email"></p>
                </div>
              </div>

              <CInput
                label="Your address"
                v-model="body.address_cus"
                placeholder="Enter your address"
                horizontal
                v-on:keypress="
                ($event)"
                ref="my_address"
              />
              <div class="form-row">
                <div class="col-sm-3"></div>
                <div class="col-sm-9">
                  <p style="color: red"
                id="address"></p>
                </div>
              </div>

              <template v-for="(name, key) in radioNames">
                <CRow form class="form-group" :key="name">
                  <CCol>
                    {{ name }}
                  </CCol>
                  <CInputRadioGroup
                    class="col-sm-9"
                    :options="gender"
                    :custom="key > 1"
                    :checked="`Option ${key}`"
                    :inline="key % 2 === 1"
                    horizontal
                    v-model="body.gender_cus"
                  />
                </CRow>
              </template>
            </CCardBody>
            <CCol sm="12">
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click="successModal = false"
              >
                Close</CButton
              >
              <CButton
                type="submit"
                class="mr-1"
                color="success"
                style="margin: 20px; float: right"
                @click.prevent="createCustomer()"
              >
                Create new customer</CButton
              >
            </CCol>
          </CCard>
        </CCol>
      </CModal>
    </div>

    <div>
      <CModal
        title="Customer information"
        size="lg"
        color="success"
        :show.sync="importExcel"
      >
        <div id="import">
          <div class="container">
            <div class="panel panel-sm">
              <div class="panel-heading">
                <h4>CSV file to Import</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label
                    for="csv_file"
                    class="control-label col-sm-3 text-right"
                    >CSV file to import</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="file"
                      id="csv_file"
                      name="csv_file"
                      class="form-control"
                      @change="loadCSV($event)"
                    />
                  </div>
                </div>
                <div class="col-sm-offset-3 col-sm-9">
                  <div class="checkbox-inline">
                    <label for="header_rows"
                      ><input type="checkbox" id="header_rows" /> File contains
                      header row?</label
                    >
                  </div>
                </div>

                <div class="col-sm-offset-3 col-sm-9">
                  <a href="#" class="btn btn-primary">Parse CSV</a>
                </div>
                <table v-if="parse_csv">
                  <thead>
                    <tr>
                      <th
                        v-for="key in parse_header"
                        @click="sortBy(key)"
                        :class="{ active: sortKey == key }"
                        :key="key.id"
                      >
                        {{ key | capitalize }}
                        <span
                          class="arrow"
                          :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
                        >
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tr v-for="csv in parse_csv" :key="csv.id">
                    <td v-for="key in parse_header" :key="key.id">
                      {{ csv[key] }}
                    </td>
                  </tr>
                </table>
              </div>
              <CButton
                type="submit"
                class="d-sm-down-none"
                color="success"
                style="margin: 20px"
                @click.prevent="importCus(list_cus)"
              >
                Import customers</CButton
              >

              <CButton
                type="submit"
                class="d-sm-down-none"
                color="success"
                style="margin: 20px; float: right"
                @click="importExcel = false"
              >
                Close</CButton
              >
            </div>
          </div>
        </div>
      </CModal>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17-beta.0/vue.js" ></script>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { data } from "cheerio/lib/api/attributes";
// import { mapActions } from "vuex";
import service from "../../../plugin/axios";
const resource = "/customers";
import Forms from "../base/Forms.vue";
// <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
import CTableWrapper from "../base/TableCustomer.vue";
import usersData from "../users/UsersDataCustomer";

export default {
  name: "Customer",
  data() {
    return {
      terms: false,
      selectedID: "",
      chooseCus: false,
      chooseTem: false,
      showTem: false,
      sendEmail: false,
      importExcel: false,
      successModal: false,
      gender: ["Male", "Female", "Other"],
      radioNames: ["Gender"],
      // excel
      channel_name: "",
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders: {},
      sortKey: "",
      id: "",
      output: "",
      phone: "",
      email: "",
      address: "",
      date: "",
      body: {
        name_cus: "",
        address_cus: "",
        email_cus: "",
        phone_cus: 0,
        status_cus: true,
        gender_cus: "",
        id_com: 1,
        type_cus:"",
        age_cus: 1
      },
      body_tem: {
        content_tem: "",
        status_tem: true,
        id_com: 1,
        name_tem: "",
      },
      body_compaign:{
        name_compaign:"",
        status:true,
        createOfDate_compaign:"",
        updateOfDate_compaign:null,
        id_tem:1,
        content_tem:""
      },
      body_cus_compaign:{
        id_cus:0,
        id_compaign:0,
        createOfDate_compaign:"",
      },
      resultls: "{}",
      json: [],
      list_cus: [],
      body_req: [],
      body_cus:[],
      // radius button temp
      radioNames: ["The email types"],
      options: ["Promotional emails", "Survey emails", "Milestone emails"],
      editor: ClassicEditor,
      // editorData: this.htmlOutput,
      htmlOutput: this.htmlOutput,
      editorConfig: {
        // The configuration of the editor.
      },
      content: null,
      cusEmail:[],
      // testingCode:"",
      cus_name: "#name#",
      cus_phone: "#phone#",
      cus_address: "#address#",
      cus_email:"#email#",
      com_address:"#com_add#",
      com_phone: "#com_phone#",
      com_name:"#com_name#",
      //   // loc cus type ,age=> input, gender=>select option .... 2
      //   // chon item de gan vao tem:...,com_add, com_number, com_name: done
      //   // tao chua muon gui=> save lai=> compaign (luu lai id ds cus + id tem) id, ten, ngay thang tao
      //   status_cus: true,
      //   gender_cus: "",: done
      //   cus_type:"",
      //   cus_age:""

      // gom 3 đk để ra được ds phù hợp: ưu tiên 
      // insert table compaign tr => content_tem, name_compaign, id_tem =>return id ,sequelize: how to insert then return id => lưu vô com_cus (id_compaign, ds_id cus)=> insert cus_compaign => for đối với ds id_cus(vừa for vừa insert)

      someCus:[],
      allCus:[],
      name:"",
      nameCus:'',
      genderCus:[],
      typeCus:[],
      filterName:[],
      filterGender:[],
      filterType:[],
      listCusSendMail:[],
      filter:[],
    };
  },
  components: { CTableWrapper, Forms },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  // get cus from mysql
  created() {
    // console.log(this.CTableWrapper);
    this.getCustomer();
    const a = JSON.parse(localStorage.getItem("storedData"));
    this.options = a.map((x) => x.name_tem).filter((x) => x != null);
    console.log("=====================", this.options);
    
  },
  methods: {
    async getCustomer() {
      service
        .get(`customers`)
        .then((result) => {
          console.log(result.data.data);
          this.body_req = JSON.stringify(result.data.data)
          // console.log("+++++++++++++++++++++++++++"+this.body_req);
          // this.body_req=a.map((x)=>x.email_cus)
          // id_cus.name_cus.address_cus.email_cus.phone_cus.status_cus.gender_cus.id_tem.id_com
          // this.body_req = a.map((cus) => {cus.name_cus});
        })
        .catch((err) => {});
    },
    // create one customer
    createCustomer() {
      try {
        const result = service.post(`customers`, this.body).then((res) => {
          console.log(this.body);
          // if (result.status === 200) {
          //   console.log(this.body);
          // }
        });
      } catch (error) {
        console.log(error);
      }
    },
    // validate
    isLetter(e) {
      console.log("------------------------------------"+this.e);
      let text;
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z ]+$/.test(char)) {
        text = "";
        document.getElementById("name").innerHTML = text;
      }
      // Match with regex
      else {
        text = "Name not valid (input letter)";
        document.getElementById("name").innerHTML = text;
      }
      // If not match, don't add to input text
    },

    isNumber(e) {
      let text;
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) {
        text = "";
        document.getElementById("phone").innerHTML = text;
      } else {
        text = "Phone not valid (input numbers)";
        document.getElementById("phone").innerHTML = text;
      }
    },

    isLetterOrNumber(e) {
      let text;
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z0-9, ]+$/.test(char)) {
        text = "";
        document.getElementById("address").innerHTML = text;
      } else {
        text = "Address not valid (input letters or numbers)";
        document.getElementById("address").innerHTML = text;
      }
    },

    validateEmail() {
      let text;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        text = "";
        document.getElementById("email").innerHTML = text;
      } else {
        text = "Email not valid";
        document.getElementById("email").innerHTML = text;
      }
    },
    // default
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(usersData.slice(0));
    },
    sortBy: function (key) {
      var vm = this;
      vm.sortKey = key;
      vm.sortOrders[key] = vm.sortOrders[key] * -1;
    },

    // Load file excel .csv
    csvJSON(csv) {
      var vm = this;
      var lines = csv.split("\r\n");
      var result = [];
      var headers = lines[0].split(",");
      vm.parse_header = lines[0].split(",");
      lines[0].split(",").forEach(function (key) {
        vm.sortOrders[key] = 1;
      });

      lines.map(function (line, indexLine) {
        if (indexLine < 1) return; // Jump header line

        var obj = {};
        var currentline = line.split(",");

        headers.map(function (header, indexHeader) {
          obj[header] = currentline[indexHeader];
        });

        result.push(obj);
      });

      result.pop(); // remove the last item because undefined values

      return result; // JavaScript object
    },

    loadCSV(e) {
      var vm = this;
      var arr = [];
      var reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      reader.onload = function (event) {
        var csv = event.target.result;
        vm.parse_csv = vm.csvJSON(csv);
        try {
          let cuss = vm.parse_csv;
          cuss = cuss.map((cus) => {
            return {
              // id_cus: parseInt(cus.id_cus),
              name_cus: cus.name_cus,
              address_cus: cus.address_cus,
              email_cus: cus.email_cus,
              phone_cus: parseInt(cus.phone_cus),
              status_cus: Boolean(cus.status_cus),
              gender_cus: cus.gender_cus,
              id_com: parseInt(cus.id_com),
              type_cus: cus.type_cus,
              age_cus:parseInt(cus.age_cus) ,
            };
          });
          vm.list_cus = JSON.stringify(cuss);
          console.log(vm.parse_csv + " : vm.parse_csv");
        } catch (error) {
          console.log(error);
        }
      };
      reader.onerror = function (evt) {
        if (evt.target.error.name == "NotReadableError") {
          alert("Cannot read file !");
        }
      };
    },

    // import list customer to mysql
    setListCus(body) {
      this.list_cus = body;
      console.log(body + "asss");
    },
    async importCus(body) {
      console.log(body);
      try {
        const result = service
          .post(`customers/multiple`, this.list_cus)
          .then((res) => {
            console.log(Object.values(res));
          });
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
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
    showCus(){
    this.body_req=JSON.parse(this.body_req)
    this.body_cus=this.body_req
    console.log(this.body_req);
    },
  // when click on some cus you want choose to send mail
    chooseSomeCusToSendEmail(index)
    {
        this.body_req[index]=!this.body_req[index]
        this.someCus.push(index.email_cus)
        this.listCusSendMail.push(index)
        // console.log(this.someCus);
        console.log(this.listCusSendMail);
    },
    // when click on all cus you want choose to send mail
    
     chooseAllCusToSendEmail(){
    if (this.body_cus.length>this.allCus.length) {
                for (let i in this.body_cus) {
                    this.allCus.push(this.body_cus[i].email_cus)
                    this.listCusSendMail.push(this.body_cus[i])
                }
                console.log(this.allCus);
                console.log(this.listCusSendMail);
            }
  },
  // copy #text# to send to cus
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
  console.log(this.body_compaign);
  this.body_compaign.content_tem=this.content
  console.log(this.body_compaign.content_tem+"/////////////////////////////////////////////////////////////////////");
 try {
        const result = await service
          .post(`compaigns`, this.body_compaign)
          .then((res) => {
            console.log(Object.values(res));
          })
          // setTimeout(() => {  console.log("World!"); }, 2000);
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
  filterCus(){
    console.log(this.nameCus);
    const trimmedSearch= this.body_cus.filter(res => {
      for(let i in this.filterName){
        this.filterName[i].toLowerCase().includes(this.nameCus.toLowerCase().trim())
      }
     
      })
    console.log(trimmedSearch);
    console.log(this.body_req);
    if(this.filterGender != false){
      for(let j in this.filterGender){
      for(let i in this.body_req){
        if(this.body_req[i].gender_cus===this.filterGender[j]){
        this.filter.push(this.body_req[i])
      }}}   
      
    if(this.filterType != false){
        for(let j in this.filterType){
        for(let i in this.body_req){
          if(this.body_req[i].type_cus === this.filterType[j]){
          this.filter.push(this.body_req[i])
          }}} 
    }
    var Remove_duplicate_Value_Gender = [];
          for(var i =0; i < this.filter.length; i++) {
            if(Remove_duplicate_Value_Gender.indexOf(this.filter[i]) === -1 && this.filter[i] != '') {
              Remove_duplicate_Value_Gender.push(this.filter[i])
            }
          }
      this.filter = Remove_duplicate_Value_Gender
      this.body_cus=this.filter
    console.log(this.filter);
      
  }
  //   console.log(this.body_cus);
    
  },
  resetFilter(){
    this.body_cus=this.body_req
  },
  onChangeGender(event) {
    if(this.filterGender = []){
      this.filterGender.push(event.target.value)
    }
    else{
      this.filterGender=[]
      this.filterGender.push(event.target.value)
    }
  },
  onChangeType(event) {
    if(this.filterType = []){
      this.filterType.push(event.target.value)
    }
    else{
      this.filterType=[]
      this.filterType.push(event.target.value)
    }
  },
  getNow(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.body_compaign.createOfDate_compaign = date;
    this.body_cus_compaign.createOfDate_compaign = date;
    console.log(this.body_compaign.createOfDate_compaign);
    console.log(this.body_cus_compaign.createOfDate_compaign);

    // console.log(this.body_compaign);
  },
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
  
}
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}

body {
  margin: 32px auto;
}

.panel {
  border: 2px solid #dfdfdf;
  box-shadow: rgba(0, 0, 0, 0.15) 0 1px 0 0;
  margin: 10px;
}

.panel.panel-sm {
  max-width: 700px;
  margin: 10px auto;
}

.panel-heading {
  border-bottom: 2px solid #dfdfdf;
}

.panel-heading h1,
.panel-heading h2,
.panel-heading h3,
.panel-heading h4,
.panel-heading h5,
.panel-heading h6 {
  margin: 0;
  padding: 0;
}

.panel-body .checkbox-inline {
  padding: 15px 20px;
}

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

.modal-dialog,
.panel.panel-sm {
  margin: auto;
}
.modal-lg {
  max-width: 1050px;
}
.panel.panel-sm {
  max-width: 1000px;
}
/* display none cancel and ok */
.modal-footer {
  display: none;
}

/* import excel */
.checkbox-inline,
.col-sm-offset-3 {
  display: none;
}

.control-label {
  display: none;
}

.form-group {
  margin: 20px;
}

.form-control {
  border: 1px solid #ccc;
  padding: 0.375rem;
}

.col-sm-9 {
  padding: 0;
}

.panel,
.panel-heading {
  border: 1px solid #d8dbe0;
}
h4 {
  font-size: 0.875rem;
  font-weight: bolder;
}

.panel-heading h4 {
  padding: 0.75rem 1.25rem;
}
span.title:hover{opacity: 0.8;}
.btn.disabled{
  opacity: 1;
}
.btn:disabled{
  opacity: 0.65;
}

</style>

// select distinc com_id, 
// age
// gender, name , type , age: all
// 3 đk và

// gui mail. xu li link, lưu table history
// => sau khi gửi => thông tin sẽ được lưu vào vs tt seding, khi mở mail
// => gửi tới api=> cập nhật đã open , khi click cập nhật click

// get data to his table => count cus + view => click show list cus => button action => click show tem 
// button send=> click => insert #name# (dùng how to replace string nodejs ) => save in history table => send email (how to send mail nodejs) => update tt sent(đã gửi)

// bỏ cột tem content, khi click row his bất kỳ => hiện ra 3 tab( clicked , opened, nothing), đổi col status qua kiểu text
// Khi click icon user => ds cus của his đó
// send => chuyển tab compaign ở menu
// tại ds đã click thêm 1 nút create campiagn => ds cus (lấy luôn ds clicked)=> các bước tiếp theo giống send mail