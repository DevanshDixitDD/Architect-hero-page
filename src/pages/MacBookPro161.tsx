import { FunctionComponent, useEffect } from "react";

const MacBookPro161: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white w-full h-[8035px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-21xl text-color-2 font-poppins"
      data-animate-on-scroll
    >
      <div className="absolute top-[1561px] left-[800px] rounded-xl box-border w-[630px] h-[806px] border-[2px] border-solid border-black" />
      <div className="absolute top-[1561px] left-[1609px] rounded-xl box-border w-[631px] h-[806px] border-[2px] border-solid border-black" />
      <div className="absolute top-[1559px] left-[2381px] rounded-xl box-border w-[630px] h-[808px] border-[2px] border-solid border-black" />
      <div className="absolute top-[303px] left-[calc(50%_-_1395.5px)] rounded-[35px] bg-gold w-[2790px] h-[1144px]" />
      <div className="absolute top-[3969px] left-[calc(50%_-_1594.5px)] bg-gold w-[3189px] h-[1524px]" />
      <div className="absolute top-[875px] left-[370px] flex flex-col items-start justify-start gap-[48px] text-45xl">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start gap-[48px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-medium">50+</div>
              <div className="relative text-21xl font-medium">Categories</div>
            </div>
            <div className="relative box-border w-px h-[65px] border-r-[1px] border-solid border-color-2" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-medium">100+</div>
              <div className="relative text-21xl font-medium">Customers</div>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl bg-white w-[914px] h-[105px] overflow-hidden shrink-0 text-21xl text-color-4">
          <div className="absolute top-[23px] left-[27px] font-medium">
            What are you looking for?
          </div>
          <div className="absolute top-[11px] left-[812px] rounded-xl bg-gold w-[82px] h-[82px]" />
          <img
            className="absolute top-[35px] left-[836px] w-[35px] h-[34px] overflow-hidden"
            alt=""
            src="/search.svg"
          />
        </div>
      </div>
      <div className="absolute top-[433px] left-[370px] text-[200px] leading-[190px] font-extrabold text-black inline-block w-[1545px]">
        Buy your dream plans
      </div>
      <div className="absolute top-[91px] left-[220px] text-45xl leading-[130px] font-extrabold text-gold">
        ADD TRENDS
      </div>
      <div className="absolute top-[127px] left-[1530px] flex flex-row items-start justify-start gap-[48px] text-17xl text-color-4">
        <div className="relative font-medium text-color-2">Home</div>
        <div className="relative font-medium">Products</div>
        <div className="relative font-medium">Contacts</div>
      </div>
      <div className="absolute top-[131px] left-[2695px] flex flex-row items-center justify-start gap-[48px]">
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
          alt=""
          src="/cart.svg"
        />
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
          alt=""
          src="/person.svg"
        />
        <div className="relative box-border w-0.5 h-[33px] border-r-[2px] border-solid border-color-2" />
        <img
          className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
          alt=""
          src="/filterright.svg"
        />
      </div>
      <img
        className="absolute top-[379.02px] left-[2756.95px] w-[135.12px] h-[261.18px]"
        alt=""
        src="/vector-187.svg"
      />
      <img
        className="absolute top-[1089.1px] left-[1532.95px] w-[319.18px] h-[147.21px]"
        alt=""
        src="/vector-186.svg"
      />
      <div className="absolute top-[1566px] left-[199px] flex flex-col items-start justify-start gap-[24px] text-45xl">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <b className="relative inline-block w-[433px]">
            Best Selling Products
          </b>
          <div className="relative text-29xl font-medium text-color-4 inline-block w-[531px]">{`Easiest way to healthy life by buying your favorite plants `}</div>
        </div>
        <div className="rounded-[10px] bg-gold w-[274px] h-[73px] flex flex-row py-3 px-6 box-border items-center justify-start gap-[10px] text-13xl">
          <div className="relative font-medium">See more</div>
          <img
            className="relative w-[39px] h-[34px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
      <div className="absolute top-[1583px] left-[2381px] flex flex-col items-start justify-start gap-[12px]">
        <img
          className="relative rounded-xl w-[608px] h-[784px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <div className="relative font-medium">Purses</div>
          <div className="relative font-medium text-color-4">₱ 1,400.00</div>
        </div>
      </div>
      <div className="absolute top-[1585px] left-[1604px] flex flex-col items-start justify-start gap-[12px]">
        <img
          className="relative rounded-xl w-[608px] h-[784px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-91@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <div className="relative font-medium">T-shirts</div>
          <div className="relative font-medium text-color-4">₱ 1,400.00</div>
        </div>
      </div>
      <div className="absolute top-[1583px] left-[800px] flex flex-col items-start justify-start gap-[12px]">
        <img
          className="relative rounded-xl w-[608px] h-[784px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-92@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[7px]">
          <div className="relative font-medium">Shoes</div>
          <div className="relative font-medium text-color-4">₱ 1,400.00</div>
        </div>
      </div>
      <div className="absolute top-[2775px] left-[199px] bg-white w-[2790px] h-[577px] overflow-hidden text-29xl">
        <div className="absolute top-[-1px] left-[31px] w-[2759px] flex flex-col items-center justify-start gap-[48px]">
          <div className="flex flex-col items-center justify-start gap-[12px]">
            <b className="relative">About us</b>
            <div className="relative text-21xl font-medium text-color-4">
              Order now and appreciate the beauty of nature
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-black">
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="flex flex-col items-center justify-start gap-[24px]">
                <img
                  className="relative w-[145px] h-[145px]"
                  alt=""
                  src="/group-1.svg"
                />
                <b className="relative">Large Assortment</b>
              </div>
              <div className="relative text-21xl font-medium text-color-4 text-center inline-block w-[890px]">
                we offer many different types of products with fewer variations
                in each category.
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="flex flex-col items-center justify-start gap-[24px]">
                <img
                  className="relative w-[145px] h-[145px]"
                  alt=""
                  src="/group-11.svg"
                />
                <b className="relative">{`Fast & Free Shipping`}</b>
              </div>
              <div className="relative text-21xl font-medium text-color-4 text-center inline-block w-[837px]">
                4-day or less delivery time, free shipping and an expedited
                delivery option.
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="flex flex-col items-center justify-start gap-[24px]">
                <img
                  className="relative w-[145px] h-[145px]"
                  alt=""
                  src="/group-12.svg"
                />
                <b className="relative">24/7 Support</b>
              </div>
              <div className="relative text-21xl font-medium text-color-4 text-center inline-block w-[803px]">
                answers to any business related inquiry 24/7 and in real-time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3643px] left-[calc(50%_-_267.5px)] flex flex-col items-center justify-start gap-[12px] text-29xl">
        <b className="relative">Categories</b>
        <div className="relative text-21xl font-medium text-color-4">
          Find what you are looking for
        </div>
      </div>
      <div className="absolute top-[3878px] left-[2212px] flex flex-col items-center justify-start gap-[12px] text-29xl">
        <img
          className="relative rounded-xl w-[635px] h-[1000px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-37@2x.png"
        />
        <b className="relative inline-block w-[353px] h-[53px] shrink-0">
          Winter Coats
        </b>
      </div>
      <div className="absolute top-[3878px] left-[334px] flex flex-col items-center justify-start gap-[12px] text-29xl">
        <img
          className="relative rounded-xl w-[635px] h-[1000px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-371@2x.png"
        />
        <b className="relative inline-block w-[364px] h-[53px] shrink-0">
          Men’s Jackets
        </b>
      </div>
      <div className="absolute top-[4058px] left-[1273px] flex flex-col items-center justify-start gap-[24px] text-29xl">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="flex flex-col items-center justify-start gap-[12px]">
            <img
              className="relative rounded-xl w-[635px] h-[1000px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-38@2x.png"
            />
            <b className="relative">Sandals</b>
          </div>
          <div className="relative text-21xl font-medium text-color-4 text-center inline-block w-[626px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="rounded-lg bg-white w-60 h-[73px] flex flex-row py-3 pr-6 pl-[35px] box-border items-center justify-start gap-[10px] text-center text-13xl">
          <div className="relative font-medium">Explore</div>
          <img
            className="relative w-[42px] h-[34px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright1.svg"
          />
        </div>
      </div>
      <b className="absolute top-[5764px] left-[352px] text-45xl inline-block text-black w-[1339px]">
        What customers say about ADD TRENDS?
      </b>
      <div className="absolute top-[6145px] left-[352px] rounded-xl bg-gold w-[1860px] h-[689px] overflow-hidden">
        <div className="absolute top-[98px] left-[144px] font-medium text-gray-200 inline-block w-[1595px]">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
        <div className="absolute top-[413px] left-[340px] flex flex-col items-start justify-start">
          <b className="relative">John Doe</b>
          <div className="relative text-5xl font-medium text-color-4">
            Youtuber
          </div>
        </div>
        <div className="absolute top-[413px] left-[1516px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/starfill.svg"
          />
          <b className="relative">4.5</b>
        </div>
        <img
          className="absolute top-[324px] left-[111px] w-[272px] h-[365px]"
          alt=""
          src="/frame-93.svg"
        />
      </div>
      <div className="absolute top-[6145px] left-[2475px] rounded-xl bg-gold w-[1860px] h-[689px] overflow-hidden">
        <div className="absolute top-[98px] left-[144px] font-medium text-gray-200 inline-block w-[1595px]">
          Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
        <img
          className="absolute h-[12.42%] w-[6%] top-[60.23%] right-[86.26%] bottom-[27.34%] left-[7.74%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <div className="absolute top-[413px] left-[340px] flex flex-col items-start justify-start">
          <b className="relative">John Doe</b>
          <div className="relative text-5xl font-medium text-color-4">
            Youtuber
          </div>
        </div>
        <div className="absolute top-[413px] left-[1516px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/starfill.svg"
          />
          <b className="relative">4.5</b>
        </div>
        <img
          className="absolute top-[331px] left-[129px] w-[221px] h-[356px] object-cover"
          alt=""
          src="/unsplash-o3ymvt7wf9uremovebgpreview@2x.png"
        />
      </div>
      <div className="absolute top-[5819px] left-[2754px] flex flex-row items-start justify-start gap-[6px]">
        <div className="relative rounded-xl bg-gold w-[179px] h-5" />
        <div className="relative rounded-xl bg-gainsboro w-[85px] h-5" />
        <div className="relative rounded-xl bg-gainsboro w-[85px] h-5" />
      </div>
      <div className="absolute top-[7131px] left-[0px] bg-gold w-[3189px] h-[904px]" />
      <img
        className="absolute h-[0.75%] w-[1.88%] top-[95.47%] right-[86.11%] bottom-[3.78%] left-[12.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[7651px] left-[363px] rounded-[50%] box-border w-[100px] h-[100px] border-[5px] border-solid border-white" />
      <img
        className="absolute h-[0.57%] w-[1.79%] top-[95.58%] right-[81.59%] bottom-[3.85%] left-[16.62%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <div className="absolute top-[7651px] left-[508px] rounded-[50%] box-border w-[100px] h-[100px] border-[5px] border-solid border-white" />
      <img
        className="absolute h-[1.19%] w-[2.95%] top-[95.22%] right-[76.58%] bottom-[3.58%] left-[20.48%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
      <div className="absolute top-[7307px] left-[363px] text-77xl font-pragati-narrow text-white">
        ADD Trends
      </div>
      <div className="absolute top-[7469px] left-[363px] text-29xl font-pragati-narrow text-white inline-block w-[536px]">
        This is the fashion place for you, Get what you want.
      </div>
      <div className="absolute top-[7427px] left-[1962px] flex flex-row items-start justify-start gap-[48px] text-color-4">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <b className="relative text-29xl text-color-2">Information</b>
          <div className="relative">About</div>
          <div className="relative">Product</div>
          <div className="relative">Blog</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <b className="relative text-29xl text-color-2">Company</b>
          <div className="relative">Community</div>
          <div className="relative">Career</div>
          <div className="relative">Our story</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <b className="relative text-29xl text-color-2">Contact</b>
          <div className="relative">Getting Started</div>
          <div className="relative">Pricing</div>
          <div className="relative">Resources</div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro161;
