import Link from "next/link";

import camelcaseKeys from "camelcase-keys";

import PostsList from "@/components/blog/posts-list";

import { getPostsData, getCategories } from "@/lib/api";
import CategoriesWidget from "@/components/blog/categories-widget";
import SearchWidget from "@/components/blog/search-widget";

export default function Blog({ posts, categories }) {
  return (
    <>
      <section id="blog-roll" className="blog-roll-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>All Blog Posts</h2>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>All blog posts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          {/* <div className="row justify-content-center">
            <PostsList posts={posts} />
            <aside className="col-12 col-lg-4">
              <SearchWidget />
              <CategoriesWidget categories={categories} />
            </aside>
          </div> */}
        </div>
      </section>
    </>
  );
}
