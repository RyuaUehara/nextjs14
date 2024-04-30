import Link from "next/link";
import { BlogType } from "./types";

async function fetchAllBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store", //SSR
  });
  const data = await res.json();
  //console.log(data);
  return data.blogs;
}

export default async function Home() {
  const blogs = await fetchAllBlogs();

  return (
    <div className="w-screen">
      <div className="text-7xl font-extrabold font-serif bg-blue-500 text-black p-2 flex items-center justify-center">
        ぶろぐ
      </div>
      <div className="h-screen flex flex-col items-center scroll-py-5">
        <h1 className="font-serif font-extrabold text-6xl pt-10 pb-10">ほーむ</h1>
        <p className="px-40 font-serif font-bold text-xl">
          あるひ、むらのはなし。あるとき、むらのひとたちがしあわせそうなおおきなうすびきをみつけました。それは、とてもおおきくてとくいのひとで、とてもあかるいといわれていました。みんなは、そのひとをたいせつにして、すこしのあいだは、しあわせそうにすごしました。しかし、あるひ、むらにうたたねのわざがあらわれまし た。みんなは、びっくりしてしまいました。
        </p>
        <Link
          href="/blog/create"
          className="rounded-xl font-serif font-bold px-2 my-4 border-2 bg-blue-400 text-black hover:bg-blue-300"
        >
          しんきぶろぐさくせい
        </Link>
        <div className="w-full space-y-4 flex flex-col items-center">
          {blogs.map((blog: BlogType) => (
            <div className="w-2/3 px-4 py-2 border rounded-lg border-gray-700">
              <div className="flex justify-between">
                <h1 className="font-bold font-serif text-xl">たいとる：{blog.title}</h1>
                <div className="space-x-5">
                  <Link href="blog/edit" className="font-serif font-bold border-2 px-2 hover:bg-blue-200">
                    しゅうせい
                  </Link>
                  <Link href="#" className="font-serif font-bold border-2 px-2 hover:bg-blue-200">
                    さくじょ
                  </Link>
                </div>
              </div>
              <h2 className="text-sm font-serif font-bold">ひづけ：{blog.createdAt}</h2>
              <div className="font-serif font-bold">ないよう：{blog.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
