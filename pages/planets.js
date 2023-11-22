import { PlanetInfoCard } from "../components/planetInfoCard";
import CommanLayout from "../layouts/comman";

//============================================================
export default function Home() {


    return (
        // =============== VIEW ===========================

        <CommanLayout>
            <div>

                <h1 className="h1  h2Responsive">Meet yours Celestial Companions! </h1>
            </div>
            <PlanetInfoCard />

        </CommanLayout>
    )
}