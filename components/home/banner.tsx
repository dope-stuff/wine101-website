import { Link } from "@nextui-org/react";

export default function Banner() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center text-white gap-8 p-10">
      <div className="text-[56px] font-bold">QUOTE SOMETHING</div>
      <div className="text-[20px] font-medium max-w-[60%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, excepturi
        iure? Sequi omnis eveniet est nesciunt. Commodi excepturi quibusdam
        molestias sint hic incidunt soluta quisquam ratione a? Qui aperiam
        debitis eaque necessitatibus cumque incidunt, minus sed porro sit
        facilis tenetur itaque tempore laborum, commodi fugiat consectetur non
        vero veritatis provident!
      </div>
      <Link className="bg-white rounded-full px-4 text-[30px] text-primary">GET TO KNOW US</Link>
    </div>
  );
}
