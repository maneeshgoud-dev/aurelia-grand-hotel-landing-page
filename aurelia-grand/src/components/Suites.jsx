import "../App.css";
import { Card } from "./Card";

export const Suites = () => {
  return (
    <div id="suites" className="pt-[12vh] body-bwg">
      <div className="flex flex-col gap-5">
        <div className="flex w-full h-1/4 flex-col gap-4 pl-5">
          <h1 className="font-heading text-[clamp(1.875rem,5vw,3.75rem)]">
            Exceptional Suites
          </h1>
          <p className="font-body text-[14px] md:text-[16px] lg:text-[18px]">
            Experience a collection of thoughtfully designed suites where
            contemporary elegance meets the beauty of the coast. Every space has
            been carefully crafted to provide a seamless blend of comfort,
            sophistication, and tranquility, featuring refined interiors,
            premium furnishings, and breathtaking ocean views. Whether you are
            seeking a romantic escape, a family retreat, or a private sanctuary
            by the sea, our suites offer an atmosphere of effortless luxury.
          </p>
        </div>
        <div className="h-3/4 font-text pb-5">
          <div className="flex flex-row flex-wrap w-full gap-10 justify-evenly h-full items-center">
            <Card
              image_src={
                "https://coralestateluxuryresort.com/wp-content/uploads/suite_oceanview.jpg"
              }
              title={"Ocean View Suite"}
              description={
                "Wake up to panoramic views of the sea from your private retreat."
              }
            />
            <Card
              image_src={
                "https://img.magnific.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2071.jpg?semt=ais_hybrid&w=740&q=80"
              }
              title={"Presidential Suite"}
              description={
                "Expansive living spaces paired with uncompromising luxury."
              }
            />
            <Card
              image_src={
                "https://images.unsplash.com/photo-1613643043796-a370ee99ecbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              title={"Sunset Penthouse"}
              description={
                "Elevated elegance with sweeping views of the sunset."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
