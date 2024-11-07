import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";

let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      // writing post document query
      let postDocQuery = doc(db,"posts",id)
      // fetch this document and get document snapshot
      let postDocSnap = await getDoc(postDocQuery)

      post.value = {id:postDocSnap.id, ...postDocSnap.data()}
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
