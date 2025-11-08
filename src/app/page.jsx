export default function Home() {
  const handleClick = () => {
    window.location.href = "https://algrow.online/channels";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button
        onClick={handleClick}
        className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ir a Algrow Channels
      </button>
    </div>
  );
}
