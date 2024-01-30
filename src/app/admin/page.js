import React from "react";

function page() {
  return (
    <div className=" flex h-[100vh] justify-center items-center flex-col">
      <div className="flex flex-col gap-5 justify-center items-center gradiant w-[450px] h-[400px] ">
        <h2 className="font-bold text-[30px]">Connexion</h2>
        <form className="flex flex-col gap-6 w-[75%] ">
          <div>
            <label id=""></label>
            <input type="text" className="w-[100%] border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" placeholder="" />
          </div>
          <div>
            <label id=""></label>
            <input type="text" className="w-[100%] border-[1px] border-[rgba(90,86,86,0.18)] rounded-[4px] outline-none" placeholder="" />
          </div>
          <div class="form-example" className="">
            <input type="submit" className="text-white w-[100%] border-[1px] outline-none rounded-[4px] text-[18px] bg-[rgba(206,19,34,0.78)] cursor-pointer py-[7px]" value="Se connecter" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
