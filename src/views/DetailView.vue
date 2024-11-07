<template>
  <div class="post">
    <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <button class="btnDelete" @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import Spinner from '../components/Spinner'
import getPost from '@/composable/getPost';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase/config';


export default {
  components: { Spinner },
  props:['id'],
  setup(params){
    let route = useRoute()
    let router = useRouter()
    let {post,error,load} = getPost(route.params.id)

    load()

    let deletePost = async()=>{
      let id = params.id
      // getting document object with speicific id
      let postDoc = doc(db,"posts",id)
      // executing delete query
      await deleteDoc(postDoc)
      router.push("/")
    }

    return {post,error,deletePost}
  }
}
</script>

<style scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h2::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
button.btnDelete{
  margin:30px auto;
}
</style>