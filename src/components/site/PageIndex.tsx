import { Link } from "@tanstack/react-router";

export type IndexItem = {
  label: string;
  to?: string;  // Route link
  href?: string; // Anchor link or mailto
  onClick?: () => void; // Click callback
  active?: boolean;
};

export type IndexColumn = {
  title: string;
  items: IndexItem[];
};

export type PageIndexProps = {
  columns: IndexColumn[];
};

export function PageIndex({ columns }: PageIndexProps) {
  return (
    <section className="bg-white border-b border-rule/30 py-4 md:py-6 relative z-20 animate-fade-in">
      <div className="container-editorial">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8 ${
          columns.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}>
          {columns.map((col, cIdx) => (
            <div key={cIdx} className="space-y-3">
              {/* Thin horizontal divider above category */}
              <div className="h-[1px] bg-rule/20 w-full mb-2" />
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-ink-muted block">
                {col.title}
              </span>
              <ul className="space-y-2">
                {col.items.map((item, iIdx) => {
                  const activeClass = item.active
                    ? "text-ink font-semibold border-b border-ink/80 pb-0.5"
                    : "text-ink/75 hover:text-ink transition-colors duration-300 font-medium cursor-pointer";

                  return (
                    <li key={iIdx} className="flex items-center text-sm md:text-base">
                      {item.onClick ? (
                        <button onClick={item.onClick} className={activeClass}>
                          {item.label}
                        </button>
                      ) : item.to ? (
                        <Link to={item.to as any} className={activeClass}>
                          {item.label}
                        </Link>
                      ) : item.href ? (
                        <a href={item.href} className={activeClass}>
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-ink/40 cursor-not-allowed font-light">
                          {item.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
