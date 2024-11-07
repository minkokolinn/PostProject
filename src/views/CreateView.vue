<template>
  <div class="home">
    <h1 class="entryTitle">Post Entry</h1>
    <form @submit.prevent="addPost">
      <label>Title</label>
      <input type="text" required v-model="title" />
      <label>Body</label>
      <textarea v-model="body"></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input
        type="text"
        v-model="tag"
        @keydown.enter.prevent="handleEnterTag"
      />
      <div v-for="tag in tags" :key="tag">
        {{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let router = useRouter();

    let handleEnterTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    let addPost = async () => {
      let newPost = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        created_at: serverTimestamp()
      };
      // getting post collection reference
      let postColRef = collection(db, "posts");
      // running add query with new data object and get document refrence (not document snapshot)
      let postDoc = await addDoc(postColRef,newPost)
      router.push("/")
    };

    return { title, body, tag, handleEnterTag, tags, addPost };
  },
};
</script>

<style>
.entryTitle {
  text-align: center;
}
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
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
</style>
