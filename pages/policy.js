import Link from "next/link";

import camelcaseKeys from "camelcase-keys";

import PostsList from "@/components/blog/posts-list";

import { getPostsData, getCategories } from "@/lib/api";
import CategoriesWidget from "@/components/blog/categories-widget";
import SearchWidget from "@/components/blog/search-widget";

export default function Policy({ posts, categories }) {
  return (
    <>
      <section id="blog-roll" className="blog-roll-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                {/* <h2>All Blog Posts</h2>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>All blog posts</li>
                </ul> */}
                <div>
                  <div>
                    {/* <h1>Chính sách quyền riêng tư</h1> */}
                    <div className="cs">
                      <h2>Policy</h2>
                      <ul>
                        <li>
                        We collect users' personal information to support the use of the application.
                        </li>
                        <li>
                        Users' personal information will be kept confidential and used only for collection purposes.
                        </li>
                        <li>
                        Users have the right to request that we delete their information from the system.
                        </li>
                        <li>
                        We do not share users' personal information with third parties except when legally required or with the user's consent.
                        </li>
                        <li>
                        We will protect our users' personal information with physical and digital security measures.
                        </li>
                      </ul>
                    </div>
                    <div className="qrt">
                      <h2>Privacy</h2>
                      <ul>
                        <li>
                        Users have control over their information and decide whether they want to provide personal information to the application or not.
                        </li>
                        <li>
                        Users have the right to request that we correct their information if it is not accurate or current.
                        </li>
                        <li>
                        We are committed to protecting the privacy of our users and do not use their personal information for any purpose other than the purpose for which it was collected.
                        </li>
                        <li>
                        Users have the right to request that we delete their information from our systems and we will comply with such request.
                        </li>
                        <li>
                        We will update our privacy and policies to meet user requests and needs.
                        </li>
                      </ul>
                    </div>
                    <p className="not">
                    Note: You should consult with an attorney to ensure your privacy and policies comply fully with local and national laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-posts">
        <div className="container"></div>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY

//   if (butterToken) {
//     try {
//       const blogPosts = (await getPostsData()).posts
//       const categories = await getCategories()

//       return { props: { posts: camelcaseKeys(blogPosts), categories } };
//     } catch (e) {
//       console.log("Could not get posts", e)

//       return {
//         props: { posts: [], categories: [] }
//       }
//     }
//   }

//   return { props: { posts: [], categories: [] } }
// }
