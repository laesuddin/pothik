import img1 from '../../assets/img_1.png'
import img2 from '../../assets/img_2.png'
import img3 from '../../assets/img_3.png'
import si from '../../assets/single.svg'
import co from '../../assets/couple.svg'
import fa from '../../assets/family.svg'

function SinglePackage({pack}) {
  const {name,description,thumbnail,price,duration} =pack  || {}
  return (
    <>
      <div className="w-1/3 shadow-lg">
        <div className="mb-4">
          <img className="w-full" src= {thumbnail} alt="SYLHET" />
        </div>
        <div>
          <div className="flex justify-between mx-3">
            <h2 className="text-[#2ED89B] text-2xl font-semibold"> {name} </h2>
            <p>
              <strong className="text-[#19A361] text-2xl">{price}tk</strong>
            </p>
          </div>
          <div className="my-4 flex text-[#2D5527] gap-x-4 mx-1">
            <div className="flex flex-col justify-center items-center">
              <img src={si} className="popu-icon" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={co} className="popu-icon" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={fa} className="popu-icon" />
            </div>
          </div>
          <p className="w-10/12 text-[#6F6F6F] text-xs mx-3">
          {description}
          </p>
          <div className="my-4 mx-3">
            <p className="text-[#2D5527]">
              <i className="fa-solid fa-calendar-check"></i>
              <b>&nbsp; {duration}</b>
            </p>
          </div>
        </div>
        <button className="w-full bg-[#FFCE0C] text-slate-100 py-2 mt-6">
          <a className="text-xl" href="#">
            Book Your Tour
          </a>
        </button>
      </div>

    </>
  );
}

export default SinglePackage;
