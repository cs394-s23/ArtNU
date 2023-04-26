import {useState, useEffect, useMemo} from "react";
import {Post} from "./post.js";
import {Filters} from "./filters.js";
import {db} from "../firebase.js";
import {onSnapshot, query, collection, orderBy} from "firebase/firestore";

export function Posts() {
  const [initialData, setInitialData] = useState([]);
  const [filter, setFilter] = useState("All Art");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("date", "desc")),
      (snapshot) => {
        const postsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          ref: doc.ref,
          id: doc.id,
        }));
        setInitialData(postsData);
        setPosts(postsData);
      }
    );
    return unsubscribe;
  }, []);

  function handleFilter(filterType) {
    if (filter !== filterType) {
      setFilter(filterType);
    }
  }

  const filteredPosts = useMemo(() => {
    if (filter === "All Art") {
      return posts;
    }

    let filtered = initialData;

    if (filter === "Commission") {
      filtered = initialData.filter((post) => post.tags?.includes("Commission"));
    } else {
      filtered = initialData.filter((post) => post.medium === filter);
    }

    return filtered;
  }, [filter, initialData, posts]);

  return (
    <div className="feed">
      <div className="filters">
        <Filters changeFilter={handleFilter} />
      </div>
      <div className="postsfeed">
        {filteredPosts.map((post) => (
          <Post
            key={post.ref}
            img={post.img}
            author={post.author}
            likes={post.likes}
            price={post.price}
            caption={post.caption}
            title={post.title}
            uid={post.uid}
          />
        ))}
      </div>
    </div>
  );
}
