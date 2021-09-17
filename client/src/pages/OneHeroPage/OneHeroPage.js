import React, {useEffect, useState} from 'react';
import {Image} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import styles from './OneHeroPage.module.css'
import {fetchOneHero} from "../../http/heroesAPI";
import MyButton from "../../components/MyButton/MyButton";

const OneHeroPage = () => {
    const [oneHero, setOneHero] = useState([])

    const serv = 'http://localhost:5000/'
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        fetchOneHero(id).then(data => setOneHero(data))
    }, [])

    return (
        <div className={styles.wrapper}>
            <Image className={styles.img} src={serv + oneHero.images}/>
            <h3>{oneHero.nickname}</h3>
            <h4>Real name: {oneHero.real_name}</h4>
            <div>
                <h4>Description</h4>
                <p>{oneHero.origin_description}</p>
                <h4>Superpowers</h4>
                <p>{oneHero.superpowers}</p>
                <h4>Catch phrase</h4>
                <p className="card-text">{oneHero.catch_phrase}</p>
            </div>
        <MyButton
            onClick={() => history.push('/hero')}
            style={{marginTop: 30, paddingRight: 40, paddingLeft: 40}}
        >
            Back
        </MyButton>
        </div>
    );
};

export default OneHeroPage;