import { Cta } from "~/components/ui/Cta";

export function NotFoundView() {
  return (
    <div className="mt-[160px] ml-20 max-md:mt-10 max-md:ml-[30px]">
      <h1 className="text-[150px] font-bold leading-none">404</h1>
      <p className="text-xl">Looks like this page doesn't exist! Click below to go back home ↙</p>
      <div className="my-[15px]">
        <Cta to="/">Home</Cta>
      </div>
    </div>
  );
}
