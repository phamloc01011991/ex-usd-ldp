import Features from "@/components/landing-page-sections/features";
import Hero from "@/components/landing-page-sections/hero";
import Testimonials from "@/components/landing-page-sections/testimonials";
import TwoColumnWithImage from "@/components/landing-page-sections/two-column-with-image";
import guidedDownload from "./../public/images/guidedDownload.png";
import tradingView from "./../public/images/chart.svg";
import AssetProtect from "./../public/images/AssetProtect.svg";
import privacy from "./../public/images/privacy.svg";
import dataProtect from "./../public/images/dataProtect.svg";
import monitor from "./../public/images/monitor.svg";
import Blog from "@/components/blog/blog";
import TitleListItem from "@/components/landing-page-sections/title-list-item";
import SlideCarousel from "@/components/landing-page-sections/slide-carousel";
import FourItem from "@/components/landing-page-sections/four-item";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import TableCoin from "@/components/landing-page-sections/table-coin";
export default function Index({ posts, coins }) {
  return (
    <>
      <Hero
        headline={"Faster, better, more powerful Forex trading platform"}
        subheadline={
          "Are you new to the cryptocurrency market? No problem. Try buying for just $50 with one tap, and level up your skills at the same time"
        }
        buttonLabel="Update this Page "
        image={guidedDownload}
        scrollAnchorId={"home"}
      />

      <TwoColumnWithImage
        headline={"Welcome to Exness"}
        subheadline={`Exness is an online investment and accumulation application for everyone. With Exness, everyone can become a smart investor easily!
              <br/>‍
              With diverse investment products, Exness can help you earn better profits than depositing in the bank and be safer than surfing stocks and playing crypto.
              <br/>‍
              No more complexity, no large capital required, minimal risk, helping everyone start their investment journey easily.`}
        buttonLabel="Update this Page "
        scrollAnchorId={"about"}
        imagePosition={"left"}
        image={tradingView}
        // buttonUrl={"/"}
      />
      <FourItem
        headline={"Summary"}
        lists={[
          { title: "20 Million+", desc: "Global Users" },
          { title: "$10 Billion+", desc: "Average Daily Volume (USD)" },
          { title: "24/7", desc: "Customer Support" },
          { title: "160+", desc: "Country/Region" },
        ]}
      />
      <SlideCarousel
        headline={"Investment funds contribute capital"}
        subheadline={"Exness is invested in by many large funds around the world"}
        lists={[
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51783eb7a163c2944a5_Sequoia.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a5175da2560a4b4df41d_YC.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515a915ba1803df4cde_Saison.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51781bd89601b9df700_Venturra.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483eb7af52e294495_1982.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2126c2a47471769cd9b_appworks.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2129c31f319abc6f33e_dgventures.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a514c1a8a0cec6f68e2c_500.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483dff5566f6dcddf_FEBE.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515d1795e69367fe0d8_Nextrans.png",
          },
        ]}
      />

      <Testimonials
        headline={"Reputable businessmen accompany "}
        testimonial={[
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_new_Pro_Team_Nicolas_d6be379a13.png",
            // name: "Johan Nyvenne",
            // title: "Cựu hCEO & thành viên HĐQT CTCP Chứng Khoán TP. HCM (HSC)",
            quote:
              "An intraday and medium-term trader with 4 years of professional trading experience. Nicolas has analytical thinking, the ability to control emotions and extensive knowledge of the market. Nicolas is passionate about sharing insights and how-to tips, thanks to his extensive expertise in stocks and cryptocurrencies.",
          },
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_Dennis_new_fa10537f3b.png",
            // name: "DENNIS",
            // title: "CEO IBP",
            quote:
              "A versatile trader. As a journalist with 20 years of experience, observing how global events impact markets has become even more fascinating to him since he started trading eight years ago. Dennis is a game changer and a leader in three important areas: mentoring, education and integrity.",
          },
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_new_Pro_Team_Momen_130eb9eeb4.png",
            // name: "MOMEN",
            // title: "Phó Tổng giám đốc Công ty Quản lý quỹ Dragon Capital",
            quote:
              "A successful day trader and scalper who thrives in the Forex world. A reputable educator and advisor with over 6 years of experience, Momen aims to help traders gain the knowledge and skills needed to succeed.",
          },
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_new_Pro_Team_Mohsin_50532ff8c8.png",
            // name: "MOHSIN",
            // title: "CEO Công ty CP Quản lý quỹ Bản Việt (VCAM)",
            quote:
              "A forex and commodities trader who has had a significant impact on the trading industry through his teaching and business acumen. He is renowned for inspiring and empowering trading enthusiasts through education and guidance, recognized globally.",
          },
        ]}
        scrollAnchorId={"download"}
      />
      <Features
        headline={"Committed to Compliance & User Asset Protection"}
        subheadline={
          "Butter has three core content solutions: Pages, Posts, and Collections. Combine this with advanced capabilities like localization, Write API, multi-site + multi-env and Butter is your centralized content backend no matter how much content you're managing"
        }
        features={[
          {
            headline: "Three-layer Asset Protection",
            icon: AssetProtect,
            description:
              "User assets are securely stored offline in cold wallets. Experience Triple Fund Protection with cold wallet storage, ensuring the security of user assets through comprehensive protection, providing a safe and reliable experience.",
          },
          {
            headline: "Privacy Protection",
            icon: privacy,
            description:
              "Exness integrates a privacy-first approach into all of its products and services. Bybit is transparent about the data it collects from you, stating how it is used and shared.",
          },
          {
            headline: "Advanced Data Protection",
            icon: dataProtect,
            description:
              "Data is encrypted during storage and during transmission. Strict authorization controls ensure that only you can access personal and private information.",
          },
          {
            headline: "Real Time Monitoring",
            icon: monitor,
            description:
              "Bybit's risk controls proactively monitor and analyze user behavior in real time. When suspicious activity is detected, withdrawals will undergo enhanced authentication measures for added security.",
          },
        ]}
        scrollAnchorId={"features"}
      />
      <TableCoin
        headline={"Spreads and overnight charges for the foreign exchange market"}
        lists={coins}
      />
      {/* <TitleListItem
        headline={"Các quỹ đầu tư góp vốn"}
        subheadline={"Binance được nhiều quỹ lớn trên thế giới góp vốn"}
        lists={[
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51783eb7a163c2944a5_Sequoia.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a5175da2560a4b4df41d_YC.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515a915ba1803df4cde_Saison.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51781bd89601b9df700_Venturra.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483eb7af52e294495_1982.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2126c2a47471769cd9b_appworks.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2129c31f319abc6f33e_dgventures.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a514c1a8a0cec6f68e2c_500.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483dff5566f6dcddf_FEBE.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515d1795e69367fe0d8_Nextrans.png",
          },
        ]}
        scrollAnchorId={"titlelistitem"}
      /> */}

      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  try {
    if (process.env.API_URL) {
      const res = await fetch(process.env.API_URL + "api/blog?limit=5");
      const resCoin = await fetch(
        process.env.API_URL + "api/coinList/listing?limit=30"
      );
      const { data } = await res.json();
      const { data: dataCoin } = await resCoin.json();

      return { props: { posts: data, coins: dataCoin }, revalidate: 10 };
    } else throw new Error("Error");
  } catch (e) {
    console.log("Could not get posts", e);

    return {
      props: { posts: [], coins: [] },
    };
  }
}
