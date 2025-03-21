type Post = {
  id: string;
  todo: string;
  description: string;
  date: Date;
};

let posts: Post[] = [];

export const getPosts = async () => posts;

export const createPost = async (post: Post) => {
  try {
    posts.push(post);
  } catch (err) {
    throw new Error(
      (err instanceof Error ? err.message : "Unknown error") +
        " Error creating post"
    );
  }
};

export const updatePost = async (
  id: string,
  todo: string,
  description: string
) => {
  try {
    const postData = posts.find((post) => post.id === id);
    if (!postData) return null;
    postData.todo = todo;
    postData.description = description;
  } catch (err) {
    throw new Error(
      (err instanceof Error ? err.message : "Unknown error") +
        " Error updating post"
    );
  }
};

export const deletePost = async (id: string) => {
  try {
    posts = posts.filter((post) => post.id !== id);
  } catch (error) {
    throw new Error(
      (error instanceof Error ? error.message : "Unknown error") +
        "Error deleting post"
    );
  }
};

export const getPostById = async (id: string) => {
  try {
    console.log("posts", posts);

    return posts.find((post) => post.id === id);
  } catch (error) {
    throw new Error(
      (error instanceof Error ? error.message : "Unknown error") +
        "Error getting post"
    );
  }
};
