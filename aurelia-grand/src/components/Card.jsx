import "../App.css";
export const Card = ({ image_src, title, description }) => {
  return (
    <div className="flex flex-col gap-2.5 items-center p-8 border-1 border-white rounded-2xl ">
      <img
        src={image_src}
        alt={title}
        className="w-[350px] h-[200px] object-fit rounded-xl"
      />
      <p className="text-xl font-bold">{title}</p>
      <p className="w-[350px] font-body text-center">{description}</p>
    </div>
  );
};
