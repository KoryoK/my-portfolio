/** lucide-react has no note.com mark, so this mimics its props (size, className) for use beside Github/Linkedin/Twitter. */
export default function NoteIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 17V8.5M8 11.5c0-2 1.4-3 3.2-3 2 0 3.3 1 3.3 3.2V17" />
    </svg>
  );
}
