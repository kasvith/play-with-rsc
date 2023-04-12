import { Suspense } from "react";
import { fetchData } from "../fetchData";
import "./Post.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function Post() {
  const post = use(fetchData("https://jsonplaceholder.typicode.com/posts/1"));
  return (
    <div className="post">
      <h1>Post</h1>
      <p>{post.userId}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export function PostPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Post />
    </Suspense>
  );
}

function use(promise: any) {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: any) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: any) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
}
