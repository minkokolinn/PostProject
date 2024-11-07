<template>
  <center><h1>RealTime Processing</h1></center>
  <div v-for="post in posts" :key="post.id">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <hr>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

export default {
  setup() {
    let posts = ref([]);

    // fetching posts realtime
    // constructing post collection query
    let postsColQuery = query(
      collection(db, "posts"),
      orderBy("created_at", "asc")
    );

    // executing with onSnapshot
    onSnapshot(postsColQuery, (snap) => {
      posts.value = snap.docs.map((postDoc) => {
        return { id: postDoc.id, ...postDoc.data() };
      });
    });

    return { posts };
  },
};
</script>

<style></style>
