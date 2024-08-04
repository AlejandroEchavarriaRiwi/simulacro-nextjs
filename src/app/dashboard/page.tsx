import { error } from "console";
import SearchBar from "../../../components/searchbar";

export default async function MainWeatherPage() {
        return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-lg"> {/* Cambié max-w-md a max-w-lg */}
                <SearchBar /> {/* Añadí w-full para hacer la SearchBar ancha */}
            </div>
        </div>
    ) 
}
