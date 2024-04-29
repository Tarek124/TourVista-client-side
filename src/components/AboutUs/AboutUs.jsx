export default function AboutUs() {
  return (
    <section className="bg-[#f2f2f7]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row">
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53eeec84c014ec421d16_Group%20183.png"
            alt=""
            className="inline-block max-w-xl"
          />
          <div className="flex flex-col items-start lg:justify-center">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358ca7f4a2963633083434e_PayPal%20Logo-2.svg"
              alt=""
              className="mb-4 inline-block"
            />
            <p className="mb-6 max-w-md text-[#636262] md:mb-12">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, “Lorem ipsum dolor sit
              amet, consectetur adipiscing elit ut aliquam, purus sit amet
              luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
              dolor purus non enim.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.”
            </p>
            <p className="font-bold">John Robert</p>
            <p className="text-sm text-[#647084]">Senior Webflow Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
