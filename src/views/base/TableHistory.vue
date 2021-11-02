<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> {{caption}}
      </slot>
      
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :border="border"
        :small="small"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        pagination
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">status</CBadge>
          </td>
        </template>
        <template #getBadge="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">getBadge</CBadge>
          </td>
        </template>
        <template #action>
          <td>
            <CButton color="info"  class="mr-1">
                View
              </CButton>
              <CButton color="danger"  class="mr-1">
                Delete
              </CButton>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['id','time', 'content', 'listcustomer','companyemail', 'status','getBadge', 'idtemplate','action']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger'
            : status === undefined ? 'success' : 'primary'
    }
  }
}
</script>
