import Details from "@/components/Cars/Details"
import { useRouter } from "next/router"

function CarsDetails() {
    const router = useRouter()
    router.query.carsId

    return (
        <Details/>
    )
}

export default CarsDetails