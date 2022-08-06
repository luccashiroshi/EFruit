import axios from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";
import FruitCard from "./Fruit";
import styles from '../styles/List.module.css'

export default function List() {

    const url = 'http://localhost:3001'
    const [fruits, setFruits] = useState([])

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

    // useEffect(() => {
    //     fetch('https://fruityvice.com/api/fruit/all')
    //         .then(response => response.json())
    //         .then(data => setFruits(data))
    // }, [])

    useEffect(() => {
        fetch(`${url}/fruits`)
            .then(response => response.json())
            .then(data => setFruits(data))
    }, [])

    return (
        <div className={styles.content}>
            <ul>
                {fruits.map((fruit: typeFruit) => {
                    return (
                        <li key={fruit.id}>
                            <FruitCard name={fruit.name} nutrients={fruit.nutritions} id={fruit.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}