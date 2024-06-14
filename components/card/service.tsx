interface ServiceCardProps {
  name: string;
  background: string;
}
export default function ServiceCard({ name, background }: ServiceCardProps) {
  return (
    <div
      className="flex-1 h-full flex-col flex items-center justify-center gap-2 bg-cover bg-no-repeat p-4 text-center"
      style={{ background }}
    >
      <div className="text-[28px] font-bold">{name}</div>
      <button className="bg-[#BE1C2D] text-white rounded-full px-4 py-1 text-[18px]">
        See more
      </button>
    </div>
  );
}
