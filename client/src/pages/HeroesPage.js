import React, {useEffect, useState} from 'react';
import style from "../App.module.css";
import MyButton from "../components/MyButton/MyButton";
import CreateHeroModal from "../components/MyModal/CreateHeroModal/CreateHeroModal";
import HeroCard from "../components/HeroCard/HeroCard";
import {Row} from "react-bootstrap";
import {fetchHeroes} from "../http/heroesAPI";
import AppPagination from "../components/AppPagination";

const HeroesPage = () => {
    const [heroes, setHeroes] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(1)
    const limit = 5

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        fetchHeroes(page, limit).then(data => {
            setHeroes(data.rows)
            setTotalCount(data.count)
        })
    }, [page])

    useEffect(() => {
        fetchHeroes(page, limit).then(data => {
            setHeroes(data.rows)
            setTotalCount(data.count)
        })
    }, [heroes])

    return (
        <div className={style.App}>
            <header className={style.header}>Heroes</header>
            <MyButton onClick={() => setModalVisible(true)}>
                Create Hero
            </MyButton>
            <CreateHeroModal
                heroes={heroes}
                setHeroes={setHeroes}
                totalCount={totalCount}
                setTotalCount={setTotalCount}
                show={modalVisible}
                onHide={() => setModalVisible(false)}
            />

            <Row className={style.cardWrapper}>
                {heroes.map(hero =>
                    <HeroCard
                        key={hero.id}
                        heroes={heroes}
                        setHeroes={setHeroes}
                        hero={hero}
                    />
                )}
                <AppPagination
                    heroes={heroes}
                    setHeroes={setHeroes}
                    totalCount={totalCount}
                    setTotalCount={setTotalCount}
                    page={page}
                    setPage={setPage}
                    limit={limit}
                />
            </Row>
        </div>
    );
};

export default HeroesPage;