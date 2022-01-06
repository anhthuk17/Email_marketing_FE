<template>
  <div>
    <div class="card">
      <div class="card-header">Headings</div>
      <div class="card-body">
        <CRow>
          <CCol lg="12">
            <CTableWrapper :items="getShuffledUsersData()">
              <template #header>
                <CIcon name="cil-grid" /> Template Table
                <div class="card-header-actions">
                  <CButton
                    color="success"
                    @click="documentModal = true"
                    class="mr-1"
                  >
                    Import Document
                  </CButton>
                  <!-- <input
                    type="file"
                    class="form-control-file"
                    @change="onChangeProspectus"
                  /> -->
                </div>
              </template>
            </CTableWrapper>
          </CCol>
        </CRow>
      </div>
    </div>
    <div>
      <CModal
        title="Document"
        size="lg"
        color="success"
        :show.sync="documentModal"
      >
        <CCol sm="16">
          <CCard>
            <CCardHeader>
              <strong> Create new customer form</strong>
            </CCardHeader>
            
            <CCardBody>
              <CInput
                id="output"
                label="Template name"
                v-model="body_tem.name_tem"
                placeholder="Enter template name"
                horizontal
                v-on:keypress="isLetter($event)"
                ref="my_input"
              />
              <Convert :htmlOutput.sync="htmlOutput" msg="DOCX to HTML converter" />
              
          
            <ckeditor
                :editor="editor"
                v-model="htmlOutput"
                :config="editorConfig"
              ></ckeditor>
            </CCardBody>
            <CCol sm="12">
            <CButton
              type="submit"
              class="mr-1"
              color="success"
              style="margin: 20px; float:right"
              @click.prevent="createTemp()"
            >
              Create new template</CButton
            >
            </CCol>
            
          </CCard>
        </CCol>
      </CModal>
    </div>
  </div>
</template>

<script>
import CTableWrapper from "../base/TableTemplate.vue";
import usersData from "../users/UsersDataTemplate";
import Convert from "../../components/Convert.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import service from "../../../plugin/axios";
export default {
  name: "Template",
  props: ['htmlOutput'],
  data() {
    return {
      documentModal: false,
      mounted: false,
      editor: ClassicEditor,
      // editorData: this.htmlOutput,
      htmlOutput: this.htmlOutput,
      editorConfig: {
        // The configuration of the editor.
      },
      body_tem: {
        content_tem:"",
        status_tem:true,
        id_com: 1,
        name_tem:""
    }
    };
  },
  components: { Convert, CTableWrapper },

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
    createTemp(){
      console.log(this.htmlOutput)
      this.body_tem.content_tem= this.htmlOutput
      this.name_tem=this.body_tem.name_tem
      console.log(this.name_tem)
      try {
        const result = service.post(`templates`, this.body_tem).then((res) => {
          console.log(this.body_tem);
          service
        .get(`templates`)
        .then((result) => {
          localStorage.setItem('storedData', JSON.stringify(result.data.data))
          console.log(result.data.data );
        })
        .catch((err) => {});

          // if (result.status === 200) {
          //   console.log(this.body);
          // }
        });
      } catch (error) {
        console.log(error);
      }
    },async getNameTem() {
      
    }
    

    // onChangeProspectus(event) {
    //   let file = event.target.files[0];
    //   // this.editorData = file.name;
    //   console.log(event.target.files);  	   
    //   mammoth.convertToHtml({path: file.path})
    //       .then(function(result){
    //           this.editorData = result.value; // The generated HTML
    //         })
    //       .done();
    // },

  },
};
</script>
<style lang="css">
.ck.ck-balloon-panel {
    display: none;
    position: absolute;
    z-index: 10000;
}
.modal-footer{
  display: none;
}

</style>
