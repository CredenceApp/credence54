function CtaForm() {
  return (
    <div className="bg-white lg:shadow-lg lg:rounded-[16px] p-4 lg:-translate-y-[120px] lg:mx-auto lg:w-[95%] relative">
      <form action="" className="p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" id="contact">
          <div className="maintext">
            <div>
              <p className="uppercase my-3 text-center">Contact us</p>
            </div>
            <div>
              <p className="text-center md:text-left">
                Please use this form to contact us and we will get back to you
                as soon as possible!
              </p>
            </div>
          </div>
          <div className="formbox">
            <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-2  mb-3">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#F0F0F0] outline-none p-2 w-[100%]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#F0F0F0] outline-none p-2 w-[100%]"
                />
              </div>
            </div>
            <div>
              <textarea
                className=" border rounded-md p-2 outline-none bg-[#F0F0F0] w-[100%] md:w-[25rem]"
                rows="4"
                cols="35"
                placeholder="Write a message"
              ></textarea>
            </div>
            <div className="mt-8 flex justify-center md:block">
              <button className=" bg-[#F08A25] text-white py-1 px-14 rounded-[8px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CtaForm;
