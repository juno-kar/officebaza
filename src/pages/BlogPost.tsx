import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Статтю не знайдено</h1>
        <Link to="/blog" className="text-primary hover:underline">
          ← Повернутись до блогу
        </Link>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<div key={i} className="h-3" />);
      } else if (trimmed.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-2">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (/^\d+\./.test(trimmed)) {
        elements.push(
          <p key={i} className="text-muted-foreground leading-relaxed pl-4">
            {trimmed}
          </p>
        );
      } else if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*[:\s]*(.*)$/);
        if (match) {
          elements.push(
            <p key={i} className="text-muted-foreground leading-relaxed pl-4">
              • <strong className="text-foreground">{match[1]}</strong>{match[2] ? `: ${match[2]}` : ""}
            </p>
          );
        } else {
          elements.push(
            <p key={i} className="text-muted-foreground leading-relaxed pl-4">
              {trimmed.replace("- ", "• ")}
            </p>
          );
        }
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <p key={i} className="text-muted-foreground leading-relaxed pl-4">
            • {trimmed.replace("- ", "")}
          </p>
        );
      } else {
        elements.push(
          <p key={i} className="text-muted-foreground leading-relaxed">
            {trimmed.replace(/\*\*(.+?)\*\*/g, "$1")}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="container py-10">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Назад до блогу
      </Link>

      <article className="max-w-3xl">
        <div className="h-48 bg-secondary rounded-xl flex items-center justify-center text-7xl mb-8">
          {post.image}
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="bg-secondary text-xs font-semibold text-primary px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-6">{post.title}</h1>
        <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4">
          {post.excerpt}
        </p>

        <div className="space-y-1">{renderContent(post.content)}</div>
      </article>
    </div>
  );
};

export default BlogPost;
