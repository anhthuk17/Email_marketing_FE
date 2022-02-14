<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Campaign 
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="9">
                <CRow>
                  <!-- <CCol sm="3">
                    <CCallout color="info">
                      <small class="text-muted">Openned</small><br>
                      <strong class="h4"></strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="3">
                    <CCallout color="danger">
                      <small class="text-muted">Clicked</small><br>
                      <strong class="h4"></strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="3">
                    <CCallout color="warning">
                      <small class="text-muted">Nothing</small><br>
                      <strong class="h4"></strong>
                    </CCallout>
                  </CCol> -->
                  <CCol sm="6">
                    <div>
                      <small>
                        <sup><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                        Openned
                        &nbsp;&nbsp;
                        <sup><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                        Clicked
                        &nbsp;&nbsp;
                        <sup><CBadge shape="pill" color="warning">&nbsp;</CBadge></sup>
                        Nothing
                      </small>
                    </div>
                  </CCol>
                </CRow>
                
                <hr class="mt-0">
                <div v-for="key in this.body_req"
                 :key="key.name_compaign">
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    {{key.name_compaign}}
                  </span>
                </div>
                <div class="progress-group-bars">
                    <div class="progress-group-header">
                      <span class="title"></span>
                      <span class="ml-auto font-weight-bold" style="">
                        {{key.clicked}} <span class="text-muted small">({{((key.clicked/(key.clicked+key.openned+key.nothing))*100).toFixed(2)}} %)</span>
                      </span>
                    </div>
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="(key.clicked/(key.clicked+key.openned+key.nothing))*100"
                    />
                    <div class="progress-group-header">
                      <span class="title"></span>
                      <span class="ml-auto font-weight-bold" style="">
                        {{key.openned}} <span class="text-muted small">({{((key.openned/(key.clicked+key.openned+key.nothing))*100).toFixed(2)}} %)</span>
                      </span>
                    </div>
                    <CProgress
                      class="progress-xs"
                      color="danger"
                      :value="(key.openned/(key.clicked+key.openned+key.nothing))*100"
                    />
                    <div class="progress-group-header">
                      <span class="title"></span>
                      <span class="ml-auto font-weight-bold" style="">
                        {{key.nothing}} <span class="text-muted small">({{((key.nothing/(key.clicked+key.openned+key.nothing))*100).toFixed(2)}} %)</span>
                      </span>
                    </div>
                    <CProgress
                      class="progress-xs"
                      color="warning"
                      :value="(key.nothing/(key.clicked+key.openned+key.nothing))*100"
                    />
                  </div>  
              </div>
                     
                </div>
              </CCol>
            </CRow>
            <br/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'

import service from "../../plugin/axios";
export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
  },
  created(){
    this.getCamStatistic(0)
  },
  data () {
    return {
      body_req:'',
      camStatistic:{
        name_compaign:'',
        clicked:0,
        openned:0,
        nothing:0
      }
    }
  },

  methods: {
    getCamStatistic(i){
      try {
        service
          .get(`compaigns/camStatistic/all`)
          .then((res) => {
            // console.log(res.data.data);
            this.body_req=res.data.data
            console.log(this.body_req);
            for(let i in res.data.data){
              this.camStatistic.name_compaign= res.data.data[i].name_compaign
              this.total = res.data.data[i].clicked+res.data.data[i].openned+res.data.data[i].nothing
              // console.log( );
              this.camStatistic.clicked= (res.data.data[i].clicked/ this.total)*100
              this.camStatistic.openned= (res.data.data[i].openned/ this.total)*100
              this.camStatistic.nothing= (res.data.data[i].nothing/ this.total)*100
              console.log(this.camStatistic.name_compaign);
              console.log(this.camStatistic.clicked,'%');
              console.log(this.camStatistic.openned,'%');
              console.log(this.camStatistic.nothing,'%');
            }
          })
      } catch (error) {
        console.log("Không thành công, vui lòng chọn lại");
        console.log(error + "abc");
      }
    },
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
