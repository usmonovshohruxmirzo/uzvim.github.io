export const Loading: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#309C34]"></div>
      </div>
    </div>
  );
};

export default Loading;
