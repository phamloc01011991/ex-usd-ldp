import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import camelcaseKeys from "camelcase-keys";

import { getPost, getPostsData, getCategories } from "@/lib/api";

import HumanDate from "@/components/human-date";
import CategoriesWidget from "@/components/blog/categories-widget";
import SearchWidget from "@/components/blog/search-widget";
import AuthorCard from "@/components/author-card";
import Preloader from "@/components/preloader";

export default function BlogPost({ post, categories }) {
  console.log("🚀 ~ BlogPost ~ post:", post);
  const router = useRouter();
  if (router.isFallback) {
    return <Preloader />;
  }

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <section id="blog-header" className="single-post-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>{post.title}</h2>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>{post.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-post">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-post">
                <div className="single-post-meta">
                  <h2 className="single-post-header">{post.title}</h2>
                  <ul className="single-post-meta-info">
                    {/* <li>
                      <AuthorCard author={post.author} />
                    </li> */}
                    <li>
                      <Link href={"/"}>
                        <i className="lni lni-calendar"></i>{" "}
                        <HumanDate dateString={post.createdAt} />
                      </Link>
                    </li>
                    {/* {post.tags.map((tag) => (
                      <li key={tag.slug}>
                        <Link href={`/blog/tag/${tag.slug}`}>
                          <i className="lni lni-tag"></i> {tag.name}
                        </Link>
                      </li>
                    ))} */}
                  </ul>
                </div>
                {post.featuredImage && (
                  <div className="single-post-thumbnail">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div
                  className="single-post-body prose"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                ></div>
              </div>
            </div>

            {/* <aside className="col-12 col-lg-4">
                        <SearchWidget />
                        <CategoriesWidget categories={categories || []} />
                    </aside> */}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    if (process.env.API_URL) {
      const res = await fetch(process.env.API_URL + "api/blog/" + params.slug);
      const { data } = await res.json();
      console.log("🚀 ~ getStaticProps ~ data:", data);

      return { props: { post: data } };
    } else throw new Error("Error");
  } catch (e) {
    console.log("Could not get post", e);

    return {
      props: { post: null },
    };
  }
}

export async function getStaticPaths() {
  try {
    if (process.env.API_URL) {
      const res = await fetch(process.env.API_URL + "api/blog");
      const { data } = await res.json();
      return {
        paths: data.map((post) => `/blog/${post.slug}`),
        fallback: true,
      };
    } else throw new Error("Error");
  } catch (e) {
    console.error(`Couldn't load post.`, e);
    return {
      paths: [],
      fallback: true,
    };
  }
}
