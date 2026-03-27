import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground">Блог</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Гіди, лайфхаки та поради для максимальної користі від ваших товарів
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow group block"
          >
            <div className="h-40 bg-secondary flex items-center justify-center text-5xl">
              {post.image}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-secondary text-xs font-semibold text-primary px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:underline">
                  Читати далі <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
