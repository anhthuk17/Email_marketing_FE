<template>
  <div class="hello">
    <div style="margin-bottom:15px;">
      <input type="file" @change="onFileChange" />
    </div>
    <!-- <div>
      <p class="htmlOutput">{{ htmlOutput }}</p>
    </div> -->
  </div>
</template>

<script>
const mammoth = require("mammoth");
const cheerio = require("cheerio");
const options = { convertImage: mammoth.images.imgElement() };
export default {
  name: "hello",
  data: function () {
    return {
      image: "",
      htmlOutput: "Output appears here.",
    };
  },
  methods: {
    onFileChange: function (e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var reader = new FileReader();
      console.log(files[0]);
      let that = this;
      reader.onload = function (loadEvent) {
        const buffer = loadEvent.target.result;
        mammoth
          .convertToHtml({ arrayBuffer: buffer })
          .then((result) => {
          
            that.$emit("update:htmlOutput",  result.value);
            // console.log(result.value);
            that.htmlOutput = result.value;
          })
          .done();
      };

      reader.readAsArrayBuffer(files[0]);
    },
  },
};
</script>