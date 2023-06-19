import Item from "@/shared/data"
import relume from "public/vector.png"
import HorizontalScroll from "@/app/components/horizontalScroll"
import SvgIcons from "public/svg/SvgIcons"
import { monumentExtended } from "@/shared/fontLoader";

const Partners = () => {
  const items = [
    { id: 1, image1: <SvgIcons.WSvg />, partner: <span className="text-2xl">Webflow</span> },
    { id: 2, image1: <SvgIcons.RelumeSvg />, partner: <span className="text-2xl"> Relume</span> },
  ]

  return (
    <section className="bg-darkDeep pt-16 pb-16">
      <div className={`${monumentExtended.className} text-center text-white text-3xl font-extrabold tracking-tighter pt-10 mb-10 `}>Partners</div>
      <HorizontalScroll baseVelocity={-2}>
        {items.map((item, index) => {
          return (
            <div key={index} className="bg-gradient-to-r from-blackBox from-6.92% to-purpleBox to-128.11% rounded-2xl py-6 px-3 boxNav">
              <Item {...item} key={index} />
            </div>
          )
        })}
      </HorizontalScroll>
    </section>
  )
}
// from-blackBox to-purpleBox

export default Partners