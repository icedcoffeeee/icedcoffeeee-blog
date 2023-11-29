import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { writeFile } from "fs";
import path from "path";
import RSS from "rss";

export function generateRSS() {
  const feed = new RSS({
    title: "icedcoffeeee blog | Hazim Saharuddin",
    description: "Personal Blog of Hazim Saharuddin",
    feed_url: "https://icedcoffeeee.vercel.app/rss.xml",
    site_url: "https://icedcoffeeee.vercel.app",
  });
  allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .forEach(({ title, date, desc, url }) => {
      feed.item({
        title,
        date,
        description: desc ?? "",
        url: "https:/icedcoffeeee.vercel.app/" + url,
      });
    });

  return writeFile(
    path.join(process.cwd(), "public", "rss.xml"),
    feed.xml({ indent: true }),
    (error) => {
      if (error) console.log("RSS Error:", error);
    }
  );
}
