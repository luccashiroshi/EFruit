import { useEffect, useState } from "react";
import FruitCard from "./Fruit";
import styles from '../styles/List.module.css'

export default function List() {

    const networkUrl = "http://192.168.1.60:3001"
    // const url = 'http://localhost:3001'

    const [fruits, setFruits] = useState([])

    // useEffect(() => {
    //     fetch('https://fruityvice.com/api/fruit/all')
    //         .then(response => response.json())
    //         .then(data => setFruits(data))
    // }, [])

    useEffect(() => {
        fetch(`${networkUrl}/fruits`)
            .then(response => response.json())
            .then(data => setFruits(data))
    }, [])

    type typeFruit = {
        name: string,
        id: number,
        nutritions: {
            carbohydrates: number,
            protein: number,
            fat: number,
            calories: number,
            sugar: number,
        }

    }

    return (
        <div className={styles.content}>
            <ul>
                {fruits.map((fruit: typeFruit) => {
                    return (
                        <li key={fruit.id}>
                            <FruitCard name={fruit.name} nutrients={fruit.nutritions} id={fruit.id}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}