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
