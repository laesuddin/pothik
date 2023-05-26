import cox from '../../assets/coxbazar.jpg'
import sajek from '../../assets/sajek.jpg'
import sylhet from '../../assets/img_2.png'
import './blog.css'

const Blog = () => {
  return (
    <section className="my-24 px-24 bg-[#F5FFFC]">
    <div className="flex gap-x-8">
      <div className="w-1/3 shadow-lg">
          <div className="mb-4">
            <img
              className="w-full"
              src={cox}
              alt="SYLHET"
            />
          </div>
          <div>
            <div className="flex justify-between mx-3">
              <h2 className="text-[#2ED89B] text-2xl font-semibold">Cox's Bazar</h2>
            </div>
            
            <p className="w-10/12 text-[#6F6F6F] text-lg mx-3">
              Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem
              Ipsn gravida. Ing business like this takes much more effort than
              doing your own.
            </p>
          </div>
          <div className='flex justify-start gap-11 mt-11 mb-5'>
            <div className='ml-5'>
              <a href='#'><p><b>March 5, 2023</b></p></a>
            </div>
            <div>
            <a href='#'><p><b>10 comments</b></p></a>
            </div>
          </div>
        </div>


        <div className="w-1/3 shadow-lg">
          <div className="mb-4">
            <img
              className="w-full"
              src={sylhet}
              alt="SYLHET"
            />
          </div>
          <div>
            <div className="flex justify-between mx-3">
              <h2 className="text-[#2ED89B] text-2xl font-semibold">Sylhet</h2>
            </div>
            
            <p className="w-10/12 text-[#6F6F6F] text-lg mx-3">
              Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem
              Ipsn gravida. Ing business like this takes much more effort than
              doing your own.
            </p>
          </div>
          <div className='flex justify-start gap-11 mt-11 mb-5'>
            <div className='ml-5'>
              <a href='#'><p><b>March 5, 2023</b></p></a>
            </div>
            <div>
            <a href='#'><p><b>10 comments</b></p></a>
            </div>
          </div>
        </div>

        <div className="w-1/3 shadow-lg">
          <div className="mb-4">
            <img
              className="w-full"
              src={sajek}
              alt="SYLHET"
            />
          </div>
          <div>
            <div className="flex justify-between mx-3">
              <h2 className="text-[#2ED89B] text-2xl font-semibold">Sajek</h2>
            </div>
            
            <p className="w-10/12 text-[#6F6F6F] text-lg mx-3">
              Lorem ipsum dolor sit amet This is Photoshop’s version of Lorem
              Ipsn gravida. Ing business like this takes much more effort than
              doing your own.
            </p>
          </div>
          <div className='flex justify-start gap-11 mt-11 mb-5'>
            <div className='ml-5'>
              <a href='#'><p><b>March 5, 2023</b></p></a>
            </div>
            <div>
            <a href='#'><p><b>10 comments</b></p></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center items-center">
        <a className="bg-[#FFCE0C] text-slate-100 px-6 py-2 rounded" href="#">More</a>
      </div>
  </section>
  )
}

export default Blog