<template>
  
</template>
<script>

export default {
  

  name: "WhitePage",
  data () {
    return {
      url:'https://shopee.vn/'
    }
  },
  components: {  },
  created(){
    this.redirection()
  },
  methods: {
    redirection(){
    console.log(this.$route.query.id);
    console.log(this.$route.query.url);
    this.url=this.$route.query.url
    window.location.href = this.url;
    }
  },
}

</script>
