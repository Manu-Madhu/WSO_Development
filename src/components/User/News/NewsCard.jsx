import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

function NewsCard({ News }) {
    return (
        <div className="max-w-sm rounded overflow-hidden relative">
            <img
                className="w-full rounded-lg aspect-[4/3]"
                src={"https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"}
                alt="Spices"
            />
            <div className="pt-2 relative">
                <p className="mb-2 line-clamp-2 overflow-hidden">{News.title}</p>
                <Link
                    href={`/user/news/${News._id}`}
                    className="absolute bottom-0 right-0 text-primaryColor font-medium bg-white px-2 underline"
                >
                    Read more
                </Link>
            </div>
            <Link href={`/user/news/${News._id}`}>
                <MdArrowOutward
                    className="absolute top-3 right-3 text-white"
                    size={22}
                />
            </Link>
        </div>
    )
}

export default NewsCard
