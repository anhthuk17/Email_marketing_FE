<template>
  <div>
    <div class="card">
      <div class="card-header">Headings</div>
       
      <div class="card-body">
        <CCol lg="12">
          <CTableWrapper :items="getShuffledUsersData()">
            <template #header>
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
            </template>
          </CTableWrapper>
        </CCol>
      </div>
    </div>
  </div>
</template>

<script>
import CTableWrapper from "../base/TableHistory.vue";
import usersData from "../users/UsersDataHistory";
export default {
  name: "History",
  data () {
    return {
      myModal: false
    }
  },
  components: { CTableWrapper },
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
  },
}

</script>
