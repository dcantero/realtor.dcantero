import type { Route } from "./+types/camden-county-market-report";
import { CamdenCountyMap } from "~/components/map/CamdenCountyMap";
import { Cta } from "~/components/ui/Cta";
import { camdenCountyReports } from "~/content/market-reports";
import { pageMeta } from "~/lib/meta";
import { useSite } from "~/lib/use-site";

export const meta: Route.MetaFunction = ({ matches }) =>
  pageMeta(matches, "Camden County Market Report", "Market activity reports by town for Camden County, New Jersey.");

export default function CamdenCountyMarketReport() {
  const site = useSite();
  return (
    <>
      <h1 className="mx-auto my-[30px] text-center text-[2em] font-bold max-md:max-w-[85%]">
        Camden County Market Report
      </h1>
      <div className="flex flex-wrap justify-center">
        <Cta href={site.links.homeValuation} external className="m-5">
          What's My Home Worth?
        </Cta>
        <Cta to="/under-development" className="m-5">
          How You Can Sell Your Home
        </Cta>
      </div>
      <div className="my-[30px] flex flex-col items-center justify-center">
        <h3 className="mb-[5px] text-2xl font-bold">Market Reports By Town</h3>
        <h4 className="mb-5">(More reports to be added)</h4>
        {camdenCountyReports.map((report) =>
          report.url ? (
            <a
              key={report.town}
              href={report.url}
              target="_blank"
              rel="noreferrer"
              className="m-0.5 p-[5px] transition-colors duration-300 hover:text-gray-500"
            >
              {report.town}
            </a>
          ) : (
            <span key={report.town} className="m-0.5 p-[5px] text-muted">
              {report.town} (coming soon)
            </span>
          ),
        )}
      </div>
      <CamdenCountyMap className="my-[30px] mb-[90px]" />
    </>
  );
}
