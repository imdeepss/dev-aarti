import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,  
      slug,
      image { alt, "image": asset->url },
      content,
      seo,
    }`
  );
}

export async function getPostBySlug(slug: string) {
  if (!slug || typeof slug !== "string") {
    throw new Error("Invalid slug");
  }

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      image { alt, "image": asset->url },
      content,
      seo
    }`,
    { slug }
  );

  return post || null;
}

export async function getBhagwanList() {
  return client.fetch(
    groq`*[_type == "bhagwan"]{
        _id,
        title,
        slug,
        image { alt, "image": asset->url },
        type[]->{
          _id,
          bookTypeName
        }
      }`
  );
}

export async function searchPosts(searchTerm: string) {
  try {
    // Search query for matching records based on the search term
    const posts = await client.fetch(
      groq`*[_type == "bhagwan" && 
            (title match $searchTerm || slug.current match $searchTerm || _id match $searchTerm)]{
              _id,
              title,
              slug,
              image { alt, "image": asset->url },
              type[]->{
                _id,
                bookTypeName
              }
            }`,
      { searchTerm: `*${searchTerm.toLowerCase()}*` }
    );

    // If no posts are found, return all Bhagwan records
    if (posts.length === 0) {
      const allPosts = await client.fetch(
        groq`*[_type == "bhagwan"]{
          _id,
          title,
          slug,
          image { alt, "image": asset->url },
          type[]->{
            _id,
            bookTypeName
          }
        }`
      );
      console.log("No matching posts, returning all Bhagwan posts", allPosts);
      return allPosts;
    }

    console.log("Posts found:", posts);
    return posts;
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}
