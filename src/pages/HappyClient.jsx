function HappyClient({img,comment,name}) {
    return (
       
          <div className=" flex max-w-2xl gap-6 group ">
            <div className="  bg-white/40 items-center m-2 duration-500 group-hover:blur-sm  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl ">
                <img src={img} alt='1' className=" rounded h-60 mx-auto"/>
                <h4 className="uppercase text-xl font-bold text-black">{name}</h4>
           <p className="text-sm leading-7 my-3 text-black ">{comment}</p>
           {/* <button className="bg-btn bg-primary-500 py-2.5 px-8 rounded-full">Get in Touch</button> */}
          
            </div>

          </div>
        
    )
}

export default HappyClient
