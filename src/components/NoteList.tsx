import { notes, noteUrl } from '@/data/notes';
import { AUTHOR } from '@/lib/site';

/** Japanese note.com articles; the English editions link to the profile instead (see BlogIndexView / HomePage). */
export default function NoteList({ limit, moreHref }: { limit?: number; moreHref?: string }) {
  const shown = limit ? notes.slice(0, limit) : notes;
  return (
    <>
      <ul className="mt-8 flex flex-col">
        {shown.map((n) => (
          <li key={n.key} className="border-t border-text-light/10 last:border-b">
            <a
              href={noteUrl(n.key)}
              target="_blank"
              rel="noopener"
              className="group py-6 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-8 items-start hover:bg-text-light/[0.02] transition-colors duration-300 px-2 -mx-2"
            >
              <time dateTime={n.date} className="text-xs font-mono uppercase tracking-widest text-text-muted">
                {new Date(n.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'short', day: 'numeric' })}
              </time>
              <div>
                <h3 className="text-base md:text-lg font-bold leading-snug group-hover:text-accent transition-colors duration-300">
                  {n.title_ja} <span aria-hidden="true">↗</span>
                  {n.price && (
                    <span className="ml-2 align-middle text-[11px] font-mono font-normal border border-accent text-accent px-2 py-0.5 rounded-full whitespace-nowrap">
                      有料 {n.price}円
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{n.summary_ja}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm flex flex-wrap gap-x-6 gap-y-2">
        {moreHref && (
          <a href={moreHref} className="text-accent hover:underline">noteの記事をすべて見る →</a>
        )}
        <a href={AUTHOR.links.note} target="_blank" rel="me noopener" className="text-accent hover:underline">
          noteのプロフィールへ →
        </a>
      </p>
    </>
  );
}
