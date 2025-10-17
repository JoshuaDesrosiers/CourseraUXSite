import './App.css'
import codexars from './assets/codexars.png'
function Home() {

  return (
    <>
     <div className='flex flex-wrap justify-center items-center '>
      <div className='lg:max-w-[300px] lg:m-10'>
        <img className="w-full hidden lg:block" src='https://placehold.co/600x840/lightblue/white?text=<' alt="UX design"/>
        <img className="w-full lg:hidden" src='https://placehold.co/600x240/lightblue/white?text=<' alt="UX design"/>
        </div>
      <div className='lg:m-2 mt-4 p-5 max-w-md m-4 flex flex-wrap'><span className='text-5xl font-medium basis-full pb-4'>Hey! I'm&nbsp;<a className='text-blue-500' href='https://www.linkedin.com/in/joshua-desrosiers-161831362/'>Joshua</a>, a Full-Stack SWE, and UX Designer. Designing with empathy. Building with purpose.</span><p className='text-xl'>currently attending the&nbsp;</p><a className='underline text-xl text-blue-500' href='https://www.marcylabschool.org/apply'>Marcy Lab School.</a></div>
      <div>
        <div className='lg:max-w-[300px] lg:m-10'>
        <img className="w-full hidden lg:block" src='https://placehold.co/600x840/lightblue/white?text=/>' alt="UX design"/>
        <img className="w-full lg:hidden" src='https://placehold.co/600x240/lightblue/white?text=/>' alt="UX design"/>
        </div>
      </div>
      <div className='ml-20'>&nbsp;</div>
     </div>
     <div className='pt-10 pb-10 mb-10 acrylic-box m-4 mb-4 flex flex-wrap justify-center pb-10'>
      <div className='acrylic-box m-4 lg:max-w-md max-w-md rounded-xl overflow-hidden shadow-xl  duration-200 brightness-125 hover:brightness-100 hover:scale-[102%]'>
        <img className="w-full " src={codexars} alt="codexars site screenshot"/>
        <div className="font-bold text-xl mb-2 p-3 pb-0">Codexars.com</div>
        <p className='p-3'>The name codexARS comes from the Latin words codex, meaning code, and ars, meaning art. This website was created not only as a personal blog for marking progress on personal projects but also to educate and inspire others on some things code related, or art related, sometimes both!</p>
       
        <a className='absolute pl-2 p-1 rounded-tr-xl z-2 text-white bg-[#242424] hover:pl-10 duration-200 bottom-0' href='https://codexars.com'>{'visit site>>'}</a>

      </div>
      <div className='acrylic-box m-4 mb-4 lg:max-w-md max-w-md rounded-xl overflow-hidden shadow-xl duration-200  hover:scale-[102%]'>
        <img className="w-full " src='https://placehold.co/600x540/lightgreen/white?text=UI/UX' alt="UX design"/>
        <div className="font-bold text-xl mb-2 p-3 pb-0">Codexars.com</div>
        <p className='p-3'>The name codexARS comes from the Latin words codex, meaning code, and ars, meaning art. This website was created not only as a personal blog for marking progress on personal projects but also to educate and inspire others on some things code related, or art related, sometimes both!</p>
       
        <a className='absolute pl-2 p-1 rounded-tr-xl z-2 text-white bg-[#242424] hover:pl-10 duration-200 bottom-0'>{'view work>>'}</a>
      </div>
      
     </div>
     
    </>
  )
}

export default Home
