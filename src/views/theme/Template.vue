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
              <Convert :htmlOutput.sync="htmlOutput" msg="DOCX to HTML converter" />
              
          
            <ckeditor
                :editor="editor"
                v-model="htmlOutput"
                :config="editorConfig"
              ></ckeditor>
            </CCardBody>
            
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
</style>
