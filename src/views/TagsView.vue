<template>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="filteredPost.length > 0" class="layout">
      <div>
        <PostsList :posts="filteredPost"></PostsList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';
import Spinner from '@/components/Spinner.vue';
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '@/composable/getPosts';
import { computed } from 'vue';

export default {
    props:['tag'],
    components:{PostsList,Spinner,TagCloud},
    setup(props){
        let {posts,error,load} = getPosts()
        load()

        let filteredPost = computed(()=>{
            return posts.value.filter(post=>post.tags.includes(props.tag))
        })

        return {posts,error,filteredPost}
    }
};
</script>

<style>
  .tag{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
