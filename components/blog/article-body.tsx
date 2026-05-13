import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral max-w-none">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="mt-12 text-3xl font-semibold tracking-tight text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-10 text-2xl font-semibold tracking-tight text-foreground">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mt-5 text-base leading-8 text-muted-foreground">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mt-5 space-y-3 pl-5 text-base leading-8 text-muted-foreground">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-5 space-y-3 pl-5 text-base leading-8 text-muted-foreground">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mt-8 rounded-r-[1.5rem] border-l-4 border-accent bg-accent-soft px-6 py-5 text-base leading-8 text-foreground">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              className="font-semibold text-accent-strong underline decoration-accent/30 underline-offset-4"
              href={href}
            >
              {children}
            </a>
          )
        }}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
