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
              <CButton color="success" @click="successModal = true" class="mr-1">
                
                New one
              </CButton>
              <CButton color="success" @click="importExcel = true" class="mr-1">
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
        title="Customer information"
        size="lg"
        color="success"
        :show.sync="successModal">
        <CCol sm="12">
          <CCard>
                <CCardHeader>
                  <strong> Create new customer form</strong>
                </CCardHeader>
                <CCardBody>
                <CInput
                label="Id"
                placeholder="10"
                disabled
                horizontal
                />
                <CInput
                  label="username"
                  placeholder= "Enter your name"
                  horizontal
                />
                <CInput
                  label="phone"
                  placeholder="Enter your phone"
                  horizontal
                />
                <CInput
                  label="email"
                  placeholder="Enter your email name"
                  horizontal
                />
            <CInput
              label="address"
              placeholder="Enter your address"
              horizontal
            />
            <template v-for="(name, key) in radioNames">
                <CRow form class="form-group" :key="name">
                  <CCol>
                    {{name}}
                  </CCol>
                  <CInputRadioGroup
                    class="col-sm-9"
                    :options="gender"
                    :custom="key > 1"
                    :checked="`Option ${key}`"
                    :inline="key % 2 === 1"
                    horizontal
                  />
                </CRow>
              </template>
            <CInput
                label="Date"
                type="date"
                horizontal
            />
            <CSelect
                label="Status"
                horizontal
                :options="status"
                placeholder="Please choose status"
            />
          </CCardBody>

            </CCard>

          </CCol>
      </CModal>
     
    </div>
    <div>
      <CModal
        title="Customer information"
        size="lg"
        color="success"
        :show.sync="importExcel">
        <div id="import">
        <div class="container">
            <div class="panel panel-sm">
                <div class="panel-heading">
                    <h4>CSV Import</h4>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <label for="csv_file" class="control-label col-sm-3 text-right">CSV file to import</label>
                        <div class="col-sm-9">
                            <input type="file" id="csv_file" name="csv_file" class="form-control" @change="loadCSV($event)">
                        </div>
                    </div>
                    <div class="col-sm-offset-3 col-sm-9">
                        <div class="checkbox-inline">
                            <label for="header_rows"><input type="checkbox" id="header_rows"> File contains header row?</label>
                        </div>
                    </div>

                    <div class="col-sm-offset-3 col-sm-9">
                        <a href="#" class="btn btn-primary">Parse CSV</a>
                    </div>
                    <table v-if="parse_csv">
                        <thead>
                            <tr>
                                <th v-for="key in parse_header" @click="sortBy(key)" :class="{ active: sortKey == key }" :key="key.id">
                                    {{ key | capitalize }}
                                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                      </span>
                                </th>
                            </tr>
                        </thead>
                        <tr v-for="csv in parse_csv" :key="csv.id">
                            <td v-for="key in parse_header" :key="key.id">
                                {{csv[key]}}
                            </td>
                        </tr>

                    </table>
                </div>
            </div>

        </div>
    </div>
      </CModal>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17-beta.0/vue.js"></script>

<script>
// <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
import CTableWrapper from "../base/TableCustomer.vue";
import usersData from "../users/UsersDataCustomer";
export default {
  name: "Customer",
  data () {
    return {
      importExcel:false,
      successModal: false,
      gender: ['Male', 'Female', 'Other'],
      radioNames: ['Gender'],
      status: ['new', 'old'],
      // excel
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders: {},
      sortKey: ''
    }
  },
  components: {CTableWrapper },
  filters: {
            capitalize: function(str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
  methods: {
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
    sortBy: function(key) {
                var vm = this
                vm.sortKey = key
                vm.sortOrders[key] = vm.sortOrders[key] * -1
            },
            csvJSON(csv) {
                var vm = this
                var lines = csv.split("\n")
                var result = []
                var headers = lines[0].split(",")
                vm.parse_header = lines[0].split(",")
                lines[0].split(",").forEach(function(key) {
                    vm.sortOrders[key] = 1
                })

                lines.map(function(line, indexLine) {
                    if (indexLine < 1) return // Jump header line

                    var obj = {}
                    var currentline = line.split(",")

                    headers.map(function(header, indexHeader) {
                        obj[header] = currentline[indexHeader]
                    })

                    result.push(obj)
                })

                result.pop() // remove the last item because undefined values

                return result // JavaScript object
            },
            loadCSV(e) {
                var vm = this
                if (window.FileReader) {
                    var reader = new FileReader();
                    reader.readAsText(e.target.files[0]);
                    // Handle errors load
                    reader.onload = function(event) {
                        var csv = event.target.result;
                        vm.parse_csv = vm.csvJSON(csv)

                    };
                    reader.onerror = function(evt) {
                        if (evt.target.error.name == "NotReadableError") {
                            alert("Canno't read file !");
                        }
                    };
                } else {
                    alert('FileReader are not supported in this browser.');
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
</style>