<template>
  <main class="app-body" :class="{ 'fade' : loading }">
    <div class="article-list">
      <div v-for="item in currentList" class="post-article">
        <v-article :article="item" :key="item.id"></v-article>
      </div>
    </div>
    <v-pagination :total="list.length"></v-pagination>
  </main>
</template>

<script>
import { HttpGet } from '../../api/index.js'
import { blogConfig } from '@/config/'
import { setTitle } from '@/utils/'

export default {
  name: 'index',
  data() {
    return {
      list: [],
      error:null
    }
  },
  props: {
    loading: Boolean
  },
  computed: {
    currentList() {
      return this.list;
    }
  },
  created () {
    this.loadList()
    //setTitle(blogConfig.title);
  },
  methods: {
    // loadList () {
    //   debugger
    //   this.$emit('handleLoading')
    //   api.getList().then(list => {
    //     api.getIndex(list.filter(({ name }) => {
    //       return name == 'index.json'
    //     })[0].sha)
    //     .then(index => {
    //       this.list = index.map(item => {
    //         item.id = list.filter(({ name }) => {
    //           return name.replace(/\.md$/, '') == item.title
    //         })[0].sha;
    //         return item;
    //       }).reverse()
    //       this.$emit('handleLoading')
    //     })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
    // }
    loadList(){
      debugger
      var result = ""
      var uri = "product/getall"
       this.$emit('handleLoading')
       HttpGet(uri).then(response =>{
         
          this.list = response.data
          this.$emit('handleLoading')
          debugger
       }).catch(e => {
          this.error = e.response});
    }
  }
}
</script>

<style scoped>
.post-article {
  padding-bottom: 20px;
}
</style>


