import { Cta } from "~/components/ui/Cta";
import { Separator } from "~/components/ui/Separator";

type ResourceBlockProps = {
  glyph: string;
  title: string;
  description: string;
  cta: { label: string; to?: string; href?: string };
};

/** Home-page card with a line-art glyph, blurb, and a single call to action. */
export function ResourceBlock({ glyph, title, description, cta }: ResourceBlockProps) {
  return (
    <div className="m-[50px] flex h-[200px] w-[500px] items-center rounded-[20px] border border-line bg-surface pr-[15px] shadow-card max-md:mx-auto max-md:my-5 max-md:h-fit max-md:w-[85%] max-md:p-2">
      <div className="mx-2.5 shrink-0 px-[15px] max-md:mx-0">
        <img src={glyph} alt="" className="w-[70px] max-w-none max-md:w-[50px]" />
      </div>
      <div className="mx-2.5 max-md:m-0 max-md:px-2.5 max-md:py-[15px]">
        <h3 className="text-xl font-bold capitalize">{title}</h3>
        <Separator className="mx-0 my-2 w-10" />
        <p className="text-muted">{description}</p>
        <div className="mt-5">
          <Cta to={cta.to} href={cta.href} external={Boolean(cta.href)} className="text-sm">
            {cta.label}
          </Cta>
        </div>
      </div>
    </div>
  );
}
