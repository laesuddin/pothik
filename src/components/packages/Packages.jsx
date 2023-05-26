import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.png";
import img3 from "../../assets/img_3.png";
import si from "../../assets/single.svg";
import co from "../../assets/couple.svg";
import fa from "../../assets/family.svg";
import "./packages.css";
import SinglePackage from "./SinglePackage";
import { useGetPackageQuery } from "../../feature/package/packageApi";

const Packages = () => {
  const { data: packages, isLoading, isError } = useGetPackageQuery();

  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && packages?.length === 0) {
    content = <div>There was no Package Available</div>;
  } else if (!isLoading && !isError && packages?.length > 0) {
    content = packages.map((pack) => <SinglePackage pack={pack} />);
  }

  return (
    <section className="my-24 px-24 bg-[#F5FFFC]">
      <div className="text-centers mb-8">
        <h1 className="title text-[#2ED89B] text-center text-4xl font-semibold uppercase">Our Most Popular Tours</h1>
        <p className="text-[#2D5527] text-center mt-2 uppercase">See our most popular tour packages this year</p>
      </div>
      <div className="flex gap-x-8">
        {content}
      </div>

      <div className="mt-12 flex justify-center items-center">
        <a className="bg-[#FFCE0C] text-slate-100 px-6 py-2 rounded" href="#">
          More
        </a>
      </div>
    </section>
  );
};

export default Packages;
