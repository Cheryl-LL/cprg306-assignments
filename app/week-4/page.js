import GoBackComponent from "../_components/go-back-component";
import NewItem from "./new-item";

export default function Week4Page() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const addCategory = () => {

    }

    return (
        <main>
            <NewItem />
            <GoBackComponent />
        </main>
    );
}