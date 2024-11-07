import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      // making a query including collection object with orderby query
      let postColQuery = query(collection(db, "posts"),orderBy("created_at","desc"));
      // fetching documents and get collection snapshot
      let postColSnap = await getDocs(postColQuery);
      
      // using colSnap.docs to get the array of docSnap
      // in each docSnap, docSnap.id to get generated id
      // in each docSnap, docSnap.data() to get data object/document
      posts.value = postColSnap.docs.map((postDocSnap) => {
        return { id: postDocSnap.id, ...postDocSnap.data() };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
