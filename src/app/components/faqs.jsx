import { monumentExtended } from "@/shared/fontLoader";
import Image from 'next/image'
import Faq1 from 'public/Spline-3.png'
import Faq2 from 'public/Spline-9.png'

const Faq = () => {
  return (
    <section className="flex xs:flex-col xl:flex-row justify-center py-[100px] mx-auto  w-11/12 relative xs:gap-10 xl:gap-0">
      <div className="flex">
        <h2 className={`${monumentExtended.className} tracking-[-0.09em] font-extrabold text-white leading-[58px] text-[48px] z-20 order-1 xl:pe-[30px]`}>Your <br className="xl:block md:hidden" /> questions answered</h2>
        <div className="hidden xl:flex flex-col items-center justify-center mt-[220px] order-2">
          <Image
            className="absolute left-[-25px]"
            // width={500}
            src={Faq1}
            alt="Faq1"
          />
          <Image
            className="absolute left-[-57px]"
            width={720}
            src={Faq2}
            alt="Faq2"
          />

        </div>
      </div>
      <div className="">
        <div className="collapse collapse-plus bg-darkDeep  xl:w-[732px] drop-shadow-faqShadow border-solid border-[2.5px] rounded-lg border-white text-white mb-8">
          <input type="radio" name="my-accordion-3" defaultChecked={true} />
          <div className="collapse-title text-xl font-medium ">
            What is an NFT?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero qui minus et eveniet temporibus nostrum tempora debitis magnam expedita dicta.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-darkDeep xl:w-[732px] drop-shadow-faqShadow border-solid border-[2.5px] rounded-lg border-white text-white mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What makes our NFT special?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus magnam, recusandae alias molestiae qui explicabo voluptatem at eius pariatur.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-darkDeep  xl:w-[732px] drop-shadow-faqShadow border-solid border-[2.5px] rounded-lg border-white text-white mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title xs:text-lg sm:text-xl  font-medium">
            Who’s the team behind our NFT?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus temporibus commodi minus repellat, beatae magnam animi nesciunt fugiat exercitationem rem?</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-darkDeep xl:w-[732px] drop-shadow-faqShadow border-solid border-[2.5px] rounded-lg border-white text-white mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            When does minting begin?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nobis quis earum eligendi expedita ipsa itaque tenetur quisquam ab iusto?</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-darkDeep xl:w-[732px] drop-shadow-faqShadow border-solid border-[2.5px] rounded-lg border-white text-white mb-8">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Who can mint one?
          </div>
          <div className="collapse-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta porro labore dolor. Reiciendis deleniti dolore sequi consectetur repellat animi necessitatibus.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;