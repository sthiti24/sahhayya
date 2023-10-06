import React from "react";

function Problem() {
  return (
    <div className=" justify-center relative flex-row max-md:flex-col flex lg:gap-[10em]  px-8 max-md:gap-4 py-4 overflow-x-hidden h-full w-screen ">
        
      <div className="flex flex-col justify-center items-center  xl:w-[20em] gap-4 ">
        <div>
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tC3ZbCDytwkgeumHajP68Xb87zs7kk7umA&usqp=CAU"}
            height="100"
            width="100"
            alt=""
          />
        </div>
        <div  className="flex flex-col gap-3 items-center justify-center ">
            <h1 className="max-md:text-medium font-bold font-mediem text-base">hello</h1>
            <p className="max-md:text-base text-sm text-center">hello</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  xl:w-[20em] gap-4 ">
        <div>
          <img
            src={"https://www.actionagainsthunger.org/app/uploads/2022/10/Afghanistan_2022_Sandra-Calligaro_17-scaled-aspect-ratio-1920-1080.jpg"}
            height="70px"
            width="70px"
            alt=""
          />
        </div>
        <div  className="flex flex-col gap-3 items-center justify-center">
            <h1 className="max-md:text-medium font-bold  text-base">hello</h1>
            <p className="max-md:text-base text-center text-sm">hello</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center xl:w-[20em] gap-4">
        <div>
          <img
            src={"https://www.wfpusa.org/wp-content/uploads/2020/04/1_Bn5byGcZ3xuyh-ETX4MQcQ-1400x788.jpeg"}
            height="70"
            width="70"
            alt=""
          />
        </div>
        <div  className="flex flex-col gap-3 items-center justify-center">
            <h1 className="max-md:text-medium  font-bold text-base">hello</h1>
            <p className="max-md:text-base text-sm text-center">hello</p>
        </div>
      </div>
    </div>
  );
}

export default Problem;